import { NextResponse } from "next/server";

const WEBHOOK_URL =
  process.env.LEADCONNECTOR_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/ANccYHXfzBhIwRKtX0b4/webhook-trigger/ff5ba19f-3318-4e9f-99b7-f8cfcdc06636";

type SchedulePayload = {
  name?: string;
  email?: string;
  phone?: string;
  inspectionWindow?: string;
  inspectionDateRange?: string;
  source?: string;
  landingPage?: string;
};

function clean(value?: string): string {
  return (value || "").trim();
}

export async function POST(request: Request) {
  let body: SchedulePayload;
  try {
    body = (await request.json()) as SchedulePayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const inspectionWindow = clean(body.inspectionWindow);
  const inspectionDateRange = clean(body.inspectionDateRange);
  const source = clean(body.source) || "mar-marina-next-inspection-scheduler";
  const landingPage = clean(body.landingPage) || "/contact.html#quote";

  if (!name || !email || !inspectionWindow || !inspectionDateRange) {
    return NextResponse.json(
      { error: "Missing required inspection scheduling fields." },
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
        message: `Inspection follow-up requested\n\nPreferred date window: ${inspectionDateRange}\nPreferred time window: ${inspectionWindow}`,
        source,
        page: landingPage,
        lead_stage: "inspection_scheduler_follow_up",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json({ error: "Webhook rejected inspection scheduling request." }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to reach webhook." }, { status: 502 });
  }
}
