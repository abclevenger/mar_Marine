import type { Metadata } from "next";
import { PageShell } from "../siteContent";

export const metadata: Metadata = {
  title: "Accessibility | MAR-MARINA",
  description: "MAR-MARINA commitment to digital accessibility and how we support all users.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <PageShell currentPath="/accessibility">
      <div className="line legal-block">
        <h1>Accessibility</h1>
        <p className="legal-updated">Last updated: 2026</p>
        <section>
          <h2>Our Commitment</h2>
          <p>
            MAR-MARINA is committed to ensuring our website and services are accessible to people with disabilities. We aim to conform to applicable accessibility standards and to improve the experience for everyone.
          </p>
        </section>
        <section>
          <h2>Standards and Practices</h2>
          <p>
            We strive to meet the Web Content Accessibility Guidelines (WCAG) at a level that is practicable for our site. This includes readable contrast, keyboard navigation, clear headings and labels, and alternatives for non-text content where appropriate.
          </p>
        </section>
        <section>
          <h2>Feedback and Assistance</h2>
          <p>
            If you encounter an accessibility barrier or have a suggestion, we want to hear from you. Contact us at{" "}
            <a href="mailto:info@mar-marina.com">info@mar-marina.com</a> or{" "}
            <a href="tel:7279391589">(727) 939-1589</a>. We will work with you to provide the information or service you need.
          </p>
        </section>
        <section>
          <h2>Physical Accessibility</h2>
          <p>
            For questions about physical access to our marina, dock, or office, please call or email so we can assist you with your visit.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
