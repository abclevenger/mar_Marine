import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../siteContent";
import { NAP } from "../../lib/business";

export const metadata: Metadata = {
  title: "Boat Storage Pricing Tarpon Springs Guide | Mar Marina",
  description:
    "Understand Tarpon Springs boat storage pricing by slip type, vessel size, season, and service level to plan costs with confidence.",
  alternates: { canonical: "/guides/boat-storage-pricing-tarpon-springs" },
};

export default function BoatStoragePricingGuidePage() {
  return (
    <PageShell currentPath="/guides/boat-storage-pricing-tarpon-springs">
      <article className="line legal-block guide-page">
        <h1>Boat Storage Pricing Guide – Tarpon Springs</h1>
        <p className="lead">
          Storage costs depend on the type (wet slip vs dry), boat size, how long you store, and what services you need. Here is what typically drives pricing so you can plan and compare.
        </p>

        <section>
          <h2>Wet slip vs dry storage: how it affects cost</h2>
          <p>
            Wet slips usually have a monthly rate based on length (and sometimes beam). Dry storage may be priced by the day, week, or month, and often by length or a size tier. Rack storage (forklift in-out) can be priced differently from yard storage. At Mar Marina we offer daily, weekly, and monthly rates for dry storage; call for current availability and pricing.
          </p>
        </section>

        <section>
          <h2>What affects boat storage cost</h2>
          <ul>
            <li><strong>Size:</strong> Longer and wider boats need more space; rates reflect that.</li>
            <li><strong>Season:</strong> Demand can be higher in peak season; some marinas have seasonal rates.</li>
            <li><strong>Access:</strong> 24/7 access or valet-style service can influence price.</li>
            <li><strong>Service level:</strong> Power, water, pumpout, and covered storage add value and cost.</li>
            <li><strong>Protection:</strong> Dry storage and covered options typically cost more than open wet slips but can reduce exposure to weather and storm risk.</li>
          </ul>
        </section>

        <section>
          <h2>Get a Quote</h2>
          <p>
            We do not publish exact prices online because they depend on your boat size, storage type, and term. For current <strong>wet slip</strong> and <strong>dry storage</strong> pricing and availability in Tarpon Springs, call <a href={`tel:${NAP.phoneTel}`}>{NAP.phone}</a> or <a href={`mailto:${NAP.email}`}>email us</a>. We can give you a clear quote for your situation.
          </p>
        </section>

        <p className="guide-cta">
          <Link href="/contact.html" className="quick-action">
            Get a Quote
          </Link>
        </p>
      </article>
    </PageShell>
  );
}
