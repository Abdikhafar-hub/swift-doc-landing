import Link from "next/link";

import { MarkdownArticle } from "@/components/content/MarkdownArticle";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PrimaryLink } from "@/components/site/ui";
import { SERVICES } from "@/data/site";
import { getRelatedContent } from "@/lib/content";
import { contentPath, type ContentEntry } from "@/lib/content/types";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";

export function ContentArticlePage({
  entry,
  section,
  basePath,
}: {
  entry: ContentEntry;
  section: string;
  basePath: string;
}) {
  const related = getRelatedContent(entry, 3);
  const relatedServices = SERVICES.filter((service) => entry.relatedServices.includes(service.slug));
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: section, href: basePath },
    { name: entry.title, href: `${basePath}/${entry.slug}` },
  ];

  return (
    <>
      <JsonLd data={articleSchema(entry, `${basePath}/${entry.slug}`)} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <article>
        <header className="border-b border-hairline bg-sand">
          <div className="shell max-w-3xl py-16 lg:py-24">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="display-lg mt-6">{entry.title}</h1>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {entry.author} ·{" "}
              {new Date(entry.publishedAt).toLocaleDateString("en-KE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · {entry.readingTime}
            </p>
            {entry.reviewedAt ? (
              <p className="mt-2 text-xs text-muted-foreground">
                Reviewed {new Date(entry.reviewedAt).toLocaleDateString("en-KE")}
              </p>
            ) : null}
          </div>
        </header>

        <div className="shell max-w-3xl py-14 lg:py-20">
          <p className="border-l-2 border-gold pl-5 font-display text-lg font-semibold leading-snug">
            {entry.excerpt}
          </p>
          <div className="mt-10">
            <MarkdownArticle body={entry.body} />
          </div>
          {relatedServices.length > 0 ? (
            <div className="mt-12 border-t border-hairline pt-10">
              <h2 className="font-display text-xl font-extrabold">Related services</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="border border-hairline px-4 py-2 text-sm font-bold transition-colors hover:border-gold hover:text-gold"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
          <div className="mt-12 border-t border-hairline pt-10">
            <h2 className="font-display text-xl font-extrabold">Need this handled?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Ask Swift Doc to review the documents or filing path for your matter.
            </p>
            <PrimaryLink href="/contact" className="mt-6">
              Talk to Swift Doc
            </PrimaryLink>
          </div>
        </div>
      </article>

      <section className="border-t border-hairline bg-sand">
        <div className="shell py-16">
          <p className="rule-label">Related reading</p>
          <div className="mt-8 grid gap-px bg-hairline md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={`${item.type}-${item.slug}`}
                href={contentPath(item)}
                className="bg-sand p-7 transition-colors hover:bg-background"
              >
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">
                  {item.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-extrabold leading-snug">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
