import type { Metadata } from "next";

import { ContentDirectory } from "@/components/content/ContentDirectory";
import { PageHero } from "@/components/site/ui";
import { getContentEntries } from "@/lib/content";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Swift Doc Guides | Kenyan Business & Statutory Filing Guides",
  description:
    "Practical Swift Doc guides for Kenyan business registration, tax compliance, statutory records and filing preparation.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Practical filing guides for Kenyan documents."
        lead="Longer, reusable references for preparing statutory records, business files and compliance documents."
      />
      <section className="shell py-14 lg:py-20">
        <ContentDirectory entries={getContentEntries("guides")} />
      </section>
    </>
  );
}
