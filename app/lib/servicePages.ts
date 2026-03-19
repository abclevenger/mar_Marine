export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  hero: string;
  intro: string;
  bullets: string[];
  primaryKeyword: string;
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "boat-repair-tarpon-springs",
    title: "Boat Repair in Tarpon Springs",
    shortTitle: "Boat Repair",
    description:
      "Boat repair in Tarpon Springs with practical diagnostics, coordinated yard support, and clear next steps from a local marine team.",
    hero: "Boat Repair in Tarpon Springs with one coordinated local team",
    intro:
      "We help owners move from issue discovery to reliable repair execution without vendor confusion. Share your vessel details and current problem and we will confirm fit and schedule windows.",
    bullets: [
      "Troubleshooting and repair planning based on boat type and current symptoms",
      "On-site coordination with haul-out, yard handling, and follow-up support",
      "Clear communication on scope, timing, and next steps",
    ],
    primaryKeyword: "boat repair Tarpon Springs",
  },
  {
    slug: "boat-storage-tarpon-springs",
    title: "Boat Storage in Tarpon Springs",
    shortTitle: "Boat Storage",
    description:
      "Boat storage in Tarpon Springs including wet slips, dry storage, and rack options with secure access and practical scheduling support.",
    hero: "Boat Storage in Tarpon Springs for seasonal and year-round owners",
    intro:
      "From wet slips to dry and rack options, we help match storage setup to vessel size, access needs, and service plans so your boat stays ready.",
    bullets: [
      "Wet slips, dry storage, and rack handling options",
      "Secure marina location with controlled access and oversight",
      "Storage aligned with maintenance and service timelines",
    ],
    primaryKeyword: "boat storage Tarpon Springs",
  },
  {
    slug: "marine-maintenance-tarpon-springs",
    title: "Marine Maintenance in Tarpon Springs",
    shortTitle: "Marine Maintenance",
    description:
      "Marine maintenance in Tarpon Springs for preventative service, recurring care plans, and practical scheduling for local and seasonal boat owners.",
    hero: "Marine Maintenance in Tarpon Springs that keeps boats available",
    intro:
      "Consistent maintenance helps avoid expensive downtime. We support recurring service planning with clear communication and practical execution windows.",
    bullets: [
      "Routine upkeep and preventative care planning",
      "Scheduling support around usage windows and trip plans",
      "Integrated maintenance with storage and yard access",
    ],
    primaryKeyword: "marine service Tarpon Springs",
  },
  {
    slug: "boat-painting-tarpon-springs",
    title: "Boat Painting & Refinishing in Tarpon Springs",
    shortTitle: "Painting & Refinishing",
    description:
      "Boat painting and refinishing in Tarpon Springs including detailing, waxing, buffing, and gelcoat restoration for long-term vessel value.",
    hero: "Boat Painting and Refinishing in Tarpon Springs",
    intro:
      "Protect vessel value and appearance with practical refinishing and detailing support. We coordinate scheduling and provide clear scope for finish work.",
    bullets: [
      "Detailing, waxing, buffing, and gelcoat restoration options",
      "Scheduling coordinated with haul-out and yard handling",
      "Work planning focused on durability and appearance outcomes",
    ],
    primaryKeyword: "boat painting Tarpon Springs",
  },
];

export function getServicePageBySlug(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}
