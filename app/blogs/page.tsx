import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PageShell } from "../siteContent";

const POSTS = [
  {
    href: "/guides/tarpon-springs-marina",
    title: "Tarpon Springs Marina Guide",
    excerpt:
      "What to check before choosing a marina in Tarpon Springs, including access, protection, and service coordination.",
  },
  {
    href: "/guides/dry-storage-vs-wet-slips",
    title: "Dry Storage vs Wet Slips",
    excerpt:
      "A practical comparison to help owners choose the right storage model based on use, maintenance, and budget.",
  },
  {
    href: "/guides/boat-storage-pricing-tarpon-springs",
    title: "Boat Storage Pricing in Tarpon Springs",
    excerpt:
      "A local pricing breakdown and the key factors that affect monthly and seasonal storage costs.",
  },
  {
    href: "/guides/hurricane-storm-boat-protection",
    title: "Hurricane and Storm Boat Protection",
    excerpt:
      "How to prepare your vessel and storage plan for Florida storm conditions with less downtime risk.",
  },
  {
    href: "/guides/choosing-a-marina-tarpon-springs",
    title: "How to Choose a Marina in Tarpon Springs",
    excerpt:
      "A decision framework for selecting the right marina for repair, haul-out, storage, and long-term support.",
  },
] as const;

export const metadata: Metadata = {
  title: "Marine Service Blog | Mar Marina Tarpon Springs",
  description:
    "Read Mar Marina blog guides on boat repair, storage, maintenance, and marina planning in Tarpon Springs, Florida.",
  keywords:
    "marine blog Tarpon Springs, boat repair blog, boat storage guide Tarpon Springs, marina tips Florida, marine maintenance articles",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Marine Service Blog | Mar Marina Tarpon Springs",
    description:
      "Local blog guides for boat repair, storage, marina planning, and maintenance in Tarpon Springs.",
    url: "/blogs",
    siteName: "Mar Marina",
    type: "website",
    images: [{ url: "/img/first.jpg", alt: "Mar Marina blog and guides" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marine Service Blog | Mar Marina Tarpon Springs",
    description:
      "Local blog guides for boat repair, storage, marina planning, and maintenance in Tarpon Springs.",
    images: ["/img/first.jpg"],
  },
};

export default function BlogsPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Mar Marina Blog",
    description:
      "Practical marine service articles about boat repair, storage, maintenance, and marina operations in Tarpon Springs.",
    url: "https://mar-marina.org/blogs",
    publisher: {
      "@type": "Organization",
      name: "Mar Marina",
      url: "https://mar-marina.org",
    },
    blogPost: POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://mar-marina.org${post.href}`,
    })),
  };

  return (
    <PageShell currentPath="/blogs">
      <Script
        id="blogs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <section className="home-section services-page-hero">
        <div className="line">
          <div className="home-section-head">
            <p className="services-page-eyebrow">Mar Marina Blog</p>
            <h1 className="home-heading">Marine service blog and local boating guides</h1>
            <p className="home-subhead">
              Practical articles for Tarpon Springs boat owners covering repair planning, storage options,
              storm preparation, and long-term maintenance decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section services-page-grid" aria-labelledby="blogs-posts-heading">
        <div className="line">
          <div className="home-section-head">
            <h2 id="blogs-posts-heading" className="home-heading">Latest guides</h2>
            <p className="home-subhead">
              Each article is written to answer common service and storage questions with clear local context.
            </p>
          </div>
          <div className="service-cards">
            {POSTS.map((post) => (
              <article key={post.href} className="service-card">
                <h3 className="service-card-title">{post.title}</h3>
                <p className="service-card-copy">{post.excerpt}</p>
                <Link href={post.href} className="quick-action lead-service-cta">
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta-band" aria-label="Blog page CTA">
        <div className="line home-cta-band-inner">
          <div>
            <h2>Need help with your boat now?</h2>
            <p>Get a quote for repair, storage, or inspection support from our Tarpon Springs team.</p>
          </div>
          <div className="home-cta-band-actions">
            <Link href="/contact.html#quote" className="btn-hero btn-hero-primary">
              Get a Quote
            </Link>
            <a href="tel:+17279391589" className="btn-hero btn-hero-outline btn-hero-outline--dark">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
