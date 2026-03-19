"use client";

import Link from "next/link";
import { HeroSlideshow } from "./HeroSlideshow";
import { NAP, TRUST_FACTS } from "../lib/business";

export function HomeHero() {
  return (
    <div className="home-hero">
      <HeroSlideshow suppressCaptions />
      <div className="home-hero-overlay" aria-hidden="false">
        <div className="line home-hero-inner">
          <div className="home-hero-copy">
            <p className="home-hero-eyebrow">Tarpon Springs, FL · Anclote River</p>
            <h1 className="home-hero-title">
              Wet slips, dry storage, and 35-ton haul-out—one full-service marina.
            </h1>
            <p className="home-hero-lead">
              Protected harbor at the end of the Anclote River. Storage, lift service, and boatyard work handled by our crew—not a call center.
            </p>
            <div className="home-hero-cta-row">
              <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-primary">
                Call {NAP.phone}
              </a>
              <Link href="/contact.html" className="btn-hero btn-hero-outline">
                Request a quote
              </Link>
            </div>
            <ul className="home-hero-trust" aria-label="Trust highlights">
              <li>
                <span className="home-hero-trust-value">{TRUST_FACTS.yearsExperience}</span>
                <span className="home-hero-trust-label">years here</span>
              </li>
              <li>
                <span className="home-hero-trust-value">2×{TRUST_FACTS.travelLiftCapacityTons}t</span>
                <span className="home-hero-trust-label">travel lifts</span>
              </li>
              <li>
                <span className="home-hero-trust-value">24/7</span>
                <span className="home-hero-trust-label">on-site security</span>
              </li>
              <li>
                <span className="home-hero-trust-value">Haul to</span>
                <span className="home-hero-trust-label">35 tons</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
