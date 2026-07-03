import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-url";

// Generates /robots.txt at build time.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
