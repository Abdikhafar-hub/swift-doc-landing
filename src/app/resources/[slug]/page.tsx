import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentArticlePage } from "@/components/content/ContentArticlePage";
import { getContentEntries, getContentEntry } from "@/lib/content";
import { createMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return getContentEntries("resources").map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentEntry("resources", slug);
  if (!entry) return {};
  return createMetadata({
    title: entry.seoTitle || `${entry.title} | Swift Doc`,
    description: entry.seoDescription || entry.description,
    path: `/resources/${entry.slug}`,
    type: "article",
    publishedTime: entry.publishedAt,
    modifiedTime: entry.updatedAt,
  });
}

export default async function ResourcePost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getContentEntry("resources", slug);
  if (!entry) notFound();
  return <ContentArticlePage entry={entry} section="Resources" basePath="/resources" />;
}
