import { NextResponse } from "next/server";

const WEBHOOK_URL =
  process.env.LEADCONNECTOR_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/ANccYHXfzBhIwRKtX0b4/webhook-trigger/ff5ba19f-3318-4e9f-99b7-f8cfcdc06636";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  serviceNeeded?: string;
  message?: string;
  sms_consent_transactional?: boolean;
  sms_consent_marketing?: boolean;
  company?: string;
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

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const serviceNeeded = clean(body.serviceNeeded);
  const message = clean(body.message);
  const smsConsentTransactional = toBoolean(body.sms_consent_transactional);
  const smsConsentMarketing = toBoolean(body.sms_consent_marketing);
  const company = clean(body.company);

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
        message: serviceNeeded ? `Service needed: ${serviceNeeded}\n\n${message}` : message,
        sms_consent_transactional: smsConsentTransactional,
        sms_consent_marketing: smsConsentMarketing,
        source: "mar-marina-next-contact-form",
        page: "/contact.html",
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
