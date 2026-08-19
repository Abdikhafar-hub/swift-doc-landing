"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";
import clientImg from "@/assets/client-business.jpg";
import { Reveal } from "@/components/site/motion";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30, // Smooth ~600ms transition
    align: "center",
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [isPaused, setIsPaused] = React.useState(false);

  // Sync active slide index
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

  // Subtle 6-second autoplay with pause on hover/focus
  React.useEffect(() => {
    if (!emblaApi || isPaused) return;

    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

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
    <section className="shell py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 xl:gap-20">
        {/* LEFT COLUMN: Large editorial certificate/customer portrait */}
        <Reveal variant="scale" className="relative">
          <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-hairline bg-card sm:left-auto sm:w-full sm:translate-x-0 sm:rounded-3xl sm:border sm:shadow-lg">
            <img
              src={clientImg.src}
              alt="A Kenyan business owner holding her framed business registration certificate"
              loading="lazy"
              width={1200}
              height={1350}
              className="aspect-4/5 w-full object-cover sm:aspect-1/1 lg:aspect-4/5"
            />
          </div>
        </Reveal>

        {/* RIGHT COLUMN: Eyebrow, Headline, Single Testimonial Carousel */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <Reveal variant="fade-down">
            <p className="rule-label">Client outcomes</p>
          </Reveal>

          {/* Headline */}
          <Reveal variant="fade-up" delay={60}>
            <h2 className="mt-5 font-serif text-3xl font-bold leading-[1.12] tracking-tight text-[#06132F] sm:text-4xl lg:text-[3.25rem]">
              Work that ends
              <br />
              with a certificate in
              <br />
              someone's hands.
            </h2>
          </Reveal>

          {/* TESTIMONIAL CAROUSEL CONTAINER */}
          <Reveal variant="fade-left" delay={120}>
            <div
              className="mt-9 sm:mt-10"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
            >
              {/* Embla Viewport */}
              <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                  {TESTIMONIALS.map((t, idx) => (
                    <div
                      key={idx}
                      className="min-w-0 shrink-0 grow-0 basis-full"
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Testimonial ${idx + 1} of ${TESTIMONIALS.length}`}
                    >
                      <div className="rounded-2xl border border-neutral-200/90 bg-[#FAF9F6] p-7 sm:p-9 md:p-10 shadow-xs transition-all duration-300">
                        {/* Swift Doc Gold Elegant Quotation Mark */}
                        <div
                          className="select-none text-3xl font-bold leading-none text-[#DFA500] sm:text-4xl"
                          aria-hidden="true"
                        >
                          <svg
                            className="size-7 fill-[#DFA500] text-[#DFA500] sm:size-8"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>

                        {/* Testimonial Quote */}
                        <blockquote className="mt-5 text-base font-normal leading-relaxed text-[#1F2937] sm:text-lg lg:text-[1.125rem]">
                          "{t.quote}"
                        </blockquote>

                        {/* Author Meta */}
                        <footer className="mt-7 border-t border-neutral-200/60 pt-5">
                          <p className="font-bold text-base text-[#06132F]">{t.name}</p>
                          <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
                            {t.role} · <span className="text-[#06132F]/70">{t.service}</span>
                          </p>
                        </footer>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CAROUSEL CONTROLS */}
              <div className="mt-6 flex items-center justify-between px-2 sm:mt-7 sm:px-3">
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={scrollPrev}
                  aria-label="Previous testimonial"
                  className="flex size-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-xs transition-all duration-200 hover:border-[#DFA500] hover:bg-[#DFA500]/10 hover:text-[#06132F] active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="size-5 stroke-[2]" />
                </button>

                {/* Pagination Dots */}
                <div className="flex items-center gap-2.5">
                  {scrollSnaps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => scrollTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`size-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === selectedIndex
                          ? "w-6 bg-[#DFA500]"
                          : "bg-neutral-300 hover:bg-neutral-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={scrollNext}
                  aria-label="Next testimonial"
                  className="flex size-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-xs transition-all duration-200 hover:border-[#DFA500] hover:bg-[#DFA500]/10 hover:text-[#06132F] active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="size-5 stroke-[2]" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
