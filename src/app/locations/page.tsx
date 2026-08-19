import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/site/ui";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Swift Doc Service Locations in Kenya",
  description:
    "Swift Doc is based in Westlands, Nairobi and supports clients across Kenya through official statutory filing channels.",
  path: "/locations",
});

const LOCATIONS = [
  { slug: "kenya", name: "Kenya", note: "National document and statutory filing support." },
  { slug: "nairobi", name: "Nairobi", note: "Swift Doc office location in Westlands, Nairobi." },
];

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Based in Nairobi, serving Kenyan filing needs."
        lead="A controlled location structure for places where Swift Doc has genuine business relevance."
      />
      <section className="shell py-16">
        <div className="grid gap-px bg-hairline md:grid-cols-2">
          {LOCATIONS.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="bg-background p-8 transition-colors hover:bg-sand"
            >
              <h2 className="font-display text-2xl font-extrabold">{location.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{location.note}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
