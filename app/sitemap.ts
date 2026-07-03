import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-url";

// Generates /sitemap.xml at build time. Single-page site → one entry.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
