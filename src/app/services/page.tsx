import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/site/ui";
import { FAQS, SERVICES } from "@/data/site";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceDirectory } from "@/components/content/ServiceDirectory";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { getContentEntries } from "@/lib/content";

export const metadata: Metadata = createMetadata({
  title: "Statutory Services in Kenya | Swift Doc",
  description:
    "Explore Swift Doc service areas for Kenyan business registration, KRA, immigration, NTSA, compliance, authentication and other statutory filings.",
  path: "/services",
});

export default ServicesPage;

function ServicesPage() {
  const resources = getContentEntries("blog").concat(getContentEntries("guides")).slice(0, 3);
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(FAQS.slice(0, 3))} />
      <PageHero
        eyebrow="Service index"
        title="Every filing we handle, and what it actually takes."
        lead="Each practice area lists the individual services, realistic turnaround windows and the documents you will need to bring."
      />

      <section className="shell py-16 lg:py-24">
        <Breadcrumbs items={breadcrumbs} />
        <ServiceDirectory services={SERVICES} />
      </section>

      <section className="border-t border-hairline bg-sand">
        <div className="shell py-16">
          <p className="rule-label">Related resources</p>
          <div className="mt-8 grid gap-px bg-hairline md:grid-cols-3">
            {resources.map((entry) => (
              <Link
                key={`${entry.type}-${entry.slug}`}
                href={`/${entry.type}/${entry.slug}`}
                className="bg-sand p-7 transition-colors hover:bg-background"
              >
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">
                  {entry.category}
                </span>
                <h2 className="mt-3 font-display text-lg font-extrabold leading-snug">
                  {entry.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">{entry.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
