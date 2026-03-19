"use client";

import { FormEvent, useMemo, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";
type ContactMethod = "Call" | "Text" | "Email";
type Urgency = "Standard" | "Same Day" | "Urgent";
type ReturnHaul = "Yes" | "No";

type FormErrors = Partial<Record<string, string>>;

const ADD_ON_OPTIONS = [
  "Ice",
  "Fuel",
  "Battery Check",
  "Engine Check",
  "Washdown",
  "Safety Gear Check",
  "Cooler Loaded",
  "Dockside Pickup Ready",
  "Clean / Detail Touch-Up",
  "Fishing Gear Loaded",
  "Water Toys / Tubes Ready",
] as const;

function getAttribution() {
  if (typeof window === "undefined") {
    return { source: "direct", landingPage: "/" };
  }

  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source") || params.get("source") || document.referrer || "direct";
  return {
    source,
    landingPage: window.location.pathname + window.location.search,
  };
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export function BoatLaunchRequestForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [otherSelected, setOtherSelected] = useState(false);
  const attribution = useMemo(() => getAttribution(), []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("full_name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const boatName = String(formData.get("boat_name") || "").trim();
    const launchDate = String(formData.get("launch_date") || "").trim();
    const launchTime = String(formData.get("launch_time") || "").trim();
    const otherAddOn = String(formData.get("other_add_on") || "").trim();

    const validationErrors: FormErrors = {};
    if (!fullName) validationErrors.full_name = "Full name is required.";
    if (!phone) validationErrors.phone = "Phone number is required.";
    else if (!isValidPhone(phone)) validationErrors.phone = "Enter a valid phone number.";
    if (email && !isValidEmail(email)) validationErrors.email = "Enter a valid email address.";
    if (!boatName) validationErrors.boat_name = "Boat name is required.";
    if (!launchDate) validationErrors.launch_date = "Preferred launch date is required.";
    if (!launchTime) validationErrors.launch_time = "Preferred launch time is required.";
    if (otherSelected && !otherAddOn) validationErrors.other_add_on = "Enter your other add-on request.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setMessage("Please fix the highlighted fields and submit again.");
      return;
    }

    const addOns = [
      ...ADD_ON_OPTIONS.filter((option) => formData.getAll("add_ons").includes(option)),
      ...(otherSelected && otherAddOn ? ["Other"] : []),
    ];

    const payload = {
      form_type: "boat_launch_request",
      full_name: fullName,
      phone,
      email,
      boat_name: boatName,
      boat_length: String(formData.get("boat_length") || "").trim(),
      boat_type: String(formData.get("boat_type") || "").trim(),
      storage_location: String(formData.get("storage_location") || "").trim(),
      launch_date: launchDate,
      launch_time: launchTime,
      return_time: String(formData.get("return_time") || "").trim(),
      passengers: String(formData.get("passengers") || "").trim(),
      estimated_arrival_time: String(formData.get("estimated_arrival_time") || "").trim(),
      add_ons: addOns,
      other_add_on: otherSelected ? otherAddOn : "",
      special_instructions: String(formData.get("special_instructions") || "").trim(),
      preferred_contact_method: String(formData.get("preferred_contact_method") || "").trim() as ContactMethod | "",
      urgency: String(formData.get("urgency") || "Standard").trim() as Urgency,
      need_return_haul: String(formData.get("need_return_haul") || "No").trim() as ReturnHaul,
      source: attribution.source,
      landing_page: attribution.landingPage,
    };

    try {
      const response = await fetch("/api/launch-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "Unable to submit launch request.");
      }

      setErrors({});
      setStatus("success");
      setMessage("Launch request submitted. We will confirm availability as soon as possible.");
      form.reset();
      setOtherSelected(false);
      return;
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit launch request.");
    }
  }

  function fieldClass(fieldName: string): string | undefined {
    return errors[fieldName] ? "input-error" : undefined;
  }

  return (
    <form className="contact-form boat-launch-form" onSubmit={onSubmit} noValidate>
      <fieldset className="launch-form-section">
        <legend>Customer Info</legend>
        <label htmlFor="full_name">Full Name</label>
        <input id="full_name" name="full_name" type="text" autoComplete="name" className={fieldClass("full_name")} />
        {errors.full_name ? <p className="field-error">{errors.full_name}</p> : null}

        <label htmlFor="phone">Phone Number</label>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={fieldClass("phone")} />
        {errors.phone ? <p className="field-error">{errors.phone}</p> : null}

        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" autoComplete="email" className={fieldClass("email")} />
        {errors.email ? <p className="field-error">{errors.email}</p> : null}
      </fieldset>

      <fieldset className="launch-form-section">
        <legend>Boat Info</legend>
        <label htmlFor="boat_name">Boat Name</label>
        <input id="boat_name" name="boat_name" type="text" className={fieldClass("boat_name")} />
        {errors.boat_name ? <p className="field-error">{errors.boat_name}</p> : null}

        <label htmlFor="boat_length">Boat Length</label>
        <input id="boat_length" name="boat_length" type="text" placeholder="Example: 28 ft" />

        <label htmlFor="boat_type">Boat Type</label>
        <input id="boat_type" name="boat_type" type="text" placeholder="Center console, pontoon, etc." />

        <label htmlFor="storage_location">Storage Rack / Slip Number (if applicable)</label>
        <input id="storage_location" name="storage_location" type="text" />
      </fieldset>

      <fieldset className="launch-form-section">
        <legend>Launch Details</legend>
        <label htmlFor="launch_date">Preferred Launch Date</label>
        <input id="launch_date" name="launch_date" type="date" className={fieldClass("launch_date")} />
        {errors.launch_date ? <p className="field-error">{errors.launch_date}</p> : null}

        <label htmlFor="launch_time">Preferred Launch Time</label>
        <input id="launch_time" name="launch_time" type="time" className={fieldClass("launch_time")} />
        {errors.launch_time ? <p className="field-error">{errors.launch_time}</p> : null}

        <label htmlFor="return_time">Return Time / Pickup Time (optional)</label>
        <input id="return_time" name="return_time" type="time" />

        <label htmlFor="passengers">Number of Passengers (optional)</label>
        <input id="passengers" name="passengers" type="number" min={0} />

        <label htmlFor="estimated_arrival_time">Estimated Arrival Time (optional)</label>
        <input id="estimated_arrival_time" name="estimated_arrival_time" type="time" />
      </fieldset>

      <fieldset className="launch-form-section">
        <legend>Prepare My Boat With</legend>
        <div className="launch-addons-grid">
          {ADD_ON_OPTIONS.map((option) => {
            const id = `addon-${option.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
            return (
              <label key={option} htmlFor={id} className="launch-addon-item">
                <input id={id} name="add_ons" type="checkbox" value={option} />
                <span>{option}</span>
              </label>
            );
          })}
          <label htmlFor="addon-other" className="launch-addon-item">
            <input
              id="addon-other"
              name="add_ons"
              type="checkbox"
              value="Other"
              onChange={(event) => setOtherSelected(event.currentTarget.checked)}
            />
            <span>Other</span>
          </label>
        </div>
        {otherSelected ? (
          <>
            <label htmlFor="other_add_on">Other Add-On Details</label>
            <input id="other_add_on" name="other_add_on" type="text" className={fieldClass("other_add_on")} />
            {errors.other_add_on ? <p className="field-error">{errors.other_add_on}</p> : null}
          </>
        ) : null}
      </fieldset>

      <fieldset className="launch-form-section">
        <legend>Notes / Preferences</legend>
        <label htmlFor="special_instructions">Special Instructions / Notes</label>
        <textarea id="special_instructions" name="special_instructions" rows={5} />

        <label htmlFor="preferred_contact_method">Best Way to Contact Me</label>
        <select id="preferred_contact_method" name="preferred_contact_method" defaultValue="">
          <option value="" disabled>Select contact preference</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Email">Email</option>
        </select>

        <label htmlFor="urgency">Urgency</label>
        <select id="urgency" name="urgency" defaultValue="Standard">
          <option value="Standard">Standard</option>
          <option value="Same Day">Same Day</option>
          <option value="Urgent">Urgent</option>
        </select>

        <label htmlFor="need_return_haul">Need Return Haul / Re-Rack?</label>
        <select id="need_return_haul" name="need_return_haul" defaultValue="No">
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </fieldset>

      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Launch Request"}
      </button>
      <p className="contact-form-note">
        We&apos;ll review your request and confirm availability as soon as possible.
      </p>

      {message ? (
        <p className={status === "success" ? "form-success" : "form-error"} role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
