"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";
type SchedulerState = "idle" | "saving" | "saved" | "error";

type LastLead = {
  name: string;
  email: string;
  phone: string;
};

function getAttribution() {
  if (typeof window === "undefined") {
    return { source: "direct", landingPage: "/" };
  }

  const params = new URLSearchParams(window.location.search);
  const source =
    params.get("utm_source") || params.get("source") || document.referrer || "direct";

  return {
    source,
    landingPage: window.location.pathname + window.location.search,
  };
}

export function ContactForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [consentError, setConsentError] = useState("");
  const [schedulerStatus, setSchedulerStatus] = useState<SchedulerState>("idle");
  const [schedulerMessage, setSchedulerMessage] = useState("");
  const [lastLead, setLastLead] = useState<LastLead | null>(null);
  const [inspectionWindow, setInspectionWindow] = useState("Morning (8am-12pm)");
  const [inspectionDateRange, setInspectionDateRange] = useState("Within 3 days");
  const attribution = useMemo(() => getAttribution(), []);

  useEffect(() => {
    const sourceInput = document.getElementById("sourceField") as HTMLInputElement | null;
    const pageInput = document.getElementById("pageField") as HTMLInputElement | null;
    if (sourceInput) sourceInput.value = attribution.source;
    if (pageInput) pageInput.value = attribution.landingPage;
  }, [attribution]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    setConsentError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const smsConsentTransactional = formData.get("sms_consent_transactional") === "on";
    const smsConsentMarketing = formData.get("sms_consent_marketing") === "on";

    if (!smsConsentTransactional) {
      setStatus("error");
      setConsentError("You must agree to receive service-related messages to submit this form.");
      return;
    }

    const leadName = String(formData.get("name") || "");
    const leadEmail = String(formData.get("email") || "");
    const leadPhone = String(formData.get("phone") || "");

    formData.set("source", attribution.source);
    formData.set("landingPage", attribution.landingPage);
    formData.set("sms_consent_transactional", String(smsConsentTransactional));
    formData.set("sms_consent_marketing", String(smsConsentMarketing));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit request");
      }

      setStatus("success");
      setMessage("Thank you. Your request has been sent. We will follow up during business hours.");
      setLastLead({ name: leadName, email: leadEmail, phone: leadPhone });
      setSchedulerStatus("idle");
      setSchedulerMessage("");
      window.dispatchEvent(
        new CustomEvent("lead:submitted", {
          detail: {
            source: attribution.source,
            landingPage: attribution.landingPage,
            serviceNeeded: String(formData.get("serviceNeeded") || ""),
          },
        }),
      );
      form.reset();
      return;
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your request right now. Please try again.",
      );
    }
  }

  async function onScheduleSubmit() {
    if (!lastLead) return;

    setSchedulerStatus("saving");
    setSchedulerMessage("");

    try {
      const response = await fetch("/api/contact/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...lastLead,
          inspectionWindow,
          inspectionDateRange,
          source: attribution.source,
          landingPage: attribution.landingPage,
        }),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "Unable to save inspection window.");
      }

      setSchedulerStatus("saved");
      setSchedulerMessage("Inspection preference saved. We will confirm your window during follow-up.");
      window.dispatchEvent(
        new CustomEvent("lead:schedule_confirmed", {
          detail: { source: attribution.source, landingPage: attribution.landingPage, inspectionDateRange, inspectionWindow },
        }),
      );
    } catch (error) {
      setSchedulerStatus("error");
      setSchedulerMessage(
        error instanceof Error
          ? error.message
          : "We could not save your inspection preference. Please call us directly.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        required
        autoComplete="name"
        placeholder="Your name"
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
      />

      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
        placeholder="(727) 555-1234"
      />

      <label htmlFor="serviceNeeded">Service Needed</label>
      <select
        id="serviceNeeded"
        name="serviceNeeded"
        required
        defaultValue=""
      >
        <option value="" disabled>
          Select a service
        </option>
        <option value="Boat Repair">Boat Repair</option>
        <option value="Boat Storage">Boat Storage</option>
        <option value="Marine Maintenance">Marine Maintenance</option>
        <option value="Painting and Refinishing">Painting &amp; Refinishing</option>
        <option value="Marina Services">Marina Services</option>
        <option value="Inspection / Estimate">Inspection / Estimate</option>
      </select>

      <label htmlFor="boatType">Boat Type</label>
      <input id="boatType" name="boatType" type="text" required placeholder="Example: 34' center console" />

      <p className="contact-form-note">
        Include boat length and requested timeline so we can respond with accurate availability.
      </p>

      <label htmlFor="message">Brief Description</label>
      <textarea id="message" name="message" rows={6} required placeholder="Describe the issue, timeline, and service goals." />

      <label htmlFor="photos">Boat Photos (Optional)</label>
      <input id="photos" name="photos" type="file" accept="image/*" multiple />
      <p className="contact-form-note">
        Upload up to 3 photos. We include these in your CRM lead payload to speed review.
      </p>

      <div className="consent-group" role="group" aria-labelledby="sms-consent-heading">
        <p id="sms-consent-heading" className="consent-heading">
          SMS Consent
        </p>

        <div className="consent-item">
          <input
            id="sms_consent_transactional"
            name="sms_consent_transactional"
            type="checkbox"
            required
            aria-describedby="sms-consent-transactional-text"
          />
          <label htmlFor="sms_consent_transactional" id="sms-consent-transactional-text">
            I agree to receive non-marketing text messages from MAR-MARINA related to my inquiry,
            service request, or appointment. Message frequency may vary. Message and data rates may
            apply. Text HELP for assistance. Reply STOP to opt out at any time.
          </label>
        </div>

        <div className="consent-item">
          <input
            id="sms_consent_marketing"
            name="sms_consent_marketing"
            type="checkbox"
            aria-describedby="sms-consent-marketing-text"
          />
          <label htmlFor="sms_consent_marketing" id="sms-consent-marketing-text">
            I agree to receive marketing and promotional text messages from MAR-MARINA at the number
            provided. Message frequency may vary. Message and data rates may apply. Text HELP for
            assistance. Reply STOP to opt out at any time.
          </label>
        </div>
      </div>

      {consentError ? (
        <p className="form-error consent-error" role="alert" aria-live="assertive">
          {consentError}
        </p>
      ) : null}

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hp-field"
        aria-hidden="true"
      />
      <input id="sourceField" type="hidden" name="source" defaultValue={attribution.source} />
      <input id="pageField" type="hidden" name="landingPage" defaultValue={attribution.landingPage} />

      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Request an Estimate"}
      </button>

      {message ? (
        <p
          className={status === "success" ? "form-success" : "form-error"}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}

      {status === "success" && lastLead ? (
        <div className="inspection-scheduler" aria-live="polite">
          <h3>Schedule Inspection Follow-Up</h3>
          <p>Choose your preferred date window and time range so our team can prioritize callback timing.</p>
          <div className="inspection-scheduler-form">
            <label htmlFor="inspectionDateRange">Preferred Date Window</label>
            <select
              id="inspectionDateRange"
              value={inspectionDateRange}
              onChange={(event) => setInspectionDateRange(event.target.value)}
            >
              <option>Within 24 hours</option>
              <option>Within 3 days</option>
              <option>Within 7 days</option>
              <option>Flexible this month</option>
            </select>

            <label htmlFor="inspectionWindow">Preferred Time Window</label>
            <select
              id="inspectionWindow"
              value={inspectionWindow}
              onChange={(event) => setInspectionWindow(event.target.value)}
            >
              <option>Morning (8am-12pm)</option>
              <option>Afternoon (12pm-4pm)</option>
              <option>Late day (4pm-6pm)</option>
              <option>No preference</option>
            </select>

            <button type="button" onClick={onScheduleSubmit} disabled={schedulerStatus === "saving"}>
              {schedulerStatus === "saving" ? "Saving..." : "Confirm Inspection Window"}
            </button>
          </div>
          {schedulerMessage ? (
            <p className={schedulerStatus === "saved" ? "form-success" : "form-error"}>{schedulerMessage}</p>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}
