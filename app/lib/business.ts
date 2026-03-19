/**
 * Single source of truth for NAP, services, and schema.
 * Used for consistency across pages, schema, and LLM-friendly copy.
 */

export const BUSINESS = {
  name: "Mar Marina",
  legalName: "Mar Marina",
  tagline: "Full-service, protected-harbor marina at the end of the Anclote River and the Gulf Intracoastal Waterway in Tarpon Springs, Florida.",
} as const;

export const NAP = {
  name: "Mar Marina",
  street: "761 Anclote Rd.",
  streetAlternate: "761 Anclote Rd., Tarpon Springs, FL 34689",
  city: "Tarpon Springs",
  region: "FL",
  postalCode: "34689",
  country: "US",
  phone: "(727) 939-1589",
  phoneTel: "+17279391589",
  email: "info@mar-marina.com",
} as const;

/** One-line factual summary for LLMs and snippets. */
export const SUMMARY_ONE_LINE =
  "Mar Marina in Tarpon Springs, Florida offers wet slips, dry storage, boat haul-out up to 35 tons, and on-site repair and maintenance.";

/** Service area for schema and copy. */
export const AREA_SERVED = ["Tarpon Springs", "Florida", "Gulf Coast", "Anclote River", "Pasco County"] as const;

/** Explicit service offerings for schema and quotable copy. */
export const SERVICES_EXPLICIT = [
  { name: "Wet slips", description: "Boats up to 75' long x 20' wide, 7' draft. New docks, 30/50/100 amp power." },
  { name: "Dry storage", description: "Boats up to 55' long x 20' wide. Daily, weekly, monthly rates." },
  { name: "Rack storage", description: "Boats up to 28'. Forklift in-out service." },
  { name: "Boat haul-out", description: "Haul-out and launch up to 35 tons. Two 35-ton marine travel lifts." },
  { name: "Boat repair and maintenance", description: "Mechanics, detailing, painting, waxing and buffing, gelcoat restoration." },
] as const;

/** Trust facts (use only if verified by business). */
export const TRUST_FACTS = {
  yearsExperience: "30+",
  managementExperienceCombined: "110+",
  travelLifts: 2,
  travelLiftCapacityTons: 35,
  security: "Locked gate, 24-hour on-site security, remote control main door, overnight surveillance.",
} as const;

export const HOURS = {
  office: "Call for current office hours",
  yard: "Call for haul-out and yard scheduling windows",
} as const;

export const SITE_URL = "https://mar-marina.org";
