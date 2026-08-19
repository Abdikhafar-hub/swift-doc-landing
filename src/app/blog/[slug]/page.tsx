import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentArticlePage } from "@/components/content/ContentArticlePage";
import { getContentEntries, getContentEntry } from "@/lib/content";
import { createMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return getContentEntries("blog").map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentEntry("blog", slug);
  if (!entry) return {};
  return createMetadata({
    title: entry.seoTitle || `${entry.title} | Swift Doc`,
    description: entry.seoDescription || entry.description,
    path: `/blog/${entry.slug}`,
    type: "article",
    publishedTime: entry.publishedAt,
    modifiedTime: entry.updatedAt,
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getContentEntry("blog", slug);
  if (!entry) notFound();
  return <ContentArticlePage entry={entry} section="Blog" basePath="/blog" />;
}
