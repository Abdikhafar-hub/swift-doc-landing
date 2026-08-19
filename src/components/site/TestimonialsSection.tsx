"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star, CheckCircle2, Quote, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";
import clientImg from "@/assets/client-business.jpg";
import { Reveal } from "@/components/site/motion";

const EXTENDED_TESTIMONIALS = [
  ...TESTIMONIALS,
  {
    quote:
      "Handling consular legalisation and commercial documents between Nairobi and the UAE embassy used to be a bureaucratic maze. Swift Doc processed the full chain in 5 working days.",
    name: "Faruq Al-Mansoor",
    role: "Regional Director, Gulf Africa Traders",
    service: "Consular Legalisation & Visas",
  },
  {
    quote:
      "Registering our non-profit trust and obtaining our tax exemption certificate required precision across multiple ministries. Swift Doc handled every registry query effortlessly.",
    name: "Dr. Grace Mutua",
    role: "Lead Trustee, Rift Valley Healthcare Initiative",
    service: "NGO & Trust Registration",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 28,
    align: "center",
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [isPaused, setIsPaused] = React.useState(false);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay with pause on hover/focus
  React.useEffect(() => {
    if (!emblaApi || isPaused) return;

    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 6500);

    return () => clearInterval(timer);
  }, [emblaApi, isPaused]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <section className="relative overflow-hidden border-t border-hairline bg-[#FAF8F5] py-20 lg:py-28">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-60"
        aria-hidden="true"
      />

      <div className="shell relative z-10">
        {/* CENTERED SECTION HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal variant="fade-down">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-gold" aria-hidden="true" />
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-gold">
                Client Outcomes
              </span>
              <span className="h-[1.5px] w-5 bg-gold" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={60}>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#06132F] sm:text-4xl lg:text-[2.75rem] leading-[1.15]">
              Work that ends with a certificate in someone&apos;s hands.
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={100}>
            <p className="mt-3.5 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Real feedback from business founders, legal directors, and applicants who trusted
              our team with their Kenyan statutory filings and international travel documentation.
            </p>
          </Reveal>
        </div>

        {/* REDESIGNED CENTERED CARD COMBINING THE PORTRAIT PHOTO & TESTIMONIAL CAROUSEL */}
        <Reveal variant="fade-up" delay={140} className="mx-auto mt-12 max-w-4xl lg:max-w-5xl">
          <div
            className="overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200/90 bg-white shadow-md transition-all duration-300 hover:shadow-xl grid grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[320px_minmax(0,1fr)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            {/* LEFT / TOP: Entrepreneur holding Certificate photograph */}
            <div className="relative min-h-[240px] sm:min-h-[280px] md:min-h-full bg-neutral-100 overflow-hidden">
              <img
                src={clientImg.src}
                alt="A Kenyan business owner holding her framed business registration certificate"
                loading="lazy"
                width={1200}
                height={1350}
                className="h-full w-full object-cover object-top md:object-center transition-transform duration-700 hover:scale-103"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden"
                aria-hidden="true"
              />
              <div className="absolute bottom-3 left-3 z-10 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[0.68rem] font-semibold text-white backdrop-blur-xs md:hidden">
                Issued Certificate
              </div>
            </div>

            {/* RIGHT: Testimonial Carousel & Details (with min-w-0 to prevent any overflow/clipping) */}
            <div className="min-w-0 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
              {/* Embla Viewport */}
              <div ref={emblaRef} className="min-w-0 overflow-hidden">
                <div className="flex">
                  {EXTENDED_TESTIMONIALS.map((t, idx) => (
                    <div
                      key={idx}
                      className="min-w-0 shrink-0 grow-0 basis-full pr-1"
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Testimonial ${idx + 1} of ${EXTENDED_TESTIMONIALS.length}`}
                    >
                      {/* Top Row: 5-Star Rating & Verified Badge */}
                      <div className="flex items-center justify-between gap-3 border-b border-neutral-100 pb-4">
                        <div className="flex items-center gap-1 text-gold">
                          {[...Array(5)].map((_, starIdx) => (
                            <Star
                              key={starIdx}
                              className="size-3.5 sm:size-4 fill-gold text-gold"
                              aria-hidden="true"
                            />
                          ))}
                          <span className="ml-1 text-xs font-bold text-[#06132F]">5.0</span>
                        </div>

                        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/20 bg-emerald-50 px-2.5 py-0.5 text-[0.65rem] sm:text-[0.68rem] font-semibold text-emerald-700">
                          <CheckCircle2 className="size-3 text-emerald-600" />
                          <span>Verified Client</span>
                        </div>
                      </div>

                      {/* Testimonial Quote */}
                      <div className="relative mt-5">
                        <Quote className="absolute -left-1 -top-2 size-7 rotate-180 text-gold/15" />
                        <blockquote className="relative z-10 font-serif text-[1rem] sm:text-[1.08rem] lg:text-[1.15rem] font-medium leading-relaxed text-[#1F2937]">
                          &ldquo;{t.quote}&rdquo;
                        </blockquote>
                      </div>

                      {/* Author Meta */}
                      <footer className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-neutral-100 pt-4">
                        <div>
                          <p className="font-serif text-sm sm:text-base font-bold text-[#06132F]">
                            {t.name}
                          </p>
                          <p className="text-[0.72rem] sm:text-xs text-neutral-500">{t.role}</p>
                        </div>

                        <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[0.68rem] font-bold text-gold">
                          {t.service}
                        </div>
                      </footer>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTROLS (Previous, Dots, Next) */}
              <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={scrollPrev}
                  aria-label="Previous testimonial"
                  className="flex size-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-xs transition-all duration-200 hover:border-gold hover:bg-gold hover:text-ink active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="size-4 stroke-[2]" />
                </button>

                {/* Pagination Dots */}
                <div className="flex items-center gap-1.5">
                  {scrollSnaps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => scrollTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === selectedIndex
                          ? "w-6 bg-gold"
                          : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={scrollNext}
                  aria-label="Next testimonial"
                  className="flex size-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-xs transition-all duration-200 hover:border-gold hover:bg-gold hover:text-ink active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="size-4 stroke-[2]" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* TRUST BADGES STRIP */}
        <Reveal variant="fade-up" delay={200} className="mx-auto mt-10 max-w-xl">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-neutral-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-gold" />
              <span className="font-semibold text-neutral-700">98% First-Submission Pass</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-600" />
              <span className="font-semibold text-neutral-700">42,000+ Filings Handled</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="size-4 fill-gold text-gold" />
              <span className="font-semibold text-neutral-700">Top-Rated Registry Desk</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
