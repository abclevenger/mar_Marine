import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../siteContent";
import { NAP, SUMMARY_ONE_LINE } from "../../lib/business";

export const metadata: Metadata = {
  title: "Tarpon Springs Marina Guide | Mar Marina",
  description:
    "A guide to boating and marina options in Tarpon Springs, Florida: docking, storage, haul-out, and why boat owners choose the Anclote River and Gulf coast.",
  alternates: { canonical: "/guides/tarpon-springs-marina" },
};

export default function TarponSpringsMarinaGuidePage() {
  return (
    <PageShell currentPath="/guides/tarpon-springs-marina">
      <article className="line legal-block guide-page">
        <h1>Tarpon Springs Marina Guide</h1>
        <p className="lead">
          Tarpon Springs sits where the Anclote River meets the Gulf of Mexico and the intracoastal waterway. For boat owners, that means protected water access with a short run to open Gulf—and marinas that offer both wet slips and dry storage.
        </p>

        <section>
          <h2>Boating around Tarpon Springs</h2>
          <p>
            The area is known for calm, navigable waters near shore and direct access to the Gulf. Many boaters use Tarpon Springs marinas as a home base for fishing, cruising, or seasonal storage. Docking and storage options include wet slips (in-water), dry storage (rack or yard), and full-service boatyards that can haul, block, and repair.
          </p>
        </section>

        <section>
          <h2>Docking and storage considerations</h2>
          <p>
            When choosing a marina in Tarpon Springs, consider: slip or storage size (length, beam, draft), power (30, 50, or 100 amp), security (gates, cameras, on-site staff), and whether you need haul-out or repair on site. Protected locations reduce storm exposure; dry storage adds another layer of protection when boats are out of the water.
          </p>
        </section>

        <section>
          <h2>Local boating conditions</h2>
          <p>
            The Anclote River and nearby waters are generally protected, making them suitable for year-round use. Weather and tides still matter for safe navigation. During hurricane season, many owners move boats to dry storage or secure them in slips with proper lines and preparation.
          </p>
        </section>

        <section>
          <h2>Why boat owners choose storage vs slips</h2>
          <p>
            Wet slips suit boaters who use the boat often and want to step on and go. Dry storage suits those who use the boat less frequently, want less exposure to weather and fouling, or prefer not to maintain a slip. Some marinas, including {NAP.name}, offer both so you can match the option to how you use your boat.
          </p>
        </section>

        <section>
          <h2>Marina services in Tarpon Springs</h2>
          <p>
            {SUMMARY_ONE_LINE} We are at the end of the Anclote River with two 35-ton travel lifts, secure dry and wet storage, and on-site repair and maintenance. If you are looking for a <Link href="/drystorage.html">dry storage</Link>, <Link href="/drystorage.html">wet slip</Link>, <Link href="/boatyardgallery.html">haul-out</Link>, or <Link href="/contact.html">quote</Link>, contact us at <a href={`tel:${NAP.phoneTel}`}>{NAP.phone}</a> or <a href={`mailto:${NAP.email}`}>{NAP.email}</a>.
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
