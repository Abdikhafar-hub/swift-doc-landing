import Link from "next/link";

import type { BreadcrumbItem } from "@/lib/seo/schema";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-semibold text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {isLast ? (
                <span className="text-foreground">{item.name}</span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-gold">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
