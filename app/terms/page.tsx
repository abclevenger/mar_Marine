import type { Metadata } from "next";
import { PageShell } from "../siteContent";

export const metadata: Metadata = {
  title: "Terms and Conditions | Mar Marina Tarpon Springs FL",
  description:
    "Review Mar Marina terms and conditions for marina services, storage, and website use in Tarpon Springs, Florida.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell currentPath="/terms">
      <div className="line legal-block">
        <h1>Terms and Conditions</h1>
        <p className="legal-updated">Last updated: 2026</p>
        <section>
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using the Mar Marina website and services, you agree to these Terms and Conditions. If you do not agree, please do not use our site or services.
          </p>
        </section>
        <section>
          <h2>Use of Website and Services</h2>
          <p>
            You may use our website for lawful purposes only. You may not use our site to transmit harmful, offensive, or illegal content, or to interfere with our systems or other users.
          </p>
        </section>
        <section>
          <h2>Marina Services and Agreements</h2>
          <p>
            Slip rentals, dry storage, and other marina services are subject to separate agreements and applicable fees. Contact us for current rates and availability.
          </p>
        </section>
        <section>
          <h2>Intellectual Property</h2>
          <p>
            Content on this website, including text, images, and logos, is owned by Mar Marina or its licensors and may not be copied or used without permission.
          </p>
        </section>
        <section>
          <h2>Limitation of Liability</h2>
          <p>
            Mar Marina is not liable for indirect, incidental, or consequential damages arising from your use of this website or our services, to the extent permitted by law.
          </p>
        </section>
        <section>
          <h2>Changes and Contact</h2>
          <p>
            We may update these terms from time to time. Continued use of the site constitutes acceptance of changes. Questions:{" "}
            <a href="mailto:info@mar-marina.com">info@mar-marina.com</a> or{" "}
            <a href="tel:7279391589">(727) 939-1589</a>.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
