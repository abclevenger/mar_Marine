import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Script from "next/script";
import { ContactForm } from "./components/ContactForm";
import { ConversionCTA } from "./components/ConversionCTA";
import { HomeHero } from "./components/HomeHero";
import { SiteHeaderNav } from "./components/SiteHeaderNav";
import { VimeoClickToPlay } from "./components/VimeoClickToPlay";
import { HOURS, NAP, SUMMARY_ONE_LINE, TRUST_FACTS } from "./lib/business";

const BASE_DESCRIPTION =
  "MAR-MARINA is a full-service, protected-harbor marina located at the end of the Anclote River and the Gulf Intracoastal Waterway in Tarpon Springs, Florida.";

const BASE_KEYWORDS =
  "Tarpon Springs, Florida, marina, full service, intracoastal waterway, protected harbor, Gulf, Anclote River, dry dock, wet slips, boat yard";
const SITE_NAME = "MAR-MARINA";
const OG_IMAGE = "/img/first.jpg";

export function PageShell({
  children,
  currentPath,
}: {
  children: ReactNode;
  currentPath: string;
}) {
  return (
    <div className="page-wrap">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeaderNav currentPath={currentPath} />
      <main id="main-content">{children}</main>
    </div>
  );
}

export const homeMetadata: Metadata = {
  title: "MAR-MARINA in Tarpon Springs, Florida",
  description: BASE_DESCRIPTION,
  keywords: BASE_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MAR-MARINA in Tarpon Springs, Florida",
    description: BASE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, alt: "MAR-MARINA wet slips and dry storage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAR-MARINA in Tarpon Springs, Florida",
    description: BASE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const reviewsMetadata: Metadata = {
  title: "MAR-MARINA Reviews",
  description:
    "MAR-MARINA is a full-service, protected-harbor marina in Tarpon Springs, Florida, located at the end of the Anclote River and the Gulf Intracoastal Waterway.",
  keywords: BASE_KEYWORDS,
  alternates: {
    canonical: "/wetslips.html",
  },
  openGraph: {
    title: "MAR-MARINA Reviews",
    description:
      "MAR-MARINA is a full-service, protected-harbor marina in Tarpon Springs, Florida, located at the end of the Anclote River and the Gulf Intracoastal Waterway.",
    url: "/wetslips.html",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, alt: "MAR-MARINA wet slips and dry storage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAR-MARINA Reviews",
    description:
      "MAR-MARINA is a full-service, protected-harbor marina in Tarpon Springs, Florida, located at the end of the Anclote River and the Gulf Intracoastal Waterway.",
    images: [OG_IMAGE],
  },
};

export const servicesMetadata: Metadata = {
  title: "MAR-MARINA Services",
  description: BASE_DESCRIPTION,
  keywords: BASE_KEYWORDS,
  alternates: {
    canonical: "/drystorage.html",
  },
  openGraph: {
    title: "MAR-MARINA Services",
    description: BASE_DESCRIPTION,
    url: "/drystorage.html",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, alt: "MAR-MARINA wet slips and dry storage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAR-MARINA Services",
    description: BASE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const galleryMetadata: Metadata = {
  title: "MAR-MARINA Boatyard & Gallery",
  description: BASE_DESCRIPTION,
  keywords: BASE_KEYWORDS,
  alternates: {
    canonical: "/boatyardgallery.html",
  },
  openGraph: {
    title: "MAR-MARINA Boatyard & Gallery",
    description: BASE_DESCRIPTION,
    url: "/boatyardgallery.html",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, alt: "MAR-MARINA wet slips and dry storage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAR-MARINA Boatyard & Gallery",
    description: BASE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const contactMetadata: Metadata = {
  title: "MAR-MARINA Contact & Location",
  description: BASE_DESCRIPTION,
  keywords: BASE_KEYWORDS,
  alternates: {
    canonical: "/contact.html",
  },
  openGraph: {
    title: "MAR-MARINA Contact & Location",
    description: BASE_DESCRIPTION,
    url: "/contact.html",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, alt: "MAR-MARINA wet slips and dry storage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAR-MARINA Contact & Location",
    description: BASE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export function HomeContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of storage does MAR-MARINA offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MAR-MARINA offers wet slips and dry storage in Tarpon Springs, Florida. Dry storage for boats up to 55' x 20'; rack storage for boats up to 28' with forklift in-out. Wet slips for boats up to 75' x 20' with 7' draft.",
        },
      },
      {
        "@type": "Question",
        name: "How large of a boat can you haul?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MAR-MARINA can haul boats up to 35 tons. We have two 35-ton marine travel lifts at our Tarpon Springs location at the end of the Anclote River.",
        },
      },
      {
        "@type": "Question",
        name: "Is the marina secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MAR-MARINA has a locked gate, 24-hour on-site security, remote control main door, and overnight surveillance. The marina is in a protected location at the end of the Anclote River in Tarpon Springs, Florida.",
        },
      },
      {
        "@type": "Question",
        name: "Where is MAR-MARINA located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MAR-MARINA is located at 761 Anclote Rd., Tarpon Springs, FL 34689, at the end of the Anclote River and the Gulf Intracoastal Waterway.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get an estimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call (727) 939-1589 or email info@mar-marina.com for pricing and availability. We offer daily, weekly, and monthly rates for dry storage and wet slips.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="faq-schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HomeHero />

      <section className="home-trust-strip" aria-label="Trust and credibility">
        <div className="line home-trust-strip-inner">
          <p>
            <strong>Serving Tarpon Springs boat owners for over {TRUST_FACTS.yearsExperience} years</strong>
          </p>
          <p>Two 35-ton travel lifts</p>
          <p>24-hour on-site security</p>
          <p>
            Call <a href={`tel:${NAP.phoneTel}`}>{NAP.phone}</a> for availability
          </p>
        </div>
      </section>

      <section className="home-section home-services" aria-labelledby="home-services-heading">
        <div className="line">
          <div className="home-section-head">
            <h2 id="home-services-heading" className="home-heading">
              What we do
            </h2>
            <p className="home-subhead">
              Storage, lift, and boatyard work in one place. Pick what you need—we&apos;ll tell you if we can take the boat and when.
            </p>
          </div>
          <div className="service-cards">
            <Link href="/drystorage.html" className="service-card">
              <span className="service-card-label">Storage</span>
              <h3 className="service-card-title">Wet slips</h3>
              <p className="service-card-copy">
                In-water slips up to 75&apos; × 20&apos;, 7&apos; draft. New docks, 30/50/100 amp power. For owners who want to step on and go.
              </p>
              <span className="service-card-link">View slip details →</span>
            </Link>
            <Link href="/drystorage.html" className="service-card">
              <span className="service-card-label">Storage</span>
              <h3 className="service-card-title">Dry &amp; rack storage</h3>
              <p className="service-card-copy">
                Dry storage to 55&apos; × 20&apos;. Rack storage to 28&apos; with forklift in-out. Daily, weekly, or monthly terms.
              </p>
              <span className="service-card-link">Rates &amp; sizes →</span>
            </Link>
            <Link href="/boatyardgallery.html" className="service-card">
              <span className="service-card-label">Boatyard</span>
              <h3 className="service-card-title">Haul-out &amp; lift</h3>
              <p className="service-card-copy">
                Two 35-ton travel lifts. Haul, block, bottom work, and launch coordinated with our crew on site.
              </p>
              <span className="service-card-link">See the yard →</span>
            </Link>
            <Link href="/drystorage.html" className="service-card">
              <span className="service-card-label">Service</span>
              <h3 className="service-card-title">Repair &amp; maintenance</h3>
              <p className="service-card-copy">
                Mechanics, detailing, painting, waxing, gelcoat. Work is done by our people or vendors we trust—not random subcontractors.
              </p>
              <span className="service-card-link">Service list →</span>
            </Link>
            <Link href="/guides/hurricane-storm-boat-protection" className="service-card service-card--accent">
              <span className="service-card-label">Location</span>
              <h3 className="service-card-title">Protected harbor</h3>
              <p className="service-card-copy">
                End of the Anclote River, away from open Gulf exposure. Many owners choose us for storm season and year-round peace of mind.
              </p>
              <span className="service-card-link">Storm prep guide →</span>
            </Link>
          </div>
          <div className="home-inline-cta">
            <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-primary">
              Call Now
            </a>
            <Link href="/contact.html" className="btn-hero btn-hero-outline btn-hero-outline--dark">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section home-media">
        <div className="line home-media-grid">
          <div className="home-media-copy">
            <h2 className="home-heading">See the marina</h2>
            <p>
              Short walkthrough of our facility. Prefer to talk? Call and we&apos;ll answer questions about your boat size and timeline.
            </p>
            <ConversionCTA variant="quote" className="home-media-cta" />
          </div>
          <div className="home-media-video">
            <VimeoClickToPlay />
          </div>
        </div>
      </section>

      <section className="home-section home-why" id="why-choose-us">
        <div className="line">
          <div className="home-section-head">
            <h2 className="home-heading">Why owners stay with us</h2>
            <p className="home-subhead">{SUMMARY_ONE_LINE}</p>
          </div>
          <div className="why-grid">
            <article className="why-card">
              <h3>Security you can verify</h3>
              <p>
                Locked gate, remote-controlled main door, overnight surveillance, and 24-hour on-site security. Your boat isn&apos;t parked on an open lot.
              </p>
            </article>
            <article className="why-card">
              <h3>Lift capacity that matches real boats</h3>
              <p>
                Two 35-ton marine travel lifts. Haul-out and yard work stay under one roof so you&apos;re not chasing multiple vendors.
              </p>
            </article>
            <article className="why-card">
              <h3>Experience on the water</h3>
              <p>
                {TRUST_FACTS.yearsExperience} years in Tarpon Springs. Management crew with {TRUST_FACTS.managementExperienceCombined} years combined in boatyard operations.
              </p>
            </article>
          </div>
          <p className="authority-links home-why-links">
            <Link href="/guides/tarpon-springs-marina">Marina guide</Link>
            {" · "}
            <Link href="/guides/choosing-a-marina-tarpon-springs">Choosing a marina</Link>
            {" · "}
            <Link href="/wetslips.html">Customer reviews</Link>
          </p>
        </div>
      </section>

      <section className="home-section home-work-gallery" id="projects" aria-labelledby="home-work-heading">
        <div className="line">
          <div className="home-section-head">
            <h2 id="home-work-heading" className="home-heading">Recent work &amp; facility</h2>
            <p className="home-subhead">
              Haul-outs, storage, and yard projects. Full photo set on the boatyard page.
            </p>
          </div>
          <div className="home-work-grid">
            <figure className="home-work-item">
              <img src="/img/first-small.jpg" alt="" />
              <figcaption>Wet slips &amp; docks</figcaption>
            </figure>
            <figure className="home-work-item">
              <img src="/img/second-small.jpg" alt="" />
              <figcaption>Protected basin</figcaption>
            </figure>
            <figure className="home-work-item">
              <img src="/img/third-small.jpg" alt="" />
              <figcaption>Anclote River access</figcaption>
            </figure>
            <figure className="home-work-item">
              <img src="/img/fourth-small.jpg" alt="" />
              <figcaption>Travel lift</figcaption>
            </figure>
            <figure className="home-work-item">
              <img src="/img/6.jpg" alt="" />
              <figcaption>Boatyard</figcaption>
            </figure>
            <figure className="home-work-item">
              <img src="/img/10.jpg" alt="" />
              <figcaption>On-site service</figcaption>
            </figure>
          </div>
          <p className="home-gallery-more">
            <Link href="/boatyardgallery.html" className="btn-hero btn-hero-outline btn-hero-outline--dark">
              View Full Gallery
            </Link>
          </p>
        </div>
      </section>

      <section className="home-testimonials" id="testimonials" aria-labelledby="home-testimonials-heading">
        <div className="line">
          <h2 id="home-testimonials-heading" className="home-testimonials-title">
            What boat owners say
          </h2>
          <p className="home-testimonials-intro">Real feedback from our reviews page—edited for length, not tone.</p>
          <div className="home-quote-grid">
            <blockquote className="home-quote-card">
              <p>
                &ldquo;They pulled my crab boat out… done in one day. Their experience and connections for parts on large boats is incredible.&rdquo;
              </p>
              <footer>— Kevin F.</footer>
            </blockquote>
            <blockquote className="home-quote-card">
              <p>
                &ldquo;Capt Jean, Shane, and the crew did an amazing job… workmanship is second to none and the price point was more than reasonable.&rdquo;
              </p>
              <footer>— Mike T.</footer>
            </blockquote>
            <blockquote className="home-quote-card">
              <p>
                &ldquo;Private and secure. Best place for long term slip, storage, or out of water repairs.&rdquo;
              </p>
              <footer>— Rudy P.</footer>
            </blockquote>
          </div>
          <p className="home-testimonials-more">
            <Link href="/wetslips.html">Read More Reviews</Link>
          </p>
        </div>
      </section>

      <section className="home-cta-band" aria-label="Ready to get started">
        <div className="line home-cta-band-inner">
          <div>
            <h2>Need storage, haul-out, or repair support?</h2>
            <p>
              Tell us your boat length and service need. We will confirm fit, timing, and next steps.
            </p>
          </div>
          <div className="home-cta-band-actions">
            <Link href="/contact.html#quote" className="btn-hero btn-hero-primary">
              Request a Quote
            </Link>
            <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-outline btn-hero-outline--dark">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="faq-block home-faq">
        <div className="line">
          <div className="home-section-head">
            <h2 className="home-heading">Frequently asked questions</h2>
            <p className="home-subhead">Storage sizes, haul limits, security, and how to get pricing.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>What types of storage does MAR-MARINA offer?</summary>
              <p>
                Wet slips and dry storage in Tarpon Springs. Dry to 55&apos; × 20&apos;; rack to 28&apos; with forklift in-out; wet slips to 75&apos; × 20&apos; with 7&apos; draft.
              </p>
            </details>
            <details>
              <summary>How large of a boat can you haul?</summary>
              <p>
                Up to 35 tons, using two 35-ton marine travel lifts at our marina on the Anclote River.
              </p>
            </details>
            <details>
              <summary>Is the marina secure?</summary>
              <p>
                Yes—locked gate, 24-hour on-site security, remote main door, and overnight surveillance.
              </p>
            </details>
            <details>
              <summary>Where is MAR-MARINA located?</summary>
              <p>761 Anclote Rd., Tarpon Springs, FL 34689, at the end of the Anclote River.</p>
            </details>
            <details>
              <summary>How can I get an estimate?</summary>
              <p>
                Call <a href={`tel:${NAP.phoneTel}`}>{NAP.phone}</a> or email{" "}
                <a href={`mailto:${NAP.email}`}>{NAP.email}</a>. Use the form below for a written request.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="home-quote-section" id="quote">
        <div className="line home-quote-grid-layout">
          <div className="home-quote-copy">
            <h2 className="home-heading">Request a Quote or Callback</h2>
            <p className="home-quote-lead">
              Tell us your boat length, what you need (slip, dry storage, haul-out, or repair), and when you want to start. We respond during business hours.
            </p>
            <address className="home-quote-nap">
              <strong>MAR-MARINA</strong>
              <br />
              {NAP.street}
              <br />
              {NAP.city}, {NAP.region} {NAP.postalCode}
              <br />
              <a href={`tel:${NAP.phoneTel}`}>{NAP.phone}</a>
              <br />
              <a href={`mailto:${NAP.email}`}>{NAP.email}</a>
            </address>
            <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-primary home-quote-call">
              Call Now
            </a>
          </div>
          <div className="home-quote-form-wrap">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export function ReviewsContent() {
  return (
    <>
      <section className="home-section reviews-page-hero">
        <div className="line">
          <div className="home-section-head">
            <h1 className="home-heading">Reviews</h1>
            <p className="home-subhead">
              Real customer feedback and reputation widget results from boat owners who have used
              our storage, haul-out, and yard services.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section reviews-page-content">
        <div className="line">
          <div className="home-section-head">
            <h2 className="home-heading">What they say about us</h2>
            <p className="home-subhead">
              Selected quotes are lightly edited for readability while preserving each reviewer&apos;s
              intent.
            </p>
          </div>
          <div className="home-quote-grid">
            <blockquote className="home-quote-card home-quote-card--light">
              <p>
                &ldquo;They pulled my crab boat out so I could do the cutlass bearing. It was done in
                one day and saved me time and money. Their large-boat experience and parts support
                were incredible.&rdquo;
              </p>
              <footer>— Kevin F.</footer>
            </blockquote>
            <blockquote className="home-quote-card home-quote-card--light">
              <p>
                &ldquo;Private and secure. Best place for long-term slip, storage, or out-of-water
                repairs.&rdquo;
              </p>
              <footer>— Rudy P.</footer>
            </blockquote>
            <blockquote className="home-quote-card home-quote-card--light">
              <p>
                &ldquo;Capt. Jean, Shane, and crew did an amazing job. Workmanship was excellent and
                pricing was more than reasonable. MAR-MARINA is now my go-to boatyard.&rdquo;
              </p>
              <footer>— Mike T.</footer>
            </blockquote>
          </div>

          <div className="reviews-widget-wrap">
            <Script
              src="https://reputationhub.site/reputation/assets/review-widget.js"
              strategy="afterInteractive"
            />
            <iframe
              className="lc_reviews_widget"
              src="https://reputationhub.site/reputation/widgets/review_widget/ANccYHXfzBhIwRKtX0b4"
              frameBorder="0"
              scrolling="no"
              loading="lazy"
              style={{ minWidth: "100%", width: "100%" }}
              title="Customer reviews widget"
            />
          </div>
        </div>
      </section>

      <section className="home-section gallery">
        <div className="line">
          <div className="home-section-head">
            <h2 className="home-heading">MAR-MARINA gallery</h2>
            <p className="home-subhead">A quick look at our docks, basin, and facility operations.</p>
          </div>
          <div className="gallery-grid">
            <img src="/img/first-small.jpg" alt="" />
            <img src="/img/second-small.jpg" alt="" />
            <img src="/img/third-small.jpg" alt="" />
            <img src="/img/fourth-small.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="home-cta-band" aria-label="Reviews page CTA">
        <div className="line home-cta-band-inner">
          <div>
            <h2>Need a quote for your boat?</h2>
            <p>Tell us your boat size and service timeline. We will confirm fit and availability.</p>
          </div>
          <div className="home-cta-band-actions">
            <Link href="/contact.html#quote" className="btn-hero btn-hero-primary">
              Request a Quote
            </Link>
            <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-outline btn-hero-outline--dark">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you offer dry storage in Tarpon Springs?", acceptedAnswer: { "@type": "Answer", text: "Yes. MAR-MARINA offers dry storage in Tarpon Springs for boats up to 55' long x 20' wide, with daily, weekly, and monthly rates. We also offer rack storage for boats up to 28' with forklift in-out." } },
    { "@type": "Question", name: "Do you provide wet slips?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our wet slips accommodate boats up to 75' long x 20' wide with a 7' draft. We have new docks, new plumbing, and 30, 50, and 100 amp power." } },
    { "@type": "Question", name: "What size boats can you haul out?", acceptedAnswer: { "@type": "Answer", text: "We can haul boats up to 35 tons. We have two 35-ton marine travel lifts at our Tarpon Springs location." } },
    { "@type": "Question", name: "Do you offer boat repair or maintenance support?", acceptedAnswer: { "@type": "Answer", text: "Yes. We have mechanics, detailing, and painting professionals on site. We offer repairs, waxing and buffing, and gelcoat restoration. All boatyard work is done by our crew or trusted vendors." } },
    { "@type": "Question", name: "How do I request pricing?", acceptedAnswer: { "@type": "Answer", text: "Call (727) 939-1589 or email info@mar-marina.com for current pricing and availability. You can also send a message via our contact page." } },
  ],
};

export function ServicesContent() {
  return (
    <>
      <Script id="faq-schema-services" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }} />
      <section className="home-section services-page-hero">
        <div className="line">
          <div className="home-section-head">
            <p className="services-page-eyebrow">Tarpon Springs Marina Services</p>
            <h1 className="home-heading">Storage, haul-out, and boatyard support in one place</h1>
            <p className="home-subhead">
              Tell us your boat length, beam, and service timeline. We will confirm fit, schedule windows,
              and next steps without guesswork.
            </p>
            <div className="home-inline-cta">
              <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-primary">
                Call Now
              </a>
              <Link href="/contact.html#quote" className="btn-hero btn-hero-outline btn-hero-outline--dark">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section services-page-grid" aria-labelledby="services-grid-heading">
        <div className="line">
          <div className="home-section-head">
            <h2 id="services-grid-heading" className="home-heading">Service options</h2>
            <p className="home-subhead">
              Choose the service set that matches how you use your boat. If you are not sure, call and
              we can guide you.
            </p>
          </div>
          <div className="service-cards">
            <article className="service-card">
              <span className="service-card-label">Storage</span>
              <h3 className="service-card-title">Dry Storage</h3>
              <p className="service-card-copy">
                Up to 55&apos; long x 20&apos; wide with daily, weekly, and monthly terms. Practical for
                owners who want weather protection and fewer in-water maintenance demands.
              </p>
            </article>
            <article className="service-card">
              <span className="service-card-label">Storage</span>
              <h3 className="service-card-title">Wet Slips</h3>
              <p className="service-card-copy">
                Up to 75&apos; long x 20&apos; wide, 7&apos; draft, with new docks/plumbing and 30/50/100 amp
                power for owners who want dock-and-go access.
              </p>
            </article>
            <article className="service-card">
              <span className="service-card-label">Haul-Out</span>
              <h3 className="service-card-title">Travel Lift Service</h3>
              <p className="service-card-copy">
                Two 35-ton marine travel lifts for haul, block, yard work, and launch. Keep scheduling
                and execution with one coordinated marina team.
              </p>
            </article>
            <article className="service-card">
              <span className="service-card-label">Amenities</span>
              <h3 className="service-card-title">On-site Amenities</h3>
              <p className="service-card-copy">
                Picnic and BBQ area, dog walk, clean restrooms/showers, fish cleaning station, and
                pumpout support for day-to-day marina convenience.
              </p>
            </article>
            <article className="service-card">
              <span className="service-card-label">Boatyard</span>
              <h3 className="service-card-title">Repairs, Waxing &amp; Buffing</h3>
              <p className="service-card-copy">
                On-site mechanics, detailing, painting, and gelcoat restoration. Work is handled by our
                crew or trusted vendors for accountable delivery.
              </p>
            </article>
            <article className="service-card service-card--accent">
              <span className="service-card-label">Rack Storage</span>
              <h3 className="service-card-title">Boats up to 28&apos;</h3>
              <p className="service-card-copy">
                Forklift in-out rack storage for boats up to 28&apos;; ideal for owners who want faster
                dry storage handling and controlled access.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section services-why" aria-labelledby="services-why-heading">
        <div className="line">
          <div className="home-section-head">
            <h2 id="services-why-heading" className="home-heading">Why choose MAR-MARINA</h2>
            <p className="home-subhead">
              We are built for owners who want dependable yard execution, secure storage, and straight answers.
            </p>
          </div>
          <div className="why-grid">
            <article className="why-card">
              <h3>Protected location</h3>
              <p>End-of-river setting in Tarpon Springs for reduced open-water exposure during typical conditions.</p>
            </article>
            <article className="why-card">
              <h3>Lift capacity and crew</h3>
              <p>Two 35-ton travel lifts and experienced on-site teams keep projects coordinated and moving.</p>
            </article>
            <article className="why-card">
              <h3>Security and oversight</h3>
              <p>Locked access, overnight surveillance, and 24-hour on-site security support for peace of mind.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section services-process" aria-labelledby="services-process-heading">
        <div className="line">
          <div className="home-section-head">
            <h2 id="services-process-heading" className="home-heading">How service planning works</h2>
            <p className="home-subhead">Simple process to confirm fit and schedule without back-and-forth confusion.</p>
          </div>
          <div className="services-process-grid">
            <article className="services-step-card">
              <span className="services-step-num">01</span>
              <h3>Share boat details</h3>
              <p>Send length, beam, service need, and target dates by phone or form.</p>
            </article>
            <article className="services-step-card">
              <span className="services-step-num">02</span>
              <h3>Confirm fit and timing</h3>
              <p>We verify capacity and current scheduling windows for your request.</p>
            </article>
            <article className="services-step-card">
              <span className="services-step-num">03</span>
              <h3>Book with clear next steps</h3>
              <p>You get a straightforward plan for arrival, handling, and execution.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="gallery home-section services-proof" aria-labelledby="services-proof-heading">
        <div className="line">
          <div className="home-section-head">
            <h2 id="services-proof-heading" className="home-heading">Facility proof and capability</h2>
            <p className="home-subhead">Snapshots of active storage and boatyard operations at MAR-MARINA.</p>
          </div>
          <div className="services-proof-strip" aria-label="Key service proof points">
            <p><strong>{TRUST_FACTS.yearsExperience}</strong> years local service</p>
            <p><strong>{TRUST_FACTS.travelLifts}</strong> travel lifts</p>
            <p><strong>{TRUST_FACTS.travelLiftCapacityTons} tons</strong> max haul capacity</p>
          </div>
          <div className="gallery-grid">
            <img src="/img/first-small.jpg" alt="" />
            <img src="/img/second-small.jpg" alt="" />
            <img src="/img/third-small.jpg" alt="" />
            <img src="/img/fourth-small.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="faq-block home-section">
        <div className="line">
          <div className="home-section-head">
            <h2 className="home-heading">Frequently asked questions about our services</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Do you offer dry storage in Tarpon Springs?</summary>
              <p>Yes. MAR-MARINA offers dry storage in Tarpon Springs for boats up to 55&apos; long x 20&apos; wide, with daily, weekly, and monthly rates. We also offer rack storage for boats up to 28&apos; with forklift in-out.</p>
            </details>
            <details>
              <summary>Do you provide wet slips?</summary>
              <p>Yes. Our wet slips accommodate boats up to 75&apos; long x 20&apos; wide with a 7&apos; draft. We have new docks, new plumbing, and 30, 50, and 100 amp power.</p>
            </details>
            <details>
              <summary>What size boats can you haul out?</summary>
              <p>We can haul boats up to 35 tons. We have two 35-ton marine travel lifts at our Tarpon Springs location.</p>
            </details>
            <details>
              <summary>Do you offer boat repair or maintenance support?</summary>
              <p>Yes. We have mechanics, detailing, and painting professionals on site. We offer repairs, waxing and buffing, and gelcoat restoration. All boatyard work is done by our crew or trusted vendors.</p>
            </details>
            <details>
              <summary>How do I request pricing?</summary>
              <p>Call us at <a href={`tel:${NAP.phoneTel}`}>{NAP.phone}</a> or <a href="mailto:info@mar-marina.com">email us</a> for current pricing and availability. You can also <Link href="/contact.html">send a message</Link> or read our <Link href="/guides/boat-storage-pricing-tarpon-springs">boat storage pricing guide</Link> for what affects cost.</p>
            </details>
          </div>
          <p className="authority-links" style={{ marginTop: "16px" }}>
            <Link href="/guides/dry-storage-vs-wet-slips">Dry storage vs wet slips</Link>
            {" · "}
            <Link href="/guides/boat-storage-pricing-tarpon-springs">Pricing guide</Link>
            {" · "}
            <Link href="/contact.html">Request a Quote</Link>
          </p>
        </div>
      </section>

      <section className="home-cta-band" aria-label="Service quote call-to-action">
        <div className="line home-cta-band-inner">
          <div>
            <h2>Need storage, haul-out, or service this week?</h2>
            <p>
              Call us with your boat length and service request. We will confirm capacity and timing.
            </p>
          </div>
          <div className="home-cta-band-actions">
            <Link href="/contact.html#quote" className="btn-hero btn-hero-primary">
              Request a Quote
            </Link>
            <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-outline btn-hero-outline--dark">
              Call Now
            </a>
          </div>
        </div>
      </section>

    </>
  );
}

export function GalleryContent() {
  return (
    <>
      <section className="home-section gallery-page-hero">
        <div className="line">
          <div className="home-section-head">
            <h1 className="home-heading">Boatyard &amp; Photo Gallery</h1>
            <p className="home-subhead">
              Protected location in Tarpon Springs with two 35-ton marine travel lifts and on-site
              crew support for haul-out and service work.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section gallery-page-grid">
        <div className="line gallery-grid">
          <img src="/img/11.jpg" alt="" />
          <img src="/img/6.jpg" alt="" />
          <img src="/img/third-small.jpg" alt="" />
          <img src="/img/14.jpg" alt="" />
          <img src="/img/10.jpg" alt="" />
          <img src="/img/12.jpg" alt="" />
          <img src="/img/7.jpg" alt="" />
          <img src="/img/9.jpg" alt="" />
          <img src="/img/8.jpg" alt="" />
          <img src="/img/second-small.jpg" alt="" />
          <img src="/img/third-small.jpg" alt="" />
          <img src="/img/fourth-small.jpg" alt="" />
        </div>
      </section>

      <section className="home-cta-band" aria-label="Gallery page CTA">
        <div className="line home-cta-band-inner">
          <div>
            <h2>Planning yard work or haul-out?</h2>
            <p>Call with your boat specs and target dates. We can confirm schedule options.</p>
          </div>
          <div className="home-cta-band-actions">
            <Link href="/contact.html#quote" className="btn-hero btn-hero-primary">
              Request a Quote
            </Link>
            <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-outline btn-hero-outline--dark">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export function ContactContent() {
  return (
    <>
      <section className="home-section contact-page-hero">
        <div className="line">
          <div className="home-section-head">
            <p className="contact-page-eyebrow">Tarpon Springs Marina Contact</p>
            <h1 className="home-heading">Get storage, haul-out, or service help for your boat</h1>
            <p className="home-subhead">
              Speak directly with our team about wet slips, dry storage, haul-out, and repairs.
              We will confirm fit, schedule options, and clear next steps.
            </p>
            <div className="home-inline-cta">
              <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-primary">
                Call Now
              </a>
              <Link href="/contact.html#quote" className="btn-hero btn-hero-outline btn-hero-outline--dark">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section contact-options-section" aria-labelledby="contact-options-heading">
        <div className="line">
          <div className="home-section-head">
            <h2 id="contact-options-heading" className="home-heading">Choose how you want to contact us</h2>
            <p className="home-subhead">
              Fastest path is to call with your boat size and service need. Email and map directions are below.
            </p>
          </div>
          <div className="contact-options-grid">
            <article className="contact-option-card">
              <h3>Call</h3>
              <p>Talk directly with the marina team for availability and scheduling.</p>
              <a className="quick-action" href={`tel:${NAP.phoneTel}`}>Call Now</a>
            </article>
            <article className="contact-option-card">
              <h3>Email</h3>
              <p>Send your vessel details and requested services for a written follow-up.</p>
              <a className="quick-action" href={`mailto:${NAP.email}`}>{NAP.email}</a>
            </article>
            <article className="contact-option-card">
              <h3>Visit</h3>
              <p>
                {NAP.street}
                <br />
                {NAP.city}, {NAP.region} {NAP.postalCode}
              </p>
              <a
                className="quick-action"
                href="https://www.google.com/maps/search/?api=1&query=761+Anclote+Rd+Tarpon+Springs+FL+34689"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section contact-page-layout">
        <div className="line contact-page-grid">
          <aside className="contact-info-stack">
            <article className="contact-info-card">
              <h2>MAR-MARINA</h2>
              <address>
                {NAP.street} (Google Maps may show 761 Flaherty Road)
                <br />
                {NAP.city}, {NAP.region} {NAP.postalCode}
              </address>
              <p className="contact-hours-block">
                <strong>Hours</strong>
                <br />
                {HOURS.office}
                <br />
                {HOURS.yard}
              </p>
              <p className="contact-service-area">
                <strong>Service Area</strong>
                <br />
                Tarpon Springs and surrounding Gulf Coast boating communities.
              </p>
              <p className="quick-actions">
                <a className="quick-action" href={`tel:${NAP.phoneTel}`}>
                  Call Now
                </a>
                <a className="quick-action" href={`mailto:${NAP.email}`}>
                  Email Us
                </a>
              </p>
            </article>

            <article className="contact-info-card contact-support-card">
              <h2>What happens next</h2>
              <ul>
                <li>We review vessel length, beam, and requested service.</li>
                <li>We confirm fit and current schedule windows.</li>
                <li>We provide clear next steps and booking guidance.</li>
              </ul>
              <p className="contact-social-link">
                Follow updates on{" "}
                <a
                  href="https://www.facebook.com/MarMarina1234/?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                .
              </p>
            </article>
          </aside>

          <div id="quote" className="contact-form-panel">
            <p className="contact-form-kicker">Request Form</p>
            <h2>Request a Quote or Callback</h2>
            <p className="contact-form-intro">
              Include boat length, service needed, and target dates. We respond during business hours
              with availability and next steps.
            </p>
            <ul className="contact-form-checklist" aria-label="Helpful details to include">
              <li>Boat length and type</li>
              <li>Storage, haul-out, or repair request</li>
              <li>Preferred start window</li>
            </ul>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="home-cta-band" aria-label="Contact call-to-action">
        <div className="line home-cta-band-inner">
          <div>
            <h2>Need immediate scheduling help?</h2>
            <p>Call now for availability on storage, haul-out, and repair services.</p>
          </div>
          <div className="home-cta-band-actions">
            <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-primary">
              Call Now
            </a>
            <a href="mailto:info@mar-marina.com" className="btn-hero btn-hero-outline btn-hero-outline--dark">
              Email Us
            </a>
          </div>
        </div>
      </section>

      <section className="home-section contact-location-section" aria-labelledby="contact-location-heading">
        <div className="line">
          <div className="home-section-head">
            <h2 id="contact-location-heading" className="home-heading">Location and access</h2>
            <p className="home-subhead">
              Located at the end of the Anclote River in Tarpon Springs, with access to intracoastal
              and Gulf routes.
            </p>
          </div>
          <div className="map-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.4175021949045!2d-82.77631108440873!3d28.164215682604798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28dac4a982a73%3A0x7f336f0742a01e7f!2s761+Flaherty+Rd%2C+Tarpon+Springs%2C+FL+34689!5e0!3m2!1sen!2sus!4v1461526898761"
              width="100%"
              height="450"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="MAR-MARINA map"
            />
          </div>
        </div>
      </section>

      <section className="home-section contact-support-messaging" aria-labelledby="contact-support-heading">
        <div className="line">
          <div className="home-section-head">
            <h2 id="contact-support-heading" className="home-heading">Support you can count on</h2>
            <p className="home-subhead">{SUMMARY_ONE_LINE}</p>
          </div>
          <div className="why-grid">
            <article className="why-card">
              <h3>Clear communication</h3>
              <p>No call-center handoff. You speak with the marina team that handles scheduling.</p>
            </article>
            <article className="why-card">
              <h3>Practical guidance</h3>
              <p>We help you choose the right path based on your vessel, timeline, and service needs.</p>
            </article>
            <article className="why-card">
              <h3>Local experience</h3>
              <p>Serving Tarpon Springs boat owners for over {TRUST_FACTS.yearsExperience} years.</p>
            </article>
          </div>
        </div>
      </section>

    </>
  );
}
