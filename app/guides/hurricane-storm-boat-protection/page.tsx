import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../siteContent";
import { NAP } from "../../lib/business";

export const metadata: Metadata = {
  title: "Hurricane & Storm Boat Protection Guide | MAR-MARINA Florida",
  description:
    "How marina storage can reduce storm risk, what to do before a storm, and how to prepare your boat. MAR-MARINA Tarpon Springs offers protected storage and haul-out.",
  alternates: { canonical: "/guides/hurricane-storm-boat-protection" },
};

export default function HurricaneStormBoatProtectionPage() {
  return (
    <PageShell currentPath="/guides/hurricane-storm-boat-protection">
      <article className="line legal-block guide-page">
        <h1>Hurricane & Storm Boat Protection Guide</h1>
        <p className="lead">
          In Florida, storm season is a reality for boat owners. Storing your boat at a marina that offers dry storage or a secure haul-out option can reduce risk. This guide covers how storage helps and what you can do to prepare.
        </p>

        <section>
          <h2>How marina storage can reduce risk</h2>
          <p>
            Boats in the water can be exposed to surge, waves, and wind. Dry storage—whether rack or yard—keeps the hull out of the water, which can reduce damage from storm surge and floating debris. Marinas in protected locations (for example at the end of a river or in a basin) may see less wave action than open waterfront. Having access to haul-out before a storm gives you the option to block the boat on land if that fits your situation.
          </p>
        </section>

        <section>
          <h2>Storm preparation checklist</h2>
          <ul>
            <li>Know your marina’s storm plan and who to contact.</li>
            <li>Double and triple lines if leaving the boat in a slip; use chafe protection.</li>
            <li>Remove canvas, electronics, and loose gear; secure hatches and ports.</li>
            <li>If you have a haul-out option, schedule it early; demand spikes before storms.</li>
            <li>Keep insurance and registration current and accessible.</li>
          </ul>
          <p>
            <em>This is general guidance only. Always follow official weather and emergency instructions and your marina’s policies.</em>
          </p>
        </section>

        <section>
          <h2>What owners should do before a storm</h2>
          <p>
            Contact your marina as soon as a threat appears. Ask about haul-out availability, dry storage space, and any deadlines. If you leave the boat in a slip, ensure lines and fenders are in good shape and that someone can check the boat if you cannot. Document the boat’s condition with photos for insurance.
          </p>
        </section>

        <section>
          <h2>MAR-MARINA and storm readiness</h2>
          <p>
            We are in Tarpon Springs at the end of the Anclote River, in a location that many clients choose for its protected setting. We offer <Link href="/drystorage.html">dry storage</Link> and <Link href="/boatyardgallery.html">haul-out</Link> with two 35-ton travel lifts. If you are considering moving your boat to dry storage or scheduling a haul-out before storm season, contact us early: <a href={`tel:${NAP.phoneTel}`}>{NAP.phone}</a> or <a href={`mailto:${NAP.email}`}>{NAP.email}</a>. We can discuss availability and next steps.
          </p>
        </section>

        <p className="guide-cta">
          <Link href="/contact.html" className="quick-action">
            Contact us about storage or haul-out
          </Link>
        </p>
      </article>
    </PageShell>
  );
}
