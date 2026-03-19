"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function ConversionTracking() {
  useEffect(() => {
    function trackCallClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a[href^='tel:']") as HTMLAnchorElement | null;
      if (!link) return;

      const payload = {
        event: "call_now_click",
        phone: link.getAttribute("href") || "",
        page_path: window.location.pathname,
      };

      window.dataLayer?.push(payload);
      window.gtag?.("event", "call_now_click", payload);
      window.fbq?.("trackCustom", "CallNowClick", payload);
    }

    function trackLeadSubmitted(event: Event) {
      const custom = event as CustomEvent<Record<string, unknown>>;
      const payload = {
        event: "lead_form_submitted",
        page_path: window.location.pathname,
        ...(custom.detail || {}),
      };

      window.dataLayer?.push(payload);
      window.gtag?.("event", "lead_form_submitted", payload);
      window.fbq?.("track", "Lead", payload);
    }

    function trackScheduleConfirmed(event: Event) {
      const custom = event as CustomEvent<Record<string, unknown>>;
      const payload = {
        event: "inspection_schedule_confirmed",
        page_path: window.location.pathname,
        ...(custom.detail || {}),
      };

      window.dataLayer?.push(payload);
      window.gtag?.("event", "inspection_schedule_confirmed", payload);
      window.fbq?.("trackCustom", "InspectionScheduleConfirmed", payload);
    }

    document.addEventListener("click", trackCallClick);
    window.addEventListener("lead:submitted", trackLeadSubmitted as EventListener);
    window.addEventListener("lead:schedule_confirmed", trackScheduleConfirmed as EventListener);

    return () => {
      document.removeEventListener("click", trackCallClick);
      window.removeEventListener("lead:submitted", trackLeadSubmitted as EventListener);
      window.removeEventListener("lead:schedule_confirmed", trackScheduleConfirmed as EventListener);
    };
  }, []);

  return null;
}
