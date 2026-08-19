import type { MetadataRoute } from "next";

import { canonicalUrl, SITE_URL } from "@/lib/seo/canonical";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/client", "/login", "/unauthorized", "/private"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: canonicalUrl("/"),
  };
}
