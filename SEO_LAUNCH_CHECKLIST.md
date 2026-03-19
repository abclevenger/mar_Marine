# SEO Launch Checklist: Old Live → New Rebuild

**Source of truth (old):** https://mar-marina.org/  
**Rebuild (draft):** https://mar-marine.vercel.app/

Goal: Replace the live site with the rebuild without losing rankings, indexation, metadata relevance, or internal link equity. SEO preservation over design changes.

---

## A. SEO differences found between old and new

| Element | Old live site | New rebuild (before fixes) | Status |
|--------|----------------|----------------------------|--------|
| **URLs / slugs** | `/`, `index.html`, `wetslips.html`, `drystorage.html`, `boatyardgallery.html`, `contact.html` | Same | Preserved |
| **Title (home)** | Mar-Marina in Tarpon Springs Florida | Same | Preserved |
| **Title (reviews)** | MAR-MARINA Reviews | Same | Preserved |
| **Title (services)** | MAR-MARINA Services | Same | Preserved |
| **Title (gallery)** | Boatyard-Gallery | Same | Preserved |
| **Title (contact)** | MAR-MARINA Location - Contact | Same | Preserved |
| **Meta description (home)** | Full service protected harbor marina… Anclote River and intracoastal waterway… Tarpon Springs Florida | Same | Preserved |
| **Meta keywords** | Tarpon Springs, Florida, marina, full service… | Same | Preserved |
| **Canonicals** | Not present on old site | Set per page (/, /wetslips.html, etc.) with `metadataBase` https://mar-marina.org | Added (improvement) |
| **OG / Twitter** | Not present on old site | Set per page with title, description, image | Added (improvement) |
| **Robots** | No robots.txt (404) | Allow /, sitemap + host | Added (improvement) |
| **Sitemap** | No sitemap.xml (404) | All main + legal URLs, correct priorities | Added (improvement) |
| **Schema** | None in crawled HTML | Marina + WebSite in layout; FAQPage on home | Added (improvement) |
| **Heading hierarchy (home)** | h2 carousel, h2 “How We Do It”, h3 About/Company/Services/Contact, h1 “Safe and Close”, h2 LIFT & BOAT REPAIR, h2 testimonial x3 | Same structure | Preserved |
| **Heading hierarchy (reviews)** | h1 REVIEWS, h2 What they say…, h2 MAR-MARINA gallery, h2 x3 testimonials | Same | Preserved |
| **Heading hierarchy (services)** | h1 SERVICES, h3 DRY STORAGE / WET SLIPS / SECURITY / AMENITIES / REPAIRS / WAXING… / RACK STORAGE…, h2 STORAGE - REPAIR FACILITY, h2 x3 | Same | Preserved |
| **Heading hierarchy (gallery)** | h1 BOATYARD & PHOTO GALLERY, h2 For your piece of mind, h2 x2 | Same (incl. “piece” typo) | Preserved |
| **Heading hierarchy (contact)** | h1 MAR-MARINA LOCATION / contact page, h2 MAR-MARINA, Social Media, Your request…, For your piece of mind, h2 x2 | Same (incl. “piece” typo) | Preserved |
| **Body copy** | As crawled | Aligned; “piece” vs “peace” matched per page (gallery/contact use “piece”) | Preserved |
| **Home gallery image alt** | Empty on old | Was “alternative text” | Fixed to empty |
| **Hero / carousel images** | alt="" | alt="" | Preserved |
| **Internal nav links** | index.html, wetslips.html, drystorage.html, boatyardgallery.html, contact.html | Header: same; footer: / for home, rest same .html | Preserved (footer / is canonical for home) |
| **Footer** | No footer nav on old (only copyright) | Footer nav + contact + legal (Privacy, Terms, Accessibility, A2P) | New links; same main URLs |
| **NAP (address)** | 761 Anclote Road or by Google maps (761 Flaherty Road), Tarpon Springs, FL 34689 | Contact: same; footer/schema: 761 Anclote Rd. | Consistent (one standard form) |
| **NAP (phone)** | (727) 939-1589 | Same | Preserved |
| **NAP (email)** | Display: info@mar-marina.com (old mailto was wrong) | info@mar-marina.com, correct mailto | Preserved / corrected |
| **FAQ on home** | Not on old site | FAQ block + FAQPage schema on rebuild | New; see Manual review |
| **Legal pages** | None | /privacy, /terms, /accessibility, /a2p (indexable, in sitemap) | New; indexable by default |

---

## B. Changes made to the rebuild

1. **Image alt text (SEO parity)**  
   - Homepage “MAR-MARINA LIFT & BOAT REPAIR” gallery: all four image `alt` attributes changed from `"alternative text"` to `""` to match the old live site (old had no alt text there).

2. **No other copy or heading changes**  
   - Heading hierarchy and body copy were already aligned with the old site.  
   - “For your piece of mind” (typo) is kept on Boatyard/Gallery and Contact to match live; “For your peace of mind” is kept on Home, Reviews, and Services where the old site used “peace.”

3. **Canonicals, OG, Twitter, robots, sitemap, schema**  
   - Already set in the rebuild; no code changes in this pass. They either match or improve on the old site (which had no canonicals, OG, Twitter, robots.txt, or sitemap).

---

## C. Exact SEO elements preserved

- **URLs:** `/`, `/index.html` (rewrite to `/`), `/wetslips.html`, `/drystorage.html`, `/boatyardgallery.html`, `/contact.html`. No slug changes.
- **Title tags:** Mar-Marina in Tarpon Springs Florida (home); MAR-MARINA Reviews; MAR-MARINA Services; Boatyard-Gallery; MAR-MARINA Location - Contact.
- **Meta descriptions:** Same as old for all main pages; reviews page uses the same variant (anclote river, intracoastal, western Florida).
- **Meta keywords:** Same keyword set across relevant pages.
- **Canonicals:** Point to https://mar-marina.org with the same path as the page (e.g. `/`, `/wetslips.html`).
- **Robots:** Allow all; sitemap and host point to https://mar-marina.org.
- **OG / Twitter:** Titles and descriptions match page metadata; image and site name set.
- **Schema:** Marina (address, phone, url) and WebSite; FAQPage on home only.
- **Headings:** h1/h2/h3 structure matches old site per page; no extra or removed headings for main content.
- **Body copy:** Same wording and keyword themes; testimonial blocks and service bullets unchanged.
- **Internal links:** Main nav and footer use the same .html paths (footer home link uses `/` as canonical).
- **Image usage:** Same hero/carousel and gallery images; filenames and empty alt where old had none.
- **NAP:** 761 Anclote Rd. (and contact page “761 Anclote Road or by Google maps (761 Flaherty Road)”); (727) 939-1589; info@mar-marina.com.
- **Semantic HTML:** main, header, footer, nav, section, article, address preserved; skip link and ARIA where appropriate.

---

## D. Launch risks

1. **Domain switch**  
   When you point mar-marina.org to the new build (Vercel or other), ensure DNS/hosting serves the new app. No 301s are needed for the main URLs (same paths).  
   - **index.html:** Rebuild serves `/` and rewrites `/index.html` → `/`. If the old site linked to `index.html`, those requests will hit the rewrite; canonical is `/`. Low risk.

2. **Crawl budget / duplicate content**  
   - Sitemap includes both `/` and `/index.html`. Search engines will see `/index.html` rewrite to `/` and canonicals; acceptable. Optional: remove `/index.html` from sitemap later and keep only `/` to avoid any confusion.

3. **New content (FAQ, legal)**  
   - Homepage FAQ and legal pages are new. They don’t replace or conflict with old content; they add content. Risk of thin/duplicate content is low; optional to noindex legal pages if you prefer (see Manual review).

4. **Old site has no robots/sitemap**  
   - Rebuild adds both. No conflict; only improvement.

---

## E. Redirect map (if needed)

Current **rewrites** (same origin, no HTTP redirect):

- `/index.html` → `/`

Current **301 redirects** (in `next.config.ts`):

- `/reviews` → `/wetslips.html`
- `/reviews/` → `/wetslips.html`
- `/services` → `/drystorage.html`
- `/services/` → `/drystorage.html`
- `/boatyard-gallery` → `/boatyardgallery.html`
- `/boatyard-gallery/` → `/boatyardgallery.html`
- `/location-contact` → `/contact.html`
- `/location-contact/` → `/contact.html`

**No redirects from existing live URLs:** The live site uses `/`, `index.html`, and the four `.html` paths. Those are the same on the rebuild, so no redirect map is required for the current live URLs. The above redirects only handle optional “clean” URLs if you or others linked them.

---

## F. Manual review before go-live

1. **Homepage FAQ**  
   The old site has no FAQ section. The rebuild has a “Frequently Asked Questions” block and FAQPage schema. If you want strict parity and no extra duplication with “How We Do It” / testimonials, consider removing the FAQ block (and FAQ schema) or leaving as-is for extra relevance.

2. **Legal pages (Privacy, Terms, Accessibility, A2P)**  
   Currently **indexable** and **in sitemap** (yearly, priority 0.4). If you prefer them not to be indexed, add `robots: { index: false, follow: true }` to each legal page’s metadata and remove their URLs from `app/sitemap.ts`.

3. **Contact email link**  
   Old live contact page had visible “info@mar-marina.com” but `mailto:shane.struthers@hotmail.com`. Rebuild uses `mailto:info@mar-marina.com`. Confirm the correct address for the contact form and any backend.

4. **Sitemap: index.html**  
   Optional: remove the `/index.html` entry from the sitemap and keep only `/` to avoid listing two URLs for the same content.

5. **Final crawl**  
   After going live on mar-marina.org, run a quick crawl (Screaming Frog, Sitebulb, or similar) to confirm:  
   - 200 on `/`, `/wetslips.html`, `/drystorage.html`, `/boatyardgallery.html`, `/contact.html`, `/index.html` (or 301 to `/` if you change config).  
   - Canonicals and OG tags correct.  
   - No accidental noindex on main pages.

6. **Analytics / Search Console**  
   Re-verify Google Search Console (and Bing) property for mar-marina.org and submit the new sitemap after switch.

---

**Summary:** The rebuild preserves the old site’s URLs, titles, descriptions, keywords, heading structure, body copy, NAP, and internal links. It adds canonicals, OG/Twitter, robots.txt, sitemap, and schema. The only content change applied for SEO parity was making the home gallery image alts empty to match the old site. Everything else is preserved or additive. After the manual review above, the live domain can be switched to the new build with minimal SEO risk.
