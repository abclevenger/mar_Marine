import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mar-marina.org/sitemap.xml",
    host: "https://mar-marina.org",
  };
}
