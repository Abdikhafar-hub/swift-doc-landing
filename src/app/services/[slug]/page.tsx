import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/data/site";
import { PrimaryLink, WhatsAppButton } from "@/components/site/ui";
import { Reveal } from "@/components/site/motion";
import registryDeskImg from "@/assets/registry-desk.png";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getContentEntries } from "@/lib/content";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema";
import { getRelatedServicePages, getServicePage, getServicePages } from "@/lib/service-pages";

export function generateStaticParams() {
  return getServicePages().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};

  return createMetadata({
    title: `${page.title} | Swift Doc`,
    description: `${page.service.summary} Learn requirements, process, common mistakes and how Swift Doc prepares this filing.`,
    path: `/services/${page.slug}`,
  });
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) {
    notFound();
  }
  const { service, item } = page;
  const visibleItems = item ? [item] : service.items;
  const others = getRelatedServicePages(page.slug);
  const relatedContent = getContentEntries("blog")
    .concat(getContentEntries("guides"))
    .filter((entry) => entry.relatedServices.includes(service.slug))
    .slice(0, 3);
  const faqs = [
    {
      q: `Who is ${page.title} for?`,
      a: service.audience,
    },
    {
      q: "What documents are commonly required?",
      a: service.requirements.join("; "),
    },
    {
      q: "Is Swift Doc a government agency?",
      a: "No. Swift Doc is a private documentation firm that prepares, lodges and follows up filings through the relevant official channels.",
    },
  ];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: page.title, href: `/services/${page.slug}` },
  ];

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(faqs)} />
      <section className="relative overflow-hidden border-b border-hairline bg-ink text-ink-foreground">
        <img
          src={registryDeskImg.src}
          alt=""
          aria-hidden="true"
          width={1408}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div className="shell relative py-16 lg:py-24">
          <div className="[&_span]:text-ink-foreground/70 [&_a]:text-ink-foreground/60">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <Reveal variant="fade-up">
              <p className="rule-label text-ink-foreground/50">{service.authority}</p>
              <h1 className="display-xl mt-6 text-ink-foreground">{page.title}</h1>
            </Reveal>
            <Reveal variant="fade-up" delay={80}>
              <p className="text-[0.98rem] leading-relaxed text-ink-foreground/70">
              {item?.detail || service.summary}
              </p>
            </Reveal>
          </div>

          <Reveal variant="fade-up" delay={120}>
            <p className="mt-10 border-t border-ink-foreground/15 pt-6 text-sm text-ink-foreground/60">
              <span className="font-bold text-ink-foreground">Who this is for: </span>
              {service.audience}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div>
            <Reveal variant="fade-down">
              <p className="rule-label">What this service involves</p>
            </Reveal>
            <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
              {visibleItems.map((serviceItem, i) => (
                <Reveal as="li" key={serviceItem.name} variant="fade-up" delay={i * 60} className="py-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="font-display text-xl font-extrabold tracking-tight">
                      {serviceItem.name}
                    </h2>
                    <span className="border border-hairline px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                      {serviceItem.turnaround}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {serviceItem.detail}
                  </p>
                </Reveal>
              ))}
            </ul>

            <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2">
              <section className="bg-background p-7">
                <h2 className="font-display text-xl font-extrabold">Process</h2>
                <ol className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>1. Confirm the filing type and current authority requirements.</li>
                  <li>2. Review client documents and flag gaps before submission.</li>
                  <li>3. Prepare and lodge the file through the relevant official channel.</li>
                  <li>4. Track requests, corrections and collection or delivery steps.</li>
                </ol>
              </section>
              <section className="bg-background p-7">
                <h2 className="font-display text-xl font-extrabold">Common mistakes</h2>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>Submitting names or IDs that do not match supporting records.</li>
                  <li>Starting a filing before the ownership or contact details are final.</li>
                  <li>Assuming old requirements, fees or portal rules still apply.</li>
                  <li>Waiting until a tender, bank or travel deadline is already close.</li>
                </ul>
              </section>
            </div>

            <section className="mt-12">
              <p className="rule-label">Common questions</p>
              <div className="mt-6 divide-y divide-hairline border-y border-hairline">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="cursor-pointer list-none font-display text-lg font-bold marker:hidden">
                      {faq.q}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <Reveal variant="fade-left" delay={100}>
              <div className="border border-hairline bg-sand p-7">
                <p className="rule-label">What to bring</p>
                <ul className="mt-6 space-y-3">
                  {service.requirements.map((r) => (
                    <li key={r} className="flex gap-3 text-sm leading-relaxed">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-emerald-brand"
                        aria-hidden="true"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-hairline pt-5 text-xs leading-relaxed text-muted-foreground">
                  Requirements change. We confirm the current list against the authority before you
                  gather anything.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <PrimaryLink href="/contact" className="w-full justify-center">
                  Request a quotation
                </PrimaryLink>
                <WhatsAppButton className="w-full justify-center" />
                <a
                  href={COMPANY.phoneHref}
                  className="flex min-h-12 items-center justify-center border border-hairline px-6 text-sm font-bold transition-colors hover:border-gold hover:text-gold"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="border-t border-hairline bg-sand">
        <div className="shell py-16 lg:py-20">
          <Reveal variant="fade-up">
            <p className="rule-label">Related practice areas</p>
          </Reveal>
          <div className="mt-8 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o, i) => (
              <Reveal key={o.slug} variant="scale-fade" delay={i * 80}>
                <Link
                  href={`/services/${o.slug}`}
                  className="group flex h-full flex-col justify-between bg-sand p-7 transition-colors hover:bg-background"
                >
                  <div>
                    <h3 className="font-display text-lg font-extrabold tracking-tight">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{o.service.short}</p>
                  </div>
                  <ArrowUpRight
                    className="mt-5 size-4 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
          {relatedContent.length > 0 ? (
            <div className="mt-12">
              <p className="rule-label">Related resources</p>
              <div className="mt-8 grid gap-px bg-hairline md:grid-cols-3">
                {relatedContent.map((entry) => (
                  <Link
                    key={`${entry.type}-${entry.slug}`}
                    href={`/${entry.type}/${entry.slug}`}
                    className="bg-sand p-7 transition-colors hover:bg-background"
                  >
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">
                      {entry.category}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-extrabold leading-snug">
                      {entry.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
