"use client";

import Link from "next/link";
import { NAP } from "../lib/business";

export function StickyMobileCta() {
  return (
    <div className="sticky-mobile-cta" role="region" aria-label="Quick contact actions">
      <a href={`tel:${NAP.phoneTel}`} className="sticky-mobile-cta-call">
        Call Now
      </a>
      <Link href="/contact.html#quote" className="sticky-mobile-cta-quote">
        Request a Quote
      </Link>
    </div>
  );
}

