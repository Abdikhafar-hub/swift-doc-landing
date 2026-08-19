import type { Metadata } from "next";

import { ContentDirectory } from "@/components/content/ContentDirectory";
import { PageHero } from "@/components/site/ui";
import { getContentEntries } from "@/lib/content";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Swift Doc Blog | Kenyan Statutory Filing Insights",
  description:
    "Practical Swift Doc articles on Kenyan business registration, KRA, compliance, immigration, NTSA and statutory filing preparation.",
  path: "/blog",
});

export default function BlogIndex() {
  const entries = getContentEntries("blog");

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from the registry counter."
        lead="Written for clients preparing Kenyan statutory filings. Educational, practical and linked to the services Swift Doc actually handles."
      />

      <section className="shell py-14 lg:py-20">
        <ContentDirectory entries={entries} />
      </section>
    </>
  );
}
