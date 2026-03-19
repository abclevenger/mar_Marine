import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { PageShell } from "../../siteContent";
import { NAP, SITE_URL } from "../../lib/business";
import { SERVICE_PAGES, getServicePageBySlug } from "../../lib/servicePages";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePageBySlug(slug);

  if (!page) {
    return {};
  }

  const canonical = `/services/${page.slug}`;

  return {
    title: `${page.title} | Mar Marina`,
    description: page.description,
    keywords: `${page.primaryKeyword}, marina Tarpon Springs, Mar Marina`,
    alternates: { canonical },
    openGraph: {
      title: `${page.title} | Mar Marina`,
      description: page.description,
      url: canonical,
      siteName: "Mar Marina",
      type: "website",
      images: [{ url: "/img/first.jpg", alt: "Mar Marina service location" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | Mar Marina`,
      description: page.description,
      images: ["/img/first.jpg"],
    },
  };
}

export default async function ServiceLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getServicePageBySlug(slug);

  if (!page) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    areaServed: { "@type": "City", name: "Tarpon Springs" },
    provider: {
      "@type": "Marina",
      name: "Mar Marina",
      url: SITE_URL,
      telephone: NAP.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: NAP.street,
        addressLocality: NAP.city,
        addressRegion: NAP.region,
        postalCode: NAP.postalCode,
        addressCountry: NAP.country,
      },
    },
  };

  return (
    <PageShell currentPath="/drystorage.html">
      <Script
        id={`service-schema-${page.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="home-section services-page-hero">
        <div className="line">
          <div className="home-section-head">
            <p className="services-page-eyebrow">Tarpon Springs Marine Service</p>
            <h1 className="home-heading">{page.hero}</h1>
            <p className="home-subhead">{page.intro}</p>
            <div className="home-inline-cta">
              <Link href="/contact.html#quote" className="btn-hero btn-hero-primary">
                Get a Quote
              </Link>
              <Link href="/contact.html#quote" className="btn-hero btn-hero-outline btn-hero-outline--dark">
                Get a Quote
              </Link>
              <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-outline btn-hero-outline--dark">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section services-process">
        <div className="line">
          <div className="home-section-head">
            <h2 className="home-heading">What to expect</h2>
          </div>
          <div className="services-process-grid">
            {page.bullets.map((item, index) => (
              <article key={item} className="services-step-card">
                <span className="services-step-num">0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta-band" aria-label="Service landing CTA">
        <div className="line home-cta-band-inner">
          <div>
            <h2>Need {page.shortTitle.toLowerCase()} support now?</h2>
            <p>Share your vessel details, issue notes, and timeline for a faster fit and estimate response.</p>
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
    </PageShell>
  );
}
