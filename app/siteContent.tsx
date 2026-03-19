import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Script from "next/script";
import { ContactForm } from "./components/ContactForm";
import { ConversionCTA } from "./components/ConversionCTA";
import { HomeHero } from "./components/HomeHero";
import { SiteHeaderNav } from "./components/SiteHeaderNav";
import { VimeoClickToPlay } from "./components/VimeoClickToPlay";
import { NAP, SUMMARY_ONE_LINE, TRUST_FACTS } from "./lib/business";

const BASE_DESCRIPTION =
  "Mar-Marina is a full service protected harbor marina located at the end of Anclote River and intracoastal waterway of the Gulf in Tarpon Springs Florida.";

const BASE_KEYWORDS =
  "Tarpon Springs, Florida, marina, full service, intracoastal waterway, protected harbor, Gulf, anclote river, dry dock, wet slips, boat yard";
const SITE_NAME = "MAR-MARINA";
const OG_IMAGE = "/img/first.jpg";

const sharedTestimonials = (
  <div className="testimonial-block">
    <div className="line testimonial-items">
      <div>
        <h2>For your peace of mind</h2>
        <p>
          Boat security is very important to all boat owners who trust their
          property to a marina either on a slip or dry-storage. At MAR-MARINA
          we take pride in our 24/7 security systems with our remote control
          main door system and man-surveillance overnight services.
        </p>
      </div>
      <div>
        <h2>Trust MAR-MARINA for your boating needs</h2>
        <p>
          MAR-Marina takes great pride in providing exceptional facilities and
          service. These core values are readily apparent in our full-service
          boatyard. ALL boatyard operations are performed only by our
          experienced personnel or trusted venders. We have the ability to haul
          boats up to 35 tons making our marina a one-stop shop for any boater
          needing world-class support and customer service.
        </p>
      </div>
      <div>
        <h2>At a very reasonable-competitive price</h2>
        <p>With location and services we consider outstanding our prices are more than reasonable.</p>
      </div>
    </div>
  </div>
);

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
  title: "Mar-Marina in Tarpon Springs Florida",
  description: BASE_DESCRIPTION,
  keywords: BASE_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mar-Marina in Tarpon Springs Florida",
    description: BASE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, alt: "MAR-MARINA wet slips and dry storage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mar-Marina in Tarpon Springs Florida",
    description: BASE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const reviewsMetadata: Metadata = {
  title: "MAR-MARINA Reviews",
  description:
    "MAR-MARINA is a full service protected harbor marina located in Tarpon Springs Florida on the end of anclote river and the intracoastal waterway in western Florida.",
  keywords: BASE_KEYWORDS,
  alternates: {
    canonical: "/wetslips.html",
  },
  openGraph: {
    title: "MAR-MARINA Reviews",
    description:
      "MAR-MARINA is a full service protected harbor marina located in Tarpon Springs Florida on the end of anclote river and the intracoastal waterway in western Florida.",
    url: "/wetslips.html",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, alt: "MAR-MARINA wet slips and dry storage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAR-MARINA Reviews",
    description:
      "MAR-MARINA is a full service protected harbor marina located in Tarpon Springs Florida on the end of anclote river and the intracoastal waterway in western Florida.",
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
  title: "Boatyard-Gallery",
  description: BASE_DESCRIPTION,
  keywords: BASE_KEYWORDS,
  alternates: {
    canonical: "/boatyardgallery.html",
  },
  openGraph: {
    title: "Boatyard-Gallery",
    description: BASE_DESCRIPTION,
    url: "/boatyardgallery.html",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, alt: "MAR-MARINA wet slips and dry storage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boatyard-Gallery",
    description: BASE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const contactMetadata: Metadata = {
  title: "MAR-MARINA Location - Contact",
  description: BASE_DESCRIPTION,
  keywords: BASE_KEYWORDS,
  alternates: {
    canonical: "/contact.html",
  },
  openGraph: {
    title: "MAR-MARINA Location - Contact",
    description: BASE_DESCRIPTION,
    url: "/contact.html",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, alt: "MAR-MARINA wet slips and dry storage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAR-MARINA Location - Contact",
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
          text: "MAR-MARINA is located at 761 Anclote Rd., Tarpon Springs, FL 34689, at the end of the Anclote River and intracoastal waterway of the Gulf.",
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
              Call {NAP.phone}
            </a>
            <Link href="/contact.html" className="btn-hero btn-hero-outline btn-hero-outline--dark">
              Get a quote
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

      <section className="safe-block home-safe">
        <article className="line">
          <h2 className="home-safe-title">Safe and close</h2>
          <p>
            Protected location at the end of the Anclote River—well shielded from open-water conditions. Few marinas here run two 35-ton travel lifts; we use ours daily for haul-out and service.
          </p>
        </article>
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
              View full gallery
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
            <Link href="/wetslips.html">Read more reviews</Link>
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
              Get a Quote
            </Link>
            <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-outline btn-hero-outline--dark">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="faq-block home-faq">
        <div className="line">
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="subtitile">Storage sizes, haul limits, security, and how to get pricing.</p>
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
            <h2 className="home-heading">Request a quote or callback</h2>
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
              Call now
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
      <section className="content-page-head">
        <div className="line">
          <h1>REVIEWS</h1>
        </div>
      </section>

      <section className="content-page-main">
        <div className="line">
          <h2>What they say about us</h2>
          <p>
            <em>
              They pulled my crab boat out so &quot;I&quot; could do the cutlass
              bearing, I allowed myself 3 days to do the job as everyone told me
              it would take a few days, I ended up helping a little while they
              did the bearing, they even used their own tool and it was done in
              one day - they saved me a ton of time and money, and their
              experience, knowledge, and connections for parts in large boats is
              incredible, it would have taken me a day or more just to find the
              bearing, but as soon as it was out, the part was ready for pickup
              within ten minutes. Thanks for the help!
            </em>
            <br />
            KevinFernandez
            <br />
            <br />
            Private and Secure. Best place for long term slip, storage, or out
            of water repairs
            <br />
            Rudy Philippus
            <br />
            <br />
            Capt Jean, Shane, and staff at Mar Marina Rock! I set up a
            spreadsheet guesstimating what it would cost to have my boat
            hauled/blocked and doing the work myself i.e. extensive sanding of
            bottom, sanding of waterline stripe, changing from Sea Hawk
            anti-fouling to Pettit Trinidad anti-fouling and re-painting the
            waterline stripe. I met with Capt Jean and walked through my
            spreadsheet and he indicated he could do all of the work and beat
            the price I had come up with to do the work myself.....He was
            right....Not only did he beat the price I had come up with to do
            the work I listed above but, he re-faired my hull to keel joint,
            and replaced the cutlass bearing (still under the price I had come
            up with). Capt Jean, Shane and the crew did an amazing job prepping
            the bottom (extensive sanding of the Sea Hawk anti-fouling) and
            re-fairing the hull to keel joint (looks like it came out of the
            factory). The crew at Mar Marina then painted 2 coats of Trinidad
            (3 at the waterline) and the bottom was extremely smooth (honestly
            felt like it had been sprayed but wasn&apos;t). I would highly recommend
            Mar Marina for your boat yard needs. The workmanship is second to
            none and the price point was more than reasonable. Mar Marina is now
            my go-to boat yard. Thank you again to Mar Marina for the
            outstanding workmanship, fair pricing, and professional advise.
            <br />
            Mike T
            <br />
            <br />
            One of the best Marinia&apos;s I ever had pleasure dealing with. Super
            nice, helpful staff. I had my sailboat there for a week while I put
            a fresh coat of bottom paint on her. Couldn&apos;t have asked for a
            better group of guys to help me when I had questions about my boat.
            I will use them again and highly recommend them for services.
            <br />
            Neo Geo
          </p>

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

      <section className="gallery">
        <div className="line">
          <h2 className="section-title">MAR-MARINA gallery</h2>
          <p className="subtitile">&nbsp;</p>
          <div className="gallery-grid">
            <img src="/img/first-small.jpg" alt="" />
            <img src="/img/second-small.jpg" alt="" />
            <img src="/img/third-small.jpg" alt="" />
            <img src="/img/fourth-small.jpg" alt="" />
          </div>
        </div>
      </section>

      {sharedTestimonials}

      <div className="line">
        <ConversionCTA variant="quote" />
      </div>
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
            <h1 className="home-heading">Services</h1>
            <p className="home-subhead">
              Storage, haul-out, and marine service support in Tarpon Springs.
              Tell us your boat size and timeline and we&apos;ll confirm fit and availability.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section services-page-grid">
        <div className="line">
          <div className="service-cards">
            <article className="service-card">
              <span className="service-card-label">Storage</span>
              <h2 className="service-card-title">Dry Storage</h2>
              <p className="service-card-copy">
                We have dry storage capabilities for boats as large as 55&apos; long x 20&apos; wide.
                Daily, weekly, and monthly rates available. Call for pricing and availability.
              </p>
            </article>
            <article className="service-card">
              <span className="service-card-label">Storage</span>
              <h2 className="service-card-title">Wet Slips</h2>
              <p className="service-card-copy">
                Our wet slips can accommodate boats up to 75&apos; long x 20&apos; wide with a 7&apos; draft.
                Featuring new docks, new plumbing, and new power: 30, 50, and 100 amp.
              </p>
            </article>
            <article className="service-card">
              <span className="service-card-label">Security</span>
              <h2 className="service-card-title">Secure Marina Access</h2>
              <p className="service-card-copy">
                This is a secure marina with a locked gate and 24 hour on-site security.
                We also use remote control main-door access and overnight surveillance.
              </p>
            </article>
            <article className="service-card">
              <span className="service-card-label">Amenities</span>
              <h2 className="service-card-title">On-site Amenities</h2>
              <p className="service-card-copy">
                Picnic area / BBQ, dog walk, clean restrooms / showers,
                fish cleaning station, and pumpout portable station.
              </p>
            </article>
            <article className="service-card">
              <span className="service-card-label">Boatyard</span>
              <h2 className="service-card-title">Repairs, Waxing &amp; Buffing</h2>
              <p className="service-card-copy">
                With an extensive crew of mechanics, detailing, and painting professionals,
                we can handle jobs large or small in a timely fashion. We also restore faded gelcoat.
              </p>
            </article>
            <article className="service-card service-card--accent">
              <span className="service-card-label">Rack Storage</span>
              <h2 className="service-card-title">Boats up to 28&apos;</h2>
              <p className="service-card-copy">
                We offer rack storage for boats up to 28&apos; with forklift in-out service.
                A practical option for owners who want secure, dry storage access.
              </p>
            </article>
          </div>
          <div className="home-inline-cta">
            <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-primary">
              Call {NAP.phone}
            </a>
            <Link href="/contact.html#quote" className="btn-hero btn-hero-outline btn-hero-outline--dark">
              Get a quote
            </Link>
          </div>
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
              Get a Quote
            </Link>
            <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-outline btn-hero-outline--dark">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="gallery home-section">
        <div className="line">
          <h2 className="section-title">STORAGE - REPAIR FACILITY</h2>
          <p className="subtitile">&nbsp;</p>
          <div className="gallery-grid">
            <img src="/img/first-small.jpg" alt="" />
            <img src="/img/second-small.jpg" alt="" />
            <img src="/img/third-small.jpg" alt="" />
            <img src="/img/fourth-small.jpg" alt="" />
          </div>
        </div>
      </section>

      {sharedTestimonials}

      <section className="faq-block home-section">
        <div className="line">
          <h2 className="section-title">Frequently asked questions about our services</h2>
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
              <p>Call us at <a href={`tel:${NAP.phoneTel}`}>{NAP.phone}</a> or <a href="mailto:info@mar-marina.com">email</a> for current pricing and availability. You can also <Link href="/contact.html">send a message</Link> or read our <Link href="/guides/boat-storage-pricing-tarpon-springs">boat storage pricing guide</Link> for what affects cost.</p>
            </details>
          </div>
          <p className="authority-links" style={{ marginTop: "16px" }}>
            <Link href="/guides/dry-storage-vs-wet-slips">Dry storage vs wet slips</Link>
            {" · "}
            <Link href="/guides/boat-storage-pricing-tarpon-springs">Pricing guide</Link>
            {" · "}
            <Link href="/contact.html">Request a quote</Link>
          </p>
        </div>
      </section>

      <div className="line">
        <ConversionCTA variant="quote" />
      </div>
    </>
  );
}

export function GalleryContent() {
  return (
    <>
      <section className="content-page-head">
        <div className="line">
          <h1>BOATYARD &amp; PHOTO GALLERY</h1>
          <p className="subtitile">
            Great location well protected from storms offering
            <br />
            unique priority to our clients as one of the a few marina&apos;s in the
            area with two 35 ton MARINE TRAVEL LIFTS.
          </p>
        </div>
      </section>

      <section className="content-page-main">
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

      <div className="testimonial-block">
        <div className="line testimonial-items">
          <div>
            <h2>For your piece of mind</h2>
            <p>
              Boat security is very important to all boat owners who trust their
              property to a marina either on a slip or dry-storage. At
              MAR-MARINA we take pride in our 24/7 security systems with our
              remote control main door system and man-surveillance overnight
              services.
            </p>
          </div>
          <div>
            <h2>Trust MAR-MARINA for your boating needs</h2>
            <p>
              MAR-Marina takes great pride in providing exceptional facilities
              and service. These core values are readily apparent in our
              full-service boatyard. ALL boatyard operations are performed only
              by our experienced personnel or trusted venders. We have the
              ability to haul boats up to 35 tons making our marina a one-stop
              shop for any boater needing world-class support and customer
              service.
            </p>
          </div>
          <div>
            <h2>At a very reasonable-competitive price</h2>
            <p>With location and services we consider outstanding our prices are more than reasonable.</p>
          </div>
        </div>
      </div>
      <div className="line">
        <ConversionCTA variant="quote" />
      </div>
    </>
  );
}

export function ContactContent() {
  return (
    <>
      <section className="home-section contact-page-hero">
        <div className="line">
          <div className="home-section-head">
            <h1 className="home-heading">Location / Contact</h1>
            <p className="home-subhead">
              Speak with the marina directly about wet slips, dry storage, haul-out, and service work.
              We&apos;ll confirm fit, timing, and next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section contact-page-layout">
        <div className="line contact-page-grid">
          <aside className="contact-info-stack">
            <article className="contact-info-card">
              <h2>MAR-MARINA</h2>
              <address>
                761 Anclote Road or by Google maps (761 Flaherty Road)
                <br />
                Tarpon Springs, FL 34689
                <br />
                <a href="tel:+17279391589">(727) 939-1589</a>
                <br />
                email: <a href="mailto:info@mar-marina.com">info@mar-marina.com</a>
              </address>
              <p className="quick-actions">
                <a className="quick-action" href="tel:+17279391589">
                  Call Marina
                </a>
                <a className="quick-action" href="mailto:info@mar-marina.com">
                  Email Marina
                </a>
              </p>
            </article>

            <article className="contact-info-card">
              <h2>Service Area</h2>
              <p>Tarpon Springs and surrounding Gulf Coast boating communities.</p>
              <h2>Social Media</h2>
              <p>
                <a
                  href="https://www.facebook.com/MarMarina1234/?skip_nax_wizard=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook
                </a>
              </p>
            </article>
          </aside>

          <div id="quote" className="contact-form-panel">
            <h2>Your request here about your boat</h2>
            <p className="contact-form-intro">
              Include your vessel length, storage or service need, and target dates.
              We respond during business hours.
            </p>
            <ContactForm />
            <ConversionCTA variant="contact" className="cta-after-form" />
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

      <section className="map-embed home-section">
        <div className="line map-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.4175021949045!2d-82.77631108440873!3d28.164215682604798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28dac4a982a73%3A0x7f336f0742a01e7f!2s761+Flaherty+Rd%2C+Tarpon+Springs%2C+FL+34689!5e0!3m2!1sen!2sus!4v1461526898761"
            width="100%"
            height="450"
            frameBorder="0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Mar-Marina map"
          />
        </div>
      </section>

      <div className="testimonial-block">
        <div className="line testimonial-items">
          <div>
            <h2>For your piece of mind</h2>
            <p>
              Boat security is very important to all boat owners who trust their
              property to a marina either on a slip or dry-storage. At
              MAR-MARINA we take pride in our 24/7 security systems with our
              remote control main door system and man-surveillance overnight
              services.
            </p>
          </div>
          <div>
            <h2>Trust MAR-MARINA for your boating needs</h2>
            <p>
              MAR-Marina takes great pride in providing exceptional facilities
              and service. These core values are readily apparent in our
              full-service boatyard. ALL boatyard operations are performed only
              by our experienced personnel or trusted venders. We have the
              ability to haul boats up to 35 tons making our marina a one-stop
              shop for any boater needing world-class support and customer
              service.
            </p>
          </div>
          <div>
            <h2>At a very reasonable-competitive price</h2>
            <p>With location and services we consider outstanding our prices are more than reasonable.</p>
          </div>
        </div>
      </div>
    </>
  );
}
