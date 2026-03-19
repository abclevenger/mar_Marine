import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { ContactForm } from "./components/ContactForm";
import { HeroSlideshow } from "./components/HeroSlideshow";

type NavItem = {
  href: string;
  label: string;
};

const NAV_LEFT: NavItem[] = [
  { href: "index.html", label: "Home" },
  { href: "wetslips.html", label: "REVIEWS" },
  { href: "drystorage.html", label: "SERVICES" },
];

const NAV_RIGHT: NavItem[] = [
  { href: "boatyardgallery.html", label: "BOATYARD / GALLERY" },
  { href: "contact.html", label: "LOCATION / CONTACT" },
];

function isActiveLink(currentPath: string, href: string): boolean {
  if (href === "index.html") {
    return currentPath === "/" || currentPath === "/index.html";
  }

  return currentPath === `/${href}`;
}

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

function headerLogoText() {
  return (
    <>
      WELCOME TO
      <br />
      MAR MARINA
      <span className="public-note">Open to the public</span>
    </>
  );
}

export function SiteHeader({ currentPath }: { currentPath: string }) {
  return (
    <header className="top-nav-shell">
      <nav className="line top-nav-grid" aria-label="Primary">
        <div className="menu-block menu-left">
          <ul>
            {NAV_LEFT.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={isActiveLink(currentPath, item.href) ? "active" : undefined}
                  aria-current={isActiveLink(currentPath, item.href) ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="logo-center">
          <a href="index.html">{headerLogoText()}</a>
        </div>

        <div className="menu-block menu-right">
          <ul>
            {NAV_RIGHT.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={isActiveLink(currentPath, item.href) ? "active" : undefined}
                  aria-current={isActiveLink(currentPath, item.href) ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="line footer-row">
        <p>
          Copyright 2025, Developed by:{" "}
          <a href="http://www.dimitriscreative.com/" target="_blank" rel="noreferrer">
            dimitriscreative
          </a>
        </p>
        <p>&nbsp;</p>
      </div>
    </footer>
  );
}

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
      <SiteHeader currentPath={currentPath} />
      <main id="main-content">{children}</main>
      <SiteFooter />
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
          text: "As a full service marina, we offer wet and dry storage in a secure marina.",
        },
      },
      {
        "@type": "Question",
        name: "How large of a boat can you haul?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have the ability to haul boats up to 35 tons making our marina a one-stop shop for any boater needing world-class support and customer service.",
        },
      },
      {
        "@type": "Question",
        name: "Is the marina secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Boat security is very important to all boat owners who trust their property to a marina either on a slip or dry-storage. At MAR-MARINA we take pride in our 24/7 security systems with our remote control main door system and man-surveillance overnight services.",
        },
      },
      {
        "@type": "Question",
        name: "Where is MAR-MARINA located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MAR-MARINA is located at 761 Anclote Rd., Tarpon Springs, FL 34689.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get an estimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With location and services we consider outstanding our prices are more than reasonable. Call or email us for an estimate.",
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

      <HeroSlideshow />

      <section className="first-block">
        <iframe
          src="https://player.vimeo.com/video/770544383?h=3b0cfe2ebf"
          width={450}
          height={253}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Mar-Marina video"
        />
      </section>

      <section className="first-block">
        <div className="line">
          <h2 className="section-title">How We Do It</h2>
          <p className="subtitile">
            Devotion to Safety, Professionalism and Respect for our clients property.
          </p>
          <div className="info-grid">
            <article>
              <h3>About</h3>
              <p>
                As a full service marina, we offer wet and dry storage in a
                secure marina.
                <br />
                MAR-MARINA takes great pride in providing exceptional facilities
                and service
                <br />
                for over 30 years.
              </p>
            </article>
            <article>
              <h3>Company</h3>
              <p>
                All boatyard operations are performed by our management crew
                that has over 110 years of experience combined.
              </p>
            </article>
            <article>
              <h3>Services</h3>
              <p>
                We have the ability to haul boats up to 35 tons making our
                marina a one-stop shop for any boater needing world-class
                support and customer service.
              </p>
            </article>
            <article>
              <h3>Contact</h3>
              <p>
                MAR-MARINA
                <br />
                761 Anclote Rd.,
                <br />
                Tarpon Springs, FL 34689{" "}
                <a href="tel:+17279391589">(727) 939-1589</a>
                <br />
                email:{" "}
                <a href="mailto:info@mar-marina.com">info@mar-marina.com</a>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="safe-block">
        <article className="line">
          <h1>Safe and Close</h1>
          <p>
            Great location well protected from storms offering
            <br />
            unique priority to our clients as one of the a few marina&apos;s in
            the area with two 35 ton MARINE TRAVEL LIFTS.
          </p>
        </article>
      </section>

      <section className="gallery">
        <div className="line">
          <h2 className="section-title">MAR-MARINA LIFT &amp; BOAT REPAIR</h2>
          <p className="subtitile">Any job large or small in a timely fashion</p>
          <div className="gallery-grid">
            <img src="/img/first-small.jpg" alt="alternative text" />
            <img src="/img/second-small.jpg" alt="alternative text" />
            <img src="/img/third-small.jpg" alt="alternative text" />
            <img src="/img/fourth-small.jpg" alt="alternative text" />
          </div>
        </div>
      </section>

      <div className="testimonial-block">
        <div className="line testimonial-items">
          <div>
            <h2>For your peace of mind</h2>
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
            <p>
              With location and services we consider outstanding our prices are
              more than reasonable.
              <br />
              <a href="tel:+17279391589">Call</a> or{" "}
              <a href="mailto:info@mar-marina.com">email</a> us for an estimate.
            </p>
          </div>
        </div>
      </div>

      <section className="faq-block">
        <div className="line">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="subtitile">
            Quick answers about storage, hauling, security, and contact.
          </p>
          <div className="faq-list">
            <details>
              <summary>What types of storage does MAR-MARINA offer?</summary>
              <p>
                As a full service marina, we offer wet and dry storage in a secure
                marina.
              </p>
            </details>
            <details>
              <summary>How large of a boat can you haul?</summary>
              <p>
                We have the ability to haul boats up to 35 tons making our marina
                a one-stop shop for any boater needing world-class support and
                customer service.
              </p>
            </details>
            <details>
              <summary>Is the marina secure?</summary>
              <p>
                Boat security is very important to all boat owners who trust their
                property to a marina either on a slip or dry-storage. At MAR-MARINA
                we take pride in our 24/7 security systems with our remote control
                main door system and man-surveillance overnight services.
              </p>
            </details>
            <details>
              <summary>Where is MAR-MARINA located?</summary>
              <p>MAR-MARINA is located at 761 Anclote Rd., Tarpon Springs, FL 34689.</p>
            </details>
            <details>
              <summary>How can I get an estimate?</summary>
              <p>
                With location and services we consider outstanding our prices are
                more than reasonable. <a href="tel:+17279391589">Call</a> or{" "}
                <a href="mailto:info@mar-marina.com">email</a> us for an estimate.
              </p>
            </details>
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
    </>
  );
}

export function ServicesContent() {
  return (
    <>
      <section className="content-page-head">
        <div className="line">
          <h1>SERVICES</h1>
        </div>
      </section>

      <section className="content-page-main">
        <div className="line columns-3">
          <article>
            <h3>DRY STORAGE</h3>
            <p>
              We have dry storage capabilities for boats as large as 55&apos; long
              x 20&apos; wide.
              <br />
              Daily, Weekly, and Monthly rates available
              <br />
              Call for Pricing and Availability
            </p>
            <h3>WET SLIPS</h3>
            <p>
              Our wet slips can accommodate boats up to 75&apos; long x 20&apos; wide
              with a 7&apos; draft.
              <br />
              FEATURING: NEW Docks, NEW plumbing, NEW Power - 30, 50, 100 amp
            </p>
          </article>

          <article>
            <h3>SECURITY</h3>
            <p>
              This is a secure marina with a locked gate and 24 hour
              <br />
              on-site security
            </p>
            <h3>AMENITIES</h3>
            <p>
              Picnic Area / BBQ, Dog Walk, Clean Restrooms, / Showers, Fish
              Cleaning Station / Pumpout portable station
            </p>
          </article>

          <article>
            <h3>REPAIRS</h3>
            <p>
              With an extensive crew of mechanics, detailing, painting
              professionals we can handle any kind of job in a timely fashion
            </p>
            <h3>WAXING AND BUFFING</h3>
            <p>
              Upon your request we can restore any faded Gelcoat on your boat
              and make it look like new again.
            </p>
            <h3>
              NOW WE OFFER
              <br />
              RACK STORAGE FOR BOATS UP TO 28&apos;
              <br />
              WITH FORKLIFT
              <br />
              IN-OUT
            </h3>
          </article>
        </div>
      </section>

      <section className="gallery">
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
    </>
  );
}

export function ContactContent() {
  return (
    <>
      <section className="content-page-head">
        <div className="line">
          <h1>MAR-MARINA LOCATION / contact page</h1>
        </div>
      </section>

      <section className="content-page-main">
        <div className="line contact-grid">
          <div>
            <h2>MAR-MARINA</h2>
            <address>
              761 Anclote Road or by Google maps (761 Flaherty Road)
              <br />
              Tarpon Springs, FL 34689
              <br />
              <a href="tel:+17279391589">(727) 939-1589</a>
              <br />
              email: <a href="mailto:shane.struthers@hotmail.com">info@mar-marina.com</a>
            </address>
            <p className="quick-actions">
              <a className="quick-action" href="tel:+17279391589">
                Call Marina
              </a>
              <a className="quick-action" href="mailto:info@mar-marina.com">
                Email Marina
              </a>
            </p>
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
          </div>

          <div>
            <h2>Your request here about your boat</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="map-embed">
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
