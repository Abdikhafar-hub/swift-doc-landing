"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";

import type { ContentEntry } from "@/lib/content/types";
import { contentPath } from "@/lib/content/types";
import { Reveal } from "@/components/site/motion";

export function ContentDirectory({ entries }: { entries: ContentEntry[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => ["All", ...new Set(entries.map((entry) => entry.category))], [entries]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((entry) => {
      const matchesCategory = category === "All" || entry.category === category;
      const matchesQuery =
        !q ||
        [entry.title, entry.excerpt, entry.category, entry.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, entries, query]);

  return (
    <>
      <div className="grid gap-6 border-b border-hairline pb-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={
                "min-h-11 border px-4 text-xs font-bold uppercase tracking-[0.12em] transition-colors cursor-pointer " +
                (category === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-hairline text-muted-foreground hover:border-foreground/40")
              }
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative">
          <label htmlFor="content-search" className="sr-only">
            Search content
          </label>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id="content-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources"
            maxLength={80}
            className="min-h-11 w-full border border-hairline bg-background pl-11 pr-4 text-sm focus:border-primary focus:outline-none lg:w-72"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((entry, i) => (
          <Reveal key={`${entry.type}-${entry.slug}`} variant="scale-fade" delay={(i % 6) * 60}>
            <Link
              href={contentPath(entry)}
              className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-sand"
            >
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">
                {entry.category}
              </span>
              <h2 className="mt-4 font-display text-xl font-extrabold leading-snug tracking-tight">
                {entry.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {entry.excerpt}
              </p>
              <span className="mt-6 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                {new Date(entry.publishedAt).toLocaleDateString("en-KE", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
                <ArrowUpRight
                  className="size-4 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-12 text-sm text-muted-foreground">No resources match that search.</p>
      ) : null}
    </>
  );
}
