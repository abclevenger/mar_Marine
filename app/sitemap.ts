import type { MetadataRoute } from "next";

const BASE_URL = "https://mar-marina.org";
const LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/index.html`,
      changeFrequency: "monthly",
      priority: 0.9,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/wetslips.html`,
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/drystorage.html`,
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/boatyardgallery.html`,
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/contact.html`,
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: LAST_MODIFIED,
    },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.4, lastModified: LAST_MODIFIED },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.4, lastModified: LAST_MODIFIED },
    { url: `${BASE_URL}/accessibility`, changeFrequency: "yearly", priority: 0.4, lastModified: LAST_MODIFIED },
    { url: `${BASE_URL}/a2p`, changeFrequency: "yearly", priority: 0.4, lastModified: LAST_MODIFIED },
  ];
}
