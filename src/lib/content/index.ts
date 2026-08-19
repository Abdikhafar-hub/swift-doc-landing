import fs from "node:fs";
import path from "node:path";

import { SERVICES } from "@/data/site";
import type { ContentEntry, ContentType } from "./types";

const CONTENT_ROOT = path.join(process.cwd(), "content");

function parseList(value = "") {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return { data: {} as Record<string, string>, body: raw };
  }

  const data: Record<string, string> = {};
  const frontmatter = match[1] || "";
  const markdown = match[2] || "";
  for (const line of frontmatter.split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = value;
  }

  return { data, body: markdown.trim() };
}

function readEntries(type: ContentType): ContentEntry[] {
  const dir = path.join(CONTENT_ROOT, type);
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, body } = parseFrontmatter(raw);
      const slug = data["slug"] || file.replace(/\.md$/, "");
      const entry: ContentEntry = {
        type,
        slug,
        title: data["title"] || slug,
        description: data["description"] || data["excerpt"] || "",
        excerpt: data["excerpt"] || data["description"] || "",
        author: data["author"] || "Swift Doc Editorial Desk",
        authorRole: data["authorRole"] || "Documentation consultants",
        publishedAt: data["publishedAt"] || "2026-08-14",
        category: data["category"] || "General",
        tags: parseList(data["tags"]),
        readingTime: data["readingTime"] || estimateReadingTime(body),
        relatedServices: parseList(data["relatedServices"]).filter((relatedSlug) =>
          SERVICES.some((service) => service.slug === relatedSlug),
        ),
        relatedArticles: parseList(data["relatedArticles"]),
        draft: data["draft"] === "true",
        body,
      };
      if (data["updatedAt"]) entry.updatedAt = data["updatedAt"];
      if (data["reviewedAt"]) entry.reviewedAt = data["reviewedAt"];
      if (data["featuredImage"]) entry.featuredImage = data["featuredImage"];
      if (data["canonicalUrl"]) entry.canonicalUrl = data["canonicalUrl"];
      if (data["seoTitle"]) entry.seoTitle = data["seoTitle"];
      if (data["seoDescription"]) entry.seoDescription = data["seoDescription"];
      return {
        ...entry,
      };
    })
    .filter((entry) => !entry.draft)
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

function estimateReadingTime(body: string) {
  const words = body.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

export function getContentEntries(type: ContentType) {
  return readEntries(type);
}

export function getAllContentEntries() {
  return (["blog", "guides", "resources"] as const).flatMap((type) => getContentEntries(type));
}

export function getContentEntry(type: ContentType, slug: string) {
  return getContentEntries(type).find((entry) => entry.slug === slug);
}

export function getRelatedContent(entry: ContentEntry, limit = 3) {
  const pool = getAllContentEntries().filter((item) => item.slug !== entry.slug);
  const preferred = pool.filter(
    (item) =>
      entry.relatedArticles.includes(item.slug) ||
      item.relatedServices.some((slug) => entry.relatedServices.includes(slug)) ||
      item.category === entry.category,
  );
  return [...preferred, ...pool.filter((item) => !preferred.includes(item))].slice(0, limit);
}
