import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/reviews", destination: "/wetslips.html", permanent: true },
      { source: "/reviews/", destination: "/wetslips.html", permanent: true },
      { source: "/services", destination: "/drystorage.html", permanent: true },
      { source: "/services/", destination: "/drystorage.html", permanent: true },
      { source: "/boatyard-gallery", destination: "/boatyardgallery.html", permanent: true },
      { source: "/boatyard-gallery/", destination: "/boatyardgallery.html", permanent: true },
      { source: "/location-contact", destination: "/contact.html", permanent: true },
      { source: "/location-contact/", destination: "/contact.html", permanent: true },
    ];
  },
  async rewrites() {
    return [{ source: "/index.html", destination: "/" }];
  },
};

export default nextConfig;
