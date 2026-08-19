import type { Metadata } from "next";

import { COMPANY } from "@/data/site";
import { canonicalUrl, ogImageUrl, SITE_URL } from "@/lib/seo/canonical";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  publishedTime?: string | undefined;
  modifiedTime?: string | undefined;
};

export function createMetadata({
  title,
  description,
  path,
  image = "/favicon.png",
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
}: SeoInput): Metadata {
  const url = canonicalUrl(path);
  const resolvedImage = ogImageUrl(image);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: COMPANY.name,
      type,
      locale: "en_KE",
      images: [
        {
          url: resolvedImage,
          width: 512,
          height: 512,
          alt: `${COMPANY.name} logo`,
        },
      ],
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
