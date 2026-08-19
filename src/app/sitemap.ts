import type { MetadataRoute } from "next";

import { getAllContentEntries } from "@/lib/content";
import { canonicalUrl } from "@/lib/seo/canonical";
import { getServicePages } from "@/lib/service-pages";
import { contentPath } from "@/lib/content/types";
import { VISA_COUNTRIES } from "@/data/visaCountries";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-08-16");
  const staticRoutes = [
    "/",
    "/services",
    "/visa",
    "/embassies",
    "/about",
    "/contact",
    "/faqs",
    "/faq",
    "/blog",
    "/guides",
    "/resources",
    "/resources/blog",
    "/resources/guides",
    "/resources/faqs",
    "/locations",
    "/locations/kenya",
    "/locations/nairobi",
    "/privacy-policy",
    "/privacy",
    "/terms",
  ];

  const visaCountryRoutes = VISA_COUNTRIES.map((c) => ({
    url: canonicalUrl(`/visa/${c.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const visaCategoryRoutes = VISA_COUNTRIES.flatMap((c) =>
    c.categories.map((cat) => ({
      url: canonicalUrl(`/visa/${c.slug}/${cat.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  );

  const embassyRoutes = VISA_COUNTRIES.map((c) => ({
    url: canonicalUrl(`/embassies/${c.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: canonicalUrl(route),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.7,
    })),
    ...getServicePages().map((page) => ({
      url: canonicalUrl(`/services/${page.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page.isAlias ? 0.8 : 0.9,
    })),
    ...visaCountryRoutes,
    ...visaCategoryRoutes,
    ...embassyRoutes,
    ...getAllContentEntries().map((entry) => ({
      url: canonicalUrl(contentPath(entry)),
      lastModified: new Date(entry.updatedAt || entry.publishedAt),
      changeFrequency: "monthly" as const,
      priority: entry.type === "resources" ? 0.5 : 0.7,
    })),
  ];
}

