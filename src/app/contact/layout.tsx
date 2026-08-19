import type { Metadata } from "next";

import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Swift Doc | Start a Statutory Filing Request",
  description:
    "Contact Swift Doc in Westlands, Nairobi for Kenyan document preparation, statutory filing support and service quotations.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
