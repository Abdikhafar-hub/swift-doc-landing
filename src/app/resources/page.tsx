import Link from "next/link";
import type { Metadata } from "next";

import { ContentDirectory } from "@/components/content/ContentDirectory";
import { PageHero } from "@/components/site/ui";
import { getAllContentEntries } from "@/lib/content";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Swift Doc Resources | Articles, Guides and FAQs",
  description:
    "Browse Swift Doc resources for Kenyan statutory filings, service preparation, business compliance and documentation questions.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Articles, guides and answers for better prepared filings."
        lead="A central library for Swift Doc content, organized around the services clients actually request."
      />
      <section className="shell py-14 lg:py-20">
        <div className="mb-8 flex flex-wrap gap-3">
          <Link className="border border-hairline px-4 py-2 text-sm font-bold hover:text-gold" href="/resources/blog">
            Blog
          </Link>
          <Link className="border border-hairline px-4 py-2 text-sm font-bold hover:text-gold" href="/resources/guides">
            Guides
          </Link>
          <Link className="border border-hairline px-4 py-2 text-sm font-bold hover:text-gold" href="/resources/faqs">
            FAQs
          </Link>
        </div>
        <ContentDirectory entries={getAllContentEntries()} />
      </section>
    </>
  );
}
