import type { Metadata } from "next";
import { PageShell } from "../siteContent";

export const metadata: Metadata = {
  title: "A2P Messaging | Mar Marina",
  description: "Mar Marina A2P (Application-to-Person) messaging terms and compliance information.",
  alternates: { canonical: "/a2p" },
};

export default function A2PPage() {
  return (
    <PageShell currentPath="/a2p">
      <div className="line legal-block">
        <h1>A2P Messaging</h1>
        <p className="legal-updated">Last updated: 2026</p>
        <section>
          <h2>About A2P</h2>
          <p>
            Application-to-Person (A2P) messaging refers to automated text (SMS) or other messages sent from a business to consumers. Mar Marina may use A2P messaging for appointment reminders, service updates, or other communications you have agreed to receive.
          </p>
        </section>
        <section>
          <h2>Your Consent</h2>
          <p>
            We will only send you A2P messages if you have provided your phone number and consented to receive them. You may opt out at any time by replying STOP to a message or contacting us directly.
          </p>
        </section>
        <section>
          <h2>Message Frequency and Costs</h2>
          <p>
            Message frequency depends on your relationship with us (e.g., slip or storage agreements, inquiries). Standard message and data rates may apply according to your wireless carrier.
          </p>
        </section>
        <section>
          <h2>Carrier Compliance</h2>
          <p>
            Our A2P messaging practices are designed to comply with applicable carrier and industry requirements, including those related to consent, opt-out, and content.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            For questions about our messaging practices:{" "}
            <a href="mailto:info@mar-marina.com">info@mar-marina.com</a> or{" "}
            <a href="tel:7279391589">(727) 939-1589</a>.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
