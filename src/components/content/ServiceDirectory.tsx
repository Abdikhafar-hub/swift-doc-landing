"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";

import type { ServiceCategory } from "@/data/site";
import { Reveal } from "@/components/site/motion";

export function ServiceDirectory({ services }: { services: ServiceCategory[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return services;
    return services.filter((service) =>
      [service.title, service.short, service.summary, service.authority, service.items.map((i) => i.name).join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query, services]);

  return (
    <>
      <div className="mt-8 grid gap-4 border-b border-hairline pb-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Browse by practice area. Each page explains who the filing is for, common requirements,
          what Swift Doc prepares, and which authority is involved.
        </p>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            aria-label="Search services"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search services"
            className="min-h-11 w-full border border-hairline bg-background pl-11 pr-4 text-sm lg:w-72"
          />
        </div>
      </div>
      <div className="grid gap-px bg-hairline">
        {filtered.map((s, i) => (
          <Reveal
            key={s.slug}
            delay={i * 50}
            className="bg-background p-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10 lg:p-10"
          >
            <span className="font-display text-xs font-bold text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="mt-4 lg:mt-0">
              <h2 className="font-display text-2xl font-extrabold tracking-tight">
                <Link href={`/services/${s.slug}`} className="transition-colors hover:text-gold">
                  {s.title}
                </Link>
              </h2>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {s.authority}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                {s.summary}
              </p>
              <Link
                href={`/services/${s.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold"
              >
                Open practice area
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-7 grid gap-x-8 gap-y-2 border-t border-hairline pt-6 sm:grid-cols-2 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {s.items.map((item) => (
                <li key={item.name} className="text-sm">
                  <span className="font-semibold">{item.name}</span>
                  <span className="block text-xs text-muted-foreground">{item.turnaround}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </>
  );
}
