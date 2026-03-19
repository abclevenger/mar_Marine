import { NextResponse } from "next/server";

const WEBHOOK_URL =
  process.env.LEADCONNECTOR_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/ANccYHXfzBhIwRKtX0b4/webhook-trigger/ff5ba19f-3318-4e9f-99b7-f8cfcdc06636";

type LaunchRequestPayload = {
  form_type?: string;
  full_name?: string;
  phone?: string;
  email?: string;
  boat_name?: string;
  boat_length?: string;
  boat_type?: string;
  storage_location?: string;
  launch_date?: string;
  launch_time?: string;
  return_time?: string;
  passengers?: string;
  estimated_arrival_time?: string;
  add_ons?: string[];
  other_add_on?: string;
  special_instructions?: string;
  preferred_contact_method?: string;
  urgency?: string;
  need_return_haul?: string;
  source?: string;
  landing_page?: string;
};

function clean(value?: string): string {
  return (value || "").trim();
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function isWithin24Hours(dateText: string, timeText: string): boolean {
  if (!dateText || !timeText) return false;
  const requestedAt = new Date(`${dateText}T${timeText}:00`);
  if (Number.isNaN(requestedAt.getTime())) return false;
  const diffMs = requestedAt.getTime() - Date.now();
  return diffMs >= 0 && diffMs <= 24 * 60 * 60 * 1000;
}

export async function POST(request: Request) {
  let body: LaunchRequestPayload;
  try {
    body = (await request.json()) as LaunchRequestPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = clean(body.full_name);
  const phone = clean(body.phone);
  const email = clean(body.email);
  const boatName = clean(body.boat_name);
  const launchDate = clean(body.launch_date);
  const launchTime = clean(body.launch_time);

  if (!fullName || !phone || !boatName || !launchDate || !launchTime) {
    return NextResponse.json(
      { error: "Full name, phone, boat name, launch date, and launch time are required." },
      { status: 400 },
    );
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }

  if (email && !isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const addOns = Array.isArray(body.add_ons) ? body.add_ons.map((item) => clean(item)).filter(Boolean) : [];
  const otherAddOn = clean(body.other_add_on);
  const urgency = clean(body.urgency) || "Standard";
  const needReturnHaul = clean(body.need_return_haul) || "No";
  const rushRequest = isWithin24Hours(launchDate, launchTime);
  const priorityRequest = urgency === "Urgent" || urgency === "Same Day";
  const fuelSelected = addOns.includes("Fuel");

  const notes = [
    clean(body.special_instructions),
    otherAddOn ? `Other add-on: ${otherAddOn}` : "",
    fuelSelected ? "Team flag: Prepare fueling before launch." : "",
    needReturnHaul === "Yes" ? "Team flag: Include return haul / re-rack planning." : "",
    priorityRequest ? `Priority request: ${urgency}.` : "",
    rushRequest ? "Rush request: launch date/time is within 24 hours." : "",
  ]
    .filter(Boolean)
    .join("\n");

  const payload = {
    form_type: "boat_launch_request",
    full_name: fullName,
    phone,
    email,
    boat_name: boatName,
    boat_length: clean(body.boat_length),
    boat_type: clean(body.boat_type),
    storage_location: clean(body.storage_location),
    launch_date: launchDate,
    launch_time: launchTime,
    return_time: clean(body.return_time),
    passengers: clean(body.passengers),
    estimated_arrival_time: clean(body.estimated_arrival_time),
    add_ons: addOns,
    other_add_on: otherAddOn,
    special_instructions: clean(body.special_instructions),
    preferred_contact_method: clean(body.preferred_contact_method),
    urgency,
    need_return_haul: needReturnHaul,
    source: clean(body.source) || "mar-marina-next-boat-launch-request",
    page: clean(body.landing_page) || "/boat-launch-request",
    workflow_flags: {
      fuel_selected: fuelSelected,
      priority_request: priorityRequest,
      rush_request: rushRequest,
      return_haul_requested: needReturnHaul === "Yes",
      has_other_add_on: Boolean(otherAddOn),
    },
    message: [
      `Boat Launch Request`,
      `Customer: ${fullName}`,
      `Boat: ${boatName}${clean(body.boat_type) ? ` (${clean(body.boat_type)})` : ""}`,
      `Launch: ${launchDate} at ${launchTime}`,
      addOns.length ? `Add-ons: ${addOns.join(", ")}` : "Add-ons: None selected",
      notes ? `Notes:\n${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n\n"),
  };

  try {
    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json({ error: "Webhook rejected launch request." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, payload }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to reach webhook." }, { status: 502 });
  }
}
