import type { MetadataRoute } from "next";
import { business } from "@/data/business";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (!business.isPublicSiteConfigured) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${business.siteUrl}/sitemap.xml`,
  };
}
