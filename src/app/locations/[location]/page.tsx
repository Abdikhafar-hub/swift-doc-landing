import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero, PrimaryLink } from "@/components/site/ui";
import { COMPANY, SERVICES } from "@/data/site";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

const LOCATIONS = {
  kenya: {
    name: "Kenya",
    title: "Statutory Document Services Across Kenya",
    description:
      "Swift Doc supports clients preparing business, tax, civil, immigration, NTSA and authentication filings across Kenya through the relevant official channels.",
  },
  nairobi: {
    name: "Nairobi",
    title: "Document Services in Nairobi",
    description:
      `Swift Doc is based at ${COMPANY.building} and supports clients who need document preparation, filing follow-up and statutory service guidance in Nairobi.`,
  },
} as const;

export function generateStaticParams() {
  return Object.keys(LOCATIONS).map((location) => ({ location }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const page = LOCATIONS[location as keyof typeof LOCATIONS];
  if (!page) return {};
  return createMetadata({
    title: `${page.title} | Swift Doc`,
    description: page.description,
    path: `/locations/${location}`,
  });
}

export default async function LocationPage({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const page = LOCATIONS[location as keyof typeof LOCATIONS];
  if (!page) notFound();
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: page.name, href: `/locations/${location}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero eyebrow="Location" title={page.title} lead={page.description} />
      <section className="shell py-16">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <h2 className="font-display text-2xl font-extrabold">Services clients request</h2>
            <div className="mt-6 grid gap-px bg-hairline sm:grid-cols-2">
              {SERVICES.slice(0, 6).map((service) => (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-background p-6 transition-colors hover:bg-sand"
                >
                  <h3 className="font-display text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.short}</p>
                </a>
              ))}
            </div>
          </div>
          <aside className="border border-hairline bg-sand p-7">
            <h2 className="font-display text-xl font-extrabold">Talk to Swift Doc</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Confirm what can be prepared remotely and what requires physical document handling.
            </p>
            <PrimaryLink href="/contact" className="mt-6">
              Contact the desk
            </PrimaryLink>
          </aside>
        </div>
      </section>
    </>
  );
}
