import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
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
    name: "MAR-MARINA",
    url: "https://mar-marina.org",
    telephone: "(727) 939-1589",
    address: {
      "@type": "PostalAddress",
      streetAddress: "761 Anclote Rd.",
      addressLocality: "Tarpon Springs",
      addressRegion: "FL",
      postalCode: "34689",
      addressCountry: "US",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MAR-MARINA",
    url: "https://mar-marina.org",
    inLanguage: "en-US",
  };

  return (
    <html lang="en-US" className={`${openSans.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
