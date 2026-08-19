import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";
import type { ContentEntry } from "@/lib/content/types";
import { Reveal } from "@/components/site/motion";

interface BlogSectionProps {
  entries: ContentEntry[];
}

export function BlogSection({ entries }: BlogSectionProps) {
  const displayPosts = entries.slice(0, 4);

  return (
    <section className="relative overflow-hidden border-t border-hairline bg-sand py-20 lg:py-28">
      {/* Background ambient pattern */}
      <div
        className="hairline-grid pointer-events-none absolute inset-0 opacity-30 select-none"
        aria-hidden="true"
      />

      <div className="shell relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal variant="fade-up">
            <div className="flex items-center gap-2">
              <BookOpen className="size-4 text-gold" />
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold">
                Registry Insights & Guides
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#06132F] sm:text-4xl lg:text-[2.65rem]">
              Notes from the registry counter.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              Practical, up-to-date guidance written by our consultants on Kenyan company registration,
              KRA tax compliance, international visas, and embassy procedures.
            </p>
          </Reveal>

          <Reveal variant="fade-left" delay={80}>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-xs border border-gold/60 bg-white px-5 py-2.5 text-xs font-bold text-[#06132F] shadow-xs transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink hover:shadow-md"
            >
              <span>Explore all articles</span>
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* 4-Card Grid (2-column on mobile, 4-column on desktop) */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {displayPosts.map((post, idx) => (
            <Reveal
              key={post.slug}
              variant="scale-fade"
              delay={idx * 75}
              className="flex"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group relative flex w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-card p-4 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
              >
                {/* Top content */}
                <div>
                  {/* Category badge & Reading time */}
                  <div className="flex items-center justify-between gap-1">
                    <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[0.62rem] sm:text-[0.68rem] font-medium text-neutral-400">
                      <Clock className="size-2.5 sm:size-3" />
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 font-serif text-[1.02rem] sm:text-lg font-bold leading-snug tracking-tight text-[#06132F] transition-colors group-hover:text-gold line-clamp-3">
                    {post.title}
                  </h3>

                  {/* Excerpt (hidden on extra small mobile 2-col, visible on sm+) */}
                  <p className="mt-2.5 hidden text-xs leading-relaxed text-neutral-600 sm:line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer CTA & Date */}
                <div className="mt-4 flex items-center justify-between border-t border-hairline pt-3 text-[0.68rem] sm:text-xs">
                  <span className="flex items-center gap-1 text-neutral-400 font-medium">
                    <Calendar className="size-2.5 sm:size-3 hidden sm:inline" />
                    {new Date(post.publishedAt).toLocaleDateString("en-KE", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-gold group-hover:underline">
                    <span>Read</span>
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Bottom Centered Redirection CTA Button */}
        <Reveal variant="fade-up" delay={150} className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xs bg-gold px-8 py-3.5 text-sm font-bold text-ink shadow-sm transition-all duration-300 hover:bg-gold-dark hover:shadow-lg"
          >
            <span>View All Blog Articles & Statutory Guides</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
