import { getContentEntries } from "@/lib/content";
import { canonicalUrl } from "@/lib/seo/canonical";

export function GET() {
  const items = getContentEntries("blog")
    .map(
      (entry) => `<item>
        <title><![CDATA[${entry.title}]]></title>
        <link>${canonicalUrl(`/blog/${entry.slug}`)}</link>
        <guid>${canonicalUrl(`/blog/${entry.slug}`)}</guid>
        <pubDate>${new Date(entry.publishedAt).toUTCString()}</pubDate>
        <description><![CDATA[${entry.excerpt}]]></description>
      </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Swift Doc Blog</title>
        <link>${canonicalUrl("/blog")}</link>
        <description>Swift Doc articles on Kenyan statutory filing preparation.</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
