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
            <h1 className="home-hero-title">
              Full-Service Boat Repair &amp; Storage in Tarpon Springs
            </h1>
            <p className="home-hero-lead">
              Local marine repair, maintenance, painting, and storage with clear scheduling and fast quote response.
            </p>
            <div className="home-hero-cta-row">
              <Link href="/contact.html#quote" className="btn-hero btn-hero-primary">
                Get a Quote
              </Link>
              <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-outline">
                Call Now
              </a>
            </div>
            <ul className="home-hero-trust" aria-label="Trust highlights">
              <li>
                <span className="home-hero-trust-value">{TRUST_FACTS.yearsExperience}</span>
                <span className="home-hero-trust-label">local experience</span>
              </li>
              <li>
                <span className="home-hero-trust-value">Repair + Storage</span>
                <span className="home-hero-trust-label">one team</span>
              </li>
              <li>
                <span className="home-hero-trust-value">{TRUST_FACTS.travelLifts} lifts</span>
                <span className="home-hero-trust-label">{TRUST_FACTS.travelLiftCapacityTons}-ton capability</span>
              </li>
              <li>
                <span className="home-hero-trust-value">Call {NAP.phone}</span>
                <span className="home-hero-trust-label">fast scheduling</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
