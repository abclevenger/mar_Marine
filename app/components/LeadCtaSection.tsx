import Link from "next/link";
import { NAP } from "../lib/business";

type Props = {
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function LeadCtaSection({
  title,
  description,
  primaryLabel = "Get a Fast Quote",
  secondaryLabel = "Call Now",
}: Props) {
  return (
    <section className="home-cta-band" aria-label="Primary lead generation call-to-action">
      <div className="line home-cta-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="home-cta-band-actions">
          <Link href="/contact.html#quote" className="btn-hero btn-hero-primary">
            {primaryLabel}
          </Link>
          <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-outline btn-hero-outline--dark">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
