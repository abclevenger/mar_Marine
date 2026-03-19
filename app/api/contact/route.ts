import { NextResponse } from "next/server";
import { Buffer } from "node:buffer";

const WEBHOOK_URL =
  process.env.LEADCONNECTOR_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/ANccYHXfzBhIwRKtX0b4/webhook-trigger/ff5ba19f-3318-4e9f-99b7-f8cfcdc06636";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  serviceNeeded?: string;
  boatType?: string;
  message?: string;
  sms_consent_transactional?: boolean;
  sms_consent_marketing?: boolean;
  company?: string;
  source?: string;
  landingPage?: string;
};

type UploadedPhoto = {
  name: string;
  type: string;
  size: number;
  base64: string;
};

function clean(value?: string): string {
  return (value || "").trim();
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function toBoolean(value: unknown): boolean {
  return value === true || value === "true" || value === "on" || value === 1;
}

async function fileToBase64(file: File): Promise<string> {
  return Buffer.from(await file.arrayBuffer()).toString("base64");
}

async function parseRequest(request: Request): Promise<{ body: ContactPayload; photos: UploadedPhoto[] }> {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const files = formData.getAll("photos");
    const photos: UploadedPhoto[] = [];

    for (const item of files) {
      if (!(item instanceof File) || !item.size) continue;
      if (!item.type.startsWith("image/")) continue;
      if (item.size > 8 * 1024 * 1024) continue;
      photos.push({
        name: item.name,
        type: item.type,
        size: item.size,
        base64: await fileToBase64(item),
      });
      if (photos.length >= 3) break;
    }

    const body: ContactPayload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      serviceNeeded: String(formData.get("serviceNeeded") || ""),
      boatType: String(formData.get("boatType") || ""),
      message: String(formData.get("message") || ""),
      sms_consent_transactional: toBoolean(formData.get("sms_consent_transactional")),
      sms_consent_marketing: toBoolean(formData.get("sms_consent_marketing")),
      company: String(formData.get("company") || ""),
      source: String(formData.get("source") || ""),
      landingPage: String(formData.get("landingPage") || ""),
    };

    return { body, photos };
  }

  const jsonBody = (await request.json()) as ContactPayload;
  return { body: jsonBody, photos: [] };
}

export async function POST(request: Request) {
  let body: ContactPayload;
  let photos: UploadedPhoto[] = [];

  try {
    const parsed = await parseRequest(request);
    body = parsed.body;
    photos = parsed.photos;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const serviceNeeded = clean(body.serviceNeeded);
  const boatType = clean(body.boatType);
  const message = clean(body.message);
  const smsConsentTransactional = toBoolean(body.sms_consent_transactional);
  const smsConsentMarketing = toBoolean(body.sms_consent_marketing);
  const company = clean(body.company);
  const source = clean(body.source);
  const landingPage = clean(body.landingPage);

  if (company) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!smsConsentTransactional) {
    return NextResponse.json(
      { error: "You must agree to receive service-related messages to submit this form." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        serviceNeeded,
        message: [
          serviceNeeded ? `Service needed: ${serviceNeeded}` : "",
          boatType ? `Boat type: ${boatType}` : "",
          message,
        ]
          .filter(Boolean)
          .join("\n\n"),
        attachments: photos.map((photo) => ({
          name: photo.name,
          mimeType: photo.type,
          fileSize: photo.size,
          base64: photo.base64,
        })),
        attachment_count: photos.length,
        sms_consent_transactional: smsConsentTransactional,
        sms_consent_marketing: smsConsentMarketing,
        source: source || "mar-marina-next-contact-form",
        page: landingPage || "/contact.html",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json({ error: "Webhook rejected request." }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to reach webhook." }, { status: 502 });
  }
}
