import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { GlobalFooter } from "./components/GlobalFooter";
import { NAP, AREA_SERVED, SERVICES_EXPLICIT, SITE_URL, TRUST_FACTS } from "./lib/business";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mar-marina.org"),
  applicationName: "MAR-MARINA",
  title: "Mar-Marina in Tarpon Springs Florida",
  description:
    "Mar-Marina is a full service protected harbor marina located at the end of Anclote River and intracoastal waterway of the Gulf in Tarpon Springs Florida.",
  keywords:
    "Tarpon Springs, Florida, marina, full service, intracoastal waterway, protected harbor, Gulf, anclote river, dry dock, wet slips, boat yard",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mar-marina.org/",
    siteName: "MAR-MARINA",
    title: "Mar-Marina in Tarpon Springs Florida",
    description:
      "Mar-Marina is a full service protected harbor marina located at the end of Anclote River and intracoastal waterway of the Gulf in Tarpon Springs Florida.",
    images: [
      {
        url: "/img/first.jpg",
        alt: "MAR-MARINA wet slips and dry storage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mar-Marina in Tarpon Springs Florida",
    description:
      "Mar-Marina is a full service protected harbor marina located at the end of Anclote River and intracoastal waterway of the Gulf in Tarpon Springs Florida.",
    images: ["/img/first.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Marina",
    name: NAP.name,
    url: SITE_URL,
    telephone: NAP.phone,
    email: NAP.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.street,
      addressLocality: NAP.city,
      addressRegion: NAP.region,
      postalCode: NAP.postalCode,
      addressCountry: NAP.country,
    },
    areaServed: AREA_SERVED.map((a) => ({ "@type": "Place", name: a })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marina services",
      itemListElement: SERVICES_EXPLICIT.map((s, i) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.description },
      })),
    },
    description: "Full service marina in Tarpon Springs, Florida: wet slips, dry storage, haul-out up to 35 tons, boat repair and storage.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: NAP.name,
    url: SITE_URL,
    inLanguage: "en-US",
    potentialAction: { "@type": "SearchAction", target: `${SITE_URL}/contact.html`, "query-input": "required name=search_term_string" },
  };

  return (
    <html lang="en-US" className={`${openSans.variable} antialiased`}>
      <body className="layout-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <div className="layout-wrap">
          <div className="layout-main">{children}</div>
          <GlobalFooter />
        </div>
      </body>
    </html>
  );
}
