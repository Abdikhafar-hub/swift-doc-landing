import { COMPANY, type ServiceCategory } from "@/data/site";
import type { ContentEntry } from "@/lib/content/types";
import { canonicalUrl, SITE_URL } from "@/lib/seo/canonical";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legal,
    url: SITE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.building,
      postOfficeBoxNumber: COMPANY.postalBox,
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    areaServed: "Kenya",
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: COMPANY.name,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.href),
    })),
  };
}

export function serviceSchema(service: ServiceCategory) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Kenya",
    serviceType: service.items.map((item) => item.name),
    audience: service.audience,
    url: canonicalUrl(`/services/${service.slug}`),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function articleSchema(entry: ContentEntry, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.description,
    datePublished: entry.publishedAt,
    dateModified: entry.updatedAt || entry.publishedAt,
    author: {
      "@type": "Person",
      name: entry.author,
      jobTitle: entry.authorRole,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: canonicalUrl(path),
  };
}

export function visaServiceSchema(countryName: string, categoryTitle: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${categoryTitle} - ${countryName} Visa Assistance`,
    description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["Kenya", countryName],
    serviceType: `${countryName} Visa Application and Document Preparation Assistance`,
    url: canonicalUrl(path),
  };
}

export function embassySchema(countryName: string, missionName: string, applicationCenter: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "GovernmentBuilding",
    name: missionName,
    description: `Official mission and visa application center details for ${countryName} in Nairobi, Kenya.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    url: canonicalUrl(path),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Application Centre / Submission Channel",
        value: applicationCenter,
      },
    ],
  };
}

