# Homepage audit & conversion redesign

## Prior issues (before redesign)

| Area | Problem |
|------|--------|
| **Hero** | Rotating ALL-CAPS lines read like a template; no single value proposition; weak connection to “why us now.” |
| **Trust** | No trust strip above the fold; credentials (years, lifts, security) buried in long sections. |
| **Services** | Generic “How We Do It” four-box grid with vague copy (“world-class,” “one-stop shop”). |
| **Conversion** | CTAs scattered; no form on homepage; video loaded without context. |
| **Testimonials** | Three marketing-style headings, not recognizable as customer quotes. |
| **Gallery** | Four small images, no captions, weak tie to “work.” |
| **Hierarchy** | Many similar-weight sections; long scroll without clear story: problem → proof → action. |
| **Footer** | Single flat row of links; no brand story or quote CTA. |

## What we implemented

1. **`HomeHero` + `HeroSlideshow(suppressCaptions)`** — One clear **h1** value prop, supporting line, primary/secondary CTAs, trust chips (years, lifts, security, haul capacity). Slideshow remains for imagery; original slide **h2** copy kept in `sr-slide-copy` for SEO/crawl parity.
2. **Service cards** — Five linkable cards with specific specs (sizes, lifts, security framing) and “→” affordances.
3. **Media row** — Video beside short copy + quote CTA.
4. **“Why owners stay”** — Three tight proof cards + resource links.
5. **Safe and close** — Tightened copy; **h2** (homepage already has **h1** in hero).
6. **Work gallery** — Six images with figcaptions + link to full gallery.
7. **Testimonials** — Three pull quotes attributed to initials (from real review themes on `/wetslips.html`).
8. **FAQ** — Answers aligned with factual schema tone.
9. **Quote section** — NAP + **ContactForm** + call button; `id="quote"` for deep links.
10. **Footer** — Brand, tagline, Facebook, Explore / Guides / Contact columns, quote button, legal row.

## SEO notes

- Single **h1** on homepage (hero). “Safe and Close” is **h2** with `.home-safe-title` styling preserved for visual weight.
- FAQ schema unchanged in structure; on-page FAQ answers updated to match factual tone.
- Internal links to services, guides, gallery, reviews retained or strengthened.
