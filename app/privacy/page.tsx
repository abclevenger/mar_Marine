import type { Metadata } from "next";
import { PageShell } from "../siteContent";

export const metadata: Metadata = {
  title: "Privacy Policy | MAR-MARINA",
  description: "Privacy policy for MAR-MARINA. How we collect, use, and protect your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell currentPath="/privacy">
      <div className="line legal-block">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: 2026</p>
        <section>
          <h2>Information We Collect</h2>
          <p>
            MAR-MARINA may collect information you provide when you contact us, use our services, or visit our website. This may include name, email, phone number, and other details you choose to share.
          </p>
        </section>
        <section>
          <h2>How We Use Your Information</h2>
          <p>
            We use your information to respond to inquiries, provide marina services, improve our website and services, and comply with legal obligations.
          </p>
        </section>
        <section>
          <h2>Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. We may share information with service providers who assist our operations, or when required by law.
          </p>
        </section>
        <section>
          <h2>Security and Retention</h2>
          <p>
            We take reasonable steps to protect your information. We retain data only as long as needed for the purposes described in this policy or as required by law.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
            <a href="mailto:info@mar-marina.com">info@mar-marina.com</a> or{" "}
            <a href="tel:7279391589">(727) 939-1589</a>.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
