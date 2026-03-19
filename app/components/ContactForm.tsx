"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
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
      setMessage("Thank you. Your request has been sent.");
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
        autoComplete="tel"
        placeholder="(727) 555-1234"
      />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={6} required placeholder="How can we help?" />

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
