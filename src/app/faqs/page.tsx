export { default } from "@/app/faq/page";

import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Swift Doc FAQs | Statutory Filing Questions",
  description:
    "Answers to common Swift Doc questions about Kenyan document preparation, statutory fees, requirements and filing follow-up.",
  path: "/faqs",
});
