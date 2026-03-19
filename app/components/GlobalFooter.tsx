const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blog" },
  { href: "/wetslips.html", label: "Reviews" },
  { href: "/drystorage.html", label: "Services" },
  { href: "/boatyardgallery.html", label: "Gallery" },
  { href: "/contact.html", label: "Contact" },
];

const FOOTER_GUIDES = [
  { href: "/guides/tarpon-springs-marina", label: "Marina Guide" },
  { href: "/guides/dry-storage-vs-wet-slips", label: "Dry vs Wet Slips" },
  { href: "/guides/boat-storage-pricing-tarpon-springs", label: "Pricing Guide" },
  { href: "/guides/hurricane-storm-boat-protection", label: "Storm Guide" },
  { href: "/guides/choosing-a-marina-tarpon-springs", label: "Choosing a Marina" },
];

const FOOTER_LEGAL = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/a2p", label: "A2P" },
];

const MARINA_PHONE = "(727) 939-1589";
const MARINA_EMAIL = "info@mar-marina.com";
const MARINA_ADDRESS = "761 Anclote Rd., Tarpon Springs, FL 34689";

export function GlobalFooter() {
  return (
    <footer className="global-footer" role="contentinfo">
      <div className="global-footer-top line">
        <div className="global-footer-brand">
          <p className="global-footer-brand-name">Mar Marina</p>
          <p className="global-footer-tagline">
            Wet slips, dry storage, and 35-ton haul-out in Tarpon Springs—Anclote River.
          </p>
          <a
            className="global-footer-fb"
            href="https://www.facebook.com/MarMarina1234/?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className="global-footer-columns">
          <nav className="global-footer-col" aria-label="Site">
            <p className="global-footer-col-title">Explore</p>
            <ul>
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="global-footer-col" aria-label="Guides">
            <p className="global-footer-col-title">Guides</p>
            <ul>
              {FOOTER_GUIDES.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="global-footer-col global-footer-col--contact">
            <p className="global-footer-col-title">Contact</p>
            <address className="global-footer-address-block">
              <a
                href="https://www.google.com/maps/search/?api=1&query=761+Anclote+Rd+Tarpon+Springs+FL+34689"
                target="_blank"
                rel="noopener noreferrer"
              >
                {MARINA_ADDRESS}
              </a>
              <br />
              <a href={`tel:${MARINA_PHONE.replace(/\D/g, "")}`}>{MARINA_PHONE}</a>
              <br />
              <a href={`mailto:${MARINA_EMAIL}`}>{MARINA_EMAIL}</a>
            </address>
            <p className="global-footer-cta">
              <a href="/contact.html#quote" className="global-footer-cta-btn">
                Get a Quote
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="global-footer-bottom line">
        <nav className="global-footer-legal" aria-label="Legal and policies">
          <ul>
            {FOOTER_LEGAL.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="global-footer-copy">
          © 2026 Mar Marina. All rights reserved. |{" "}
          <a className="global-footer-ymbs" href="https://www.ymbs.pro" target="_blank" rel="noopener noreferrer">
            <img src="/img/ymbs-logo.png" alt="YMBS" width="98" height="28" />
          </a>
        </p>
      </div>
    </footer>
  );
}
