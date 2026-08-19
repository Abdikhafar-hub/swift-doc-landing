export type ContentType = "blog" | "guides" | "resources";

export type ContentEntry = {
  type: ContentType;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt?: string;
  reviewedAt?: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  canonicalUrl?: string;
  readingTime: string;
  relatedServices: string[];
  relatedArticles: string[];
  draft: boolean;
  seoTitle?: string;
  seoDescription?: string;
  body: string;
};

export function contentPath(entry: Pick<ContentEntry, "type" | "slug">) {
  return `/${entry.type}/${entry.slug}`;
}
