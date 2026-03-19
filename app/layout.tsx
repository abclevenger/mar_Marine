import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import { GlobalFooter } from "./components/GlobalFooter";
import { StickyMobileCta } from "./components/StickyMobileCta";
import { NAP, AREA_SERVED, SERVICES_EXPLICIT, SITE_URL } from "./lib/business";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mar-marina.org"),
  applicationName: "MAR-MARINA",
  title: "MAR-MARINA in Tarpon Springs, Florida",
  description:
    "MAR-MARINA is a full-service, protected-harbor marina located at the end of the Anclote River and the Gulf Intracoastal Waterway in Tarpon Springs, Florida.",
  keywords:
    "Tarpon Springs, Florida, marina, full service, intracoastal waterway, protected harbor, Gulf, Anclote River, dry dock, wet slips, boat yard",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mar-marina.org/",
    siteName: "MAR-MARINA",
    title: "MAR-MARINA in Tarpon Springs, Florida",
    description:
      "MAR-MARINA is a full-service, protected-harbor marina located at the end of the Anclote River and the Gulf Intracoastal Waterway in Tarpon Springs, Florida.",
    images: [
      {
        url: "/img/first.jpg",
        alt: "MAR-MARINA wet slips and dry storage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAR-MARINA in Tarpon Springs, Florida",
    description:
      "MAR-MARINA is a full-service, protected-harbor marina located at the end of the Anclote River and the Gulf Intracoastal Waterway in Tarpon Springs, Florida.",
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
        <Script
          id="leadconnector-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69bc367f8e4a64b1b4286163"
          strategy="afterInteractive"
        />
        <div className="layout-wrap">
          <div className="layout-main">{children}</div>
          <GlobalFooter />
        </div>
        <StickyMobileCta />
      </body>
    </html>
  );
}
