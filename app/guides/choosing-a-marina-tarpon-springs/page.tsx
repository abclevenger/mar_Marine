import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../siteContent";
import { NAP, SUMMARY_ONE_LINE } from "../../lib/business";

export const metadata: Metadata = {
  title: "Choosing a Marina in Tarpon Springs | MAR-MARINA",
  description:
    "What to compare when choosing a marina: storage type, security, haul-out capability, location, and reputation. A practical framework for Tarpon Springs boat owners.",
  alternates: { canonical: "/guides/choosing-a-marina-tarpon-springs" },
};

export default function ChoosingAMarinaTarponSpringsPage() {
  return (
    <PageShell currentPath="/guides/choosing-a-marina-tarpon-springs">
      <article className="line legal-block guide-page">
        <h1>Choosing a Marina in Tarpon Springs</h1>
        <p className="lead">
          When you are comparing marinas, it helps to look at the same factors everywhere: storage options, security, service and haul-out capability, location, and what other boat owners say. Here is a simple framework.
        </p>

        <section>
          <h2>What to compare</h2>
          <ul>
            <li><strong>Storage type:</strong> Do you need a wet slip, dry storage, or both? What size boats do they accommodate (length, beam, draft)?</li>
            <li><strong>Security:</strong> Locked gates, cameras, on-site staff, and overnight surveillance all matter for peace of mind.</li>
            <li><strong>Service and haul-out:</strong> Can they haul your boat? What is the lift capacity? Do they offer repair, bottom work, or detailing on site?</li>
            <li><strong>Location:</strong> Is the marina protected from open water? How far to the Gulf or your usual cruising area? Access and convenience matter.</li>
            <li><strong>Reputation:</strong> Reviews and word of mouth from other boat owners are useful. Look for mentions of reliability, communication, and fairness on pricing and service.</li>
          </ul>
        </section>

        <section>
          <h2>MAR-MARINA in Tarpon Springs</h2>
          <p>
            {SUMMARY_ONE_LINE} We are at the end of the Anclote River with two 35-ton travel lifts, secure dry and wet storage (including rack storage for boats up to 28&apos;), 24-hour on-site security, and on-site repair and maintenance. We have been serving boat owners for over 30 years. If you are comparing marinas in the area, we invite you to <Link href="/contact.html">contact us</Link> for a quote or to <Link href="/wetslips.html">read what our customers say</Link>.
          </p>
        </section>

        <p className="guide-cta">
          <Link href="/contact.html" className="quick-action">
            Request a Quote
          </Link>
        </p>
      </article>
    </PageShell>
  );
}
