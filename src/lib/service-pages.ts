import { SERVICES, type ServiceCategory, type ServiceItem } from "@/data/site";

type ServiceAlias = {
  slug: string;
  parentSlug: string;
  itemName?: string;
  title?: string;
  summary?: string;
};

const SERVICE_ALIASES: ServiceAlias[] = [
  { slug: "company-registration", parentSlug: "business-registration", itemName: "Company Incorporation", title: "Company Registration in Kenya" },
  { slug: "business-name-registration", parentSlug: "business-registration", itemName: "Business Name Registration" },
  { slug: "kra-services", parentSlug: "kra-tax-services", title: "KRA Services in Kenya" },
  { slug: "tax-compliance", parentSlug: "kra-tax-services", itemName: "Tax Compliance Certificate", title: "Tax Compliance Services" },
  { slug: "nssf-services", parentSlug: "clearance-vetting", itemName: "NSSF Compliance", title: "NSSF Services" },
  { slug: "sha-services", parentSlug: "clearance-vetting", itemName: "SHA Compliance", title: "SHA Services" },
  { slug: "business-compliance", parentSlug: "tenders-compliance", title: "Business Compliance Services" },
];

export type ServicePage = {
  slug: string;
  service: ServiceCategory;
  item?: ServiceItem;
  title: string;
  isAlias: boolean;
};

export function getServicePages(): ServicePage[] {
  const categoryPages = SERVICES.map((service) => ({
    slug: service.slug,
    service,
    title: service.title,
    isAlias: false,
  }));

  const aliasPages = SERVICE_ALIASES.flatMap((alias) => {
    const service = SERVICES.find((item) => item.slug === alias.parentSlug);
    if (!service) return [];
    const item = alias.itemName
      ? service.items.find((serviceItem) => serviceItem.name === alias.itemName)
      : undefined;
    return [
      {
        slug: alias.slug,
        service,
        item,
        title: alias.title || item?.name || service.title,
        isAlias: true,
      },
    ];
  });

  return [...categoryPages, ...aliasPages];
}

export function getServicePage(slug: string) {
  return getServicePages().find((page) => page.slug === slug);
}

export function getRelatedServicePages(currentSlug: string, limit = 4) {
  return getServicePages()
    .filter((page) => page.slug !== currentSlug)
    .filter((page, index, pages) => pages.findIndex((item) => item.slug === page.slug) === index)
    .slice(0, limit);
}
