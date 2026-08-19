export { default } from "@/app/privacy/page";

import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Swift Doc",
  description: "Read how Swift Doc handles personal information connected to document preparation and statutory filing services.",
  path: "/privacy-policy",
});
