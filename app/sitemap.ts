import type { MetadataRoute } from "next";
import { business } from "@/data/business";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!business.isPublicSiteConfigured) return [];

  return [
    {
      url: business.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${business.siteUrl}/privacidade`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
