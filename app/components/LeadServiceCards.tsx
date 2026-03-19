import Link from "next/link";

type ServiceCard = {
  label: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    label: "Repair",
    title: "Boat Repair",
    description:
      "Troubleshoot and complete mechanical and systems work with one local marine team handling scheduling and follow-through.",
    href: "/services/boat-repair-tarpon-springs",
    ctaLabel: "Get a Quote",
  },
  {
    label: "Storage",
    title: "Boat Storage",
    description:
      "Wet slips, dry storage, and rack options in Tarpon Springs with practical access for seasonal and year-round owners.",
    href: "/services/boat-storage-tarpon-springs",
    ctaLabel: "Get Storage Options",
  },
  {
    label: "Maintenance",
    title: "Marine Maintenance",
    description:
      "Keep your vessel ready with coordinated service windows for routine upkeep, inspections, and preventative care.",
    href: "/services/marine-maintenance-tarpon-springs",
    ctaLabel: "Get a Quote",
  },
  {
    label: "Finish Work",
    title: "Painting & Refinishing",
    description:
      "On-site detailing, waxing, buffing, and gelcoat restoration to protect value and improve long-term appearance.",
    href: "/services/boat-painting-tarpon-springs",
    ctaLabel: "View Work Examples",
  },
  {
    label: "Marina",
    title: "Marina Services",
    description:
      "Lift, launch, dock access, and facility support in one secure location at the end of the Anclote River.",
    href: "/boatyardgallery.html",
    ctaLabel: "See Marina Capabilities",
  },
  {
    label: "Planning",
    title: "Inspections / Estimates",
    description:
      "Share your boat details and timeline to get clear next steps, fit confirmation, and a straightforward estimate path.",
    href: "/contact.html#quote",
    ctaLabel: "Get a Quote",
  },
];

export function LeadServiceCards() {
  return (
    <div className="service-cards lead-service-cards" role="list" aria-label="Core marine services">
      {SERVICE_CARDS.map((card) => (
        <article key={card.title} className="service-card" role="listitem">
          <span className="service-card-label">{card.label}</span>
          <h3 className="service-card-title">{card.title}</h3>
          <p className="service-card-copy">{card.description}</p>
          <Link href={card.href} className="quick-action lead-service-cta">
            {card.ctaLabel}
          </Link>
        </article>
      ))}
    </div>
  );
}
