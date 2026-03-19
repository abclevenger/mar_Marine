import type { Metadata } from "next";
import Link from "next/link";
import { BoatLaunchRequestForm } from "../components/BoatLaunchRequestForm";
import { PageShell } from "../siteContent";

export const metadata: Metadata = {
  title: "Boat Launch Request | Mar Marina Tarpon Springs",
  description:
    "Request a boat launch at Mar Marina in Tarpon Springs and choose add-on prep services like fuel, ice, safety checks, and dockside readiness.",
  alternates: { canonical: "/boat-launch-request" },
  openGraph: {
    title: "Boat Launch Request | Mar Marina Tarpon Springs",
    description:
      "Submit a launch request in advance and select prep services so your boat is ready when you arrive.",
    url: "/boat-launch-request",
    siteName: "Mar Marina",
    type: "website",
    images: [{ url: "/img/first.jpg", alt: "Boat launch services at Mar Marina Tarpon Springs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boat Launch Request | Mar Marina Tarpon Springs",
    description:
      "Submit a launch request in advance and select prep services so your boat is ready when you arrive.",
    images: ["/img/first.jpg"],
  },
};

export default function BoatLaunchRequestPage() {
  return (
    <PageShell currentPath="/boat-launch-request">
      <section className="home-section contact-page-hero">
        <div className="line">
          <div className="home-section-head">
            <p className="contact-page-eyebrow">Boat Launch Request</p>
            <h1 className="home-heading">Request your boat launch in advance</h1>
            <p className="home-subhead">
              Request your boat launch in advance and let us prep everything before you arrive.
            </p>
            <p className="home-subhead">
              Need storage or service first? Visit our{" "}
              <Link href="/drystorage.html">marina services page</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section contact-page-layout">
        <div className="line contact-page-grid">
          <aside className="contact-info-stack">
            <article className="contact-info-card">
              <h2>How this helps your launch day</h2>
              <ul>
                <li>Confirms preferred launch timing before arrival.</li>
                <li>Lets you select prep items like fuel, ice, and checks.</li>
                <li>Helps our team queue priority and same-day requests.</li>
              </ul>
            </article>
            <article className="contact-info-card">
              <h2>Need immediate help?</h2>
              <p>Call now if your launch is urgent or same-day.</p>
              <p className="quick-actions">
                <a className="quick-action" href="tel:+17279391589">
                  Call Now
                </a>
                <Link className="quick-action" href="/contact.html#quote">
                  Get a Quote
                </Link>
              </p>
            </article>
          </aside>
          <div className="contact-form-panel">
            <p className="contact-form-kicker">Launch Scheduling Form</p>
            <h2>Boat Launch Request</h2>
            <p className="contact-form-intro">
              Complete the form below so we can prepare your launch and add-on services before you
              arrive.
            </p>
            <BoatLaunchRequestForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
