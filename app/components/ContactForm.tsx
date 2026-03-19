"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [consentError, setConsentError] = useState("");

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

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      serviceNeeded: String(formData.get("serviceNeeded") || ""),
      message: String(formData.get("message") || ""),
      sms_consent_transactional: smsConsentTransactional,
      sms_consent_marketing: smsConsentMarketing,
      company: String(formData.get("company") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit request");
      }

      setStatus("success");
      setMessage("Thank you. Your request has been sent. We will follow up during business hours.");
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
        placeholder="(727) 555-1234"
      />

      <label htmlFor="serviceNeeded">Vessel / Service Needed</label>
      <input
        id="serviceNeeded"
        name="serviceNeeded"
        type="text"
        required
        placeholder="Example: 34' sailboat, dry storage + haul-out"
      />

      <p className="contact-form-note">
        Include boat length and requested timeline so we can respond with accurate availability.
      </p>

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={6} required placeholder="How can we help?" />

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
            I agree to receive non-marketing text messages from Mar Marina related to my inquiry,
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
            I agree to receive marketing and promotional text messages from Mar Marina at the number
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

      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Request"}
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
    </form>
  );
}
