# Phase 1 — Site Audit (Pre-Upgrade)

**Audit date:** 2026  
**Scope:** mar-marina.org rebuild (Next.js)

---

## 1. Existing page structure

| Page | Route | Purpose |
|------|--------|---------|
| Home | `/`, `/index.html` (rewrite) | Brochure home, hero, video, How We Do It, Safe and Close, LIFT & BOAT REPAIR gallery, testimonials, FAQ |
| Reviews | `/wetslips.html` | Testimonials, ReputationHub widget, gallery, shared testimonials |
| Services | `/drystorage.html` | DRY STORAGE, WET SLIPS, SECURITY, AMENITIES, REPAIRS, WAXING AND BUFFING, RACK STORAGE, gallery, testimonials |
| Boatyard / Gallery | `/boatyardgallery.html` | Gallery grid, testimonials |
| Location / Contact | `/contact.html` | NAP, Social Media, Contact form, map embed, testimonials |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms and conditions |
| Accessibility | `/accessibility` | Accessibility statement |
| A2P | `/a2p` | A2P messaging |

---

## 2. Current URLs and slug structure

- **Preserved:** `/`, `index.html`→`/`, `/wetslips.html`, `/drystorage.html`, `/boatyardgallery.html`, `/contact.html`.
- **Legal:** `/privacy`, `/terms`, `/accessibility`, `/a2p`.
- **Redirects:** `/reviews`→`/wetslips.html`, `/services`→`/drystorage.html`, `/boatyard-gallery`→`/boatyardgallery.html`, `/location-contact`→`/contact.html`.

---

## 3. Title tags

| Page | Title |
|------|--------|
| Home | Mar-Marina in Tarpon Springs Florida |
| Reviews | MAR-MARINA Reviews |
| Services | MAR-MARINA Services |
| Gallery | Boatyard-Gallery |
| Contact | MAR-MARINA Location - Contact |
| Privacy | Privacy Policy \| MAR-MARINA |
| Terms | Terms and Conditions \| MAR-MARINA |
| Accessibility | Accessibility \| MAR-MARINA |
| A2P | A2P Messaging \| MAR-MARINA |

---

## 4. Meta descriptions

- **Home:** Full service protected harbor marina at end of Anclote River and intracoastal waterway of the Gulf in Tarpon Springs Florida.
- **Reviews:** Full service marina in Tarpon Springs Florida on end of anclote river and intracoastal waterway in western Florida.
- **Services / Gallery / Contact:** Same as BASE_DESCRIPTION (protected harbor, Anclote River, intracoastal, Gulf, Tarpon Springs Florida).

---

## 5. Canonicals

- All pages set `alternates.canonical` (relative); `metadataBase: https://mar-marina.org` in layout resolves to full URLs.
- Home: `/`, Reviews: `/wetslips.html`, Services: `/drystorage.html`, Gallery: `/boatyardgallery.html`, Contact: `/contact.html`, legal: `/privacy`, etc.

---

## 6. Robots directives

- `app/robots.ts`: `allow: "/"`, `sitemap: https://mar-marina.org/sitemap.xml`, `host: https://mar-marina.org`.
- Layout: `robots: { index: true, follow: true }`. No noindex on any page.

---

## 7. XML sitemap behavior

- Dynamic `app/sitemap.ts`; BASE_URL = https://mar-marina.org.
- Includes: `/`, `/index.html`, `/wetslips.html`, `/drystorage.html`, `/boatyardgallery.html`, `/contact.html`, `/privacy`, `/terms`, `/accessibility`, `/a2p`.
- Priorities: home 1 / 0.9, main 0.8 / 0.7, legal 0.4. changeFrequency monthly or yearly.

---

## 8. Heading hierarchy (H1–H6)

- **Home:** No single h1 above fold; hero h2s; h2 "How We Do It"; h3 About, Company, Services, Contact; h1 "Safe and Close"; h2 LIFT & BOAT REPAIR; h2 testimonial x3; h2 "Frequently Asked Questions"; details/summary.
- **Reviews:** h1 REVIEWS; h2 What they say about us; h2 MAR-MARINA gallery; h2 x3 (testimonials).
- **Services:** h1 SERVICES; h3 DRY STORAGE, WET SLIPS, SECURITY, AMENITIES, REPAIRS, WAXING AND BUFFING, RACK STORAGE; h2 STORAGE - REPAIR FACILITY; h2 x3 (testimonials).
- **Gallery:** h1 BOATYARD & PHOTO GALLERY; h2 x3 (testimonials).
- **Contact:** h1 MAR-MARINA LOCATION / contact page; h2 MAR-MARINA, Social Media, Your request here about your boat; h2 x3 (testimonials).

---

## 9. Internal linking

- **Header nav:** index.html, wetslips.html, drystorage.html, boatyardgallery.html, contact.html.
- **Footer:** /, /wetslips.html, /drystorage.html, /boatyardgallery.html, /contact.html; /privacy, /terms, /accessibility, /a2p.
- **In-content:** Home has tel and mailto; Contact has form. No contextual links to Services/Reviews/Contact from body copy. No links to educational/guide pages.

---

## 10. Image usage, filenames, and alt text

- Hero: first.jpg–eighth.jpg, fifth, seventh; alt="" (HeroSlideshow).
- Home gallery: first-small.jpg–fourth-small.jpg; alt="".
- Reviews/Services gallery: same thumbs; alt="".
- Gallery page: 6.jpg–14.jpg, second-small, third-small, fourth-small; alt="".
- All under `/img/`. No descriptive alts; no lazy-load issues (loading="lazy" on iframes).

---

## 11. NAP consistency

- **Name:** MAR-MARINA.
- **Address:** 761 Anclote Rd. (footer, schema); Contact page: "761 Anclote Road or by Google maps (761 Flaherty Road), Tarpon Springs, FL 34689."
- **Phone:** (727) 939-1589.
- **Email:** info@mar-marina.com (display and mailto on rebuild; contact section consistent).
- Schema: streetAddress "761 Anclote Rd.", addressLocality "Tarpon Springs", addressRegion "FL", postalCode "34689".

---

## 12. Existing business/service/location content

- **Services listed:** Wet and dry storage, 55' x 20' dry / 75' x 20' wet 7' draft, 35-ton haul, rack storage to 28', repairs, waxing/buffing, security (locked gate, 24hr on-site), amenities (BBQ, restrooms, showers, fish cleaning, pumpout).
- **Location:** End of Anclote River, intracoastal waterway, Gulf, Tarpon Springs Florida; two 35-ton marine travel lifts; "protected from storms."
- **Trust:** 30+ years, 110+ years combined management experience; testimonials on Reviews.

---

## 13. Existing schema markup

- **Layout (global):** LocalBusiness subtype Marina: name, url, telephone, address (PostalAddress).
- **Home:** FAQPage (5 questions: storage types, haul size, security, location, estimate).
- No Organization, BreadcrumbList, Service, or areaServed. No sameAs (social).

---

## 14. Existing conversion points

- **Contact page:** ContactForm (name, email, phone, message), "Call Marina" / "Email Marina" buttons, NAP.
- **Home:** "Call" and "email" in testimonial block (tel + mailto).
- No quote-specific CTA; no repeated CTAs on Services/Gallery; no sticky or mobile-specific CTA.

---

## 15. Weaknesses for local SEO

- Limited "Tarpon Springs" and "Florida" in body copy and service-specific meta.
- No dedicated location/guide pages (e.g. "marina Tarpon Springs," "boat storage Tarpon Springs").
- Service pages don’t explicitly say "in Tarpon Springs" or "near [X]" in first paragraph.
- No internal links from service pages to location/educational content.
- Schema lacks areaServed, Service offerings, and explicit geo.

---

## 16. Weaknesses for LLM/AI discoverability

- Key facts (haul capacity, sizes, security, services) are embedded in paragraphs, not as clear bullet facts.
- No single "who we are / what we offer / where / why choose us" summary block.
- No comparison or educational content (dry vs wet, hurricane, choosing a marina).
- Some vague phrasing ("world-class," "one-stop shop") without always tying to specifics.
- FAQ answers could be more quotable and fact-dense.

---

## 17. Thin-content or duplicate-content risks

- **Duplicate:** Same testimonial block (three h2s + paragraphs) on Home, Reviews, Services, Gallery, Contact. Acceptable for trust but repeated verbatim.
- **Thin:** Gallery page is mostly images and one intro paragraph; Services is bullet-heavy with little prose.
- Legal pages are substantive. No cross-domain duplication.

---

## 18. Page speed / accessibility / semantic HTML

- **Semantic:** main, header, footer, nav, section, article, address used; skip link present.
- **Images:** Standard img; no next/image (could improve LCP). No obvious oversized assets.
- **Fonts:** Open Sans via next/font. No layout shift noted.
- **Forms:** Labels, aria-live, honeypot; no CAPTCHA in audit.
- **Iframes:** title on video and map; review widget has title. Lazy loading on iframes.
- **Performance:** No heavy JS beyond slideshow and form; lightweight dependencies.

---

*End of Phase 1 audit. All listed elements are preserved or improved with care in subsequent phases.*
