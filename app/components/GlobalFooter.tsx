const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/wetslips.html", label: "Reviews" },
  { href: "/drystorage.html", label: "Services" },
  { href: "/boatyardgallery.html", label: "Boatyard / Gallery" },
  { href: "/contact.html", label: "Location / Contact" },
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
      <div className="global-footer-inner line">
        <nav className="global-footer-nav" aria-label="Footer">
          <ul>
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="global-footer-contact">
          <p className="global-footer-address">
            <a href="https://www.google.com/maps/search/?api=1&query=761+Anclote+Rd+Tarpon+Springs+FL+34689" target="_blank" rel="noopener noreferrer">
              {MARINA_ADDRESS}
            </a>
          </p>
          <p>
            <a href={`tel:${MARINA_PHONE.replace(/\D/g, "")}`}>{MARINA_PHONE}</a>
            {" · "}
            <a href={`mailto:${MARINA_EMAIL}`}>{MARINA_EMAIL}</a>
          </p>
        </div>
        <nav className="global-footer-legal" aria-label="Legal and policies">
          <ul>
            {FOOTER_LEGAL.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="global-footer-copy">Copyright 2026 MAR-MARINA</p>
      </div>
    </footer>
  );
}
