"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "scale-fade"
  | "clip-up"
  | "clip-right";

export function Reveal({
  children,
  className,
  delay = 0,
  duration,
  variant = "fade-up",
  threshold = 0.08,
  rootMargin = "0px 0px -40px 0px",
  as: Tag = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: RevealVariant;
  threshold?: number;
  rootMargin?: string;
  as?: ElementType;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  const customStyle: CSSProperties = {
    ...style,
    transitionDelay: `${delay}ms`,
    ...(duration ? { "--reveal-duration": `${duration}ms` } : {}),
  } as CSSProperties;

  return (
    <Tag
      ref={ref}
      data-variant={variant}
      data-visible={visible ? "true" : "false"}
      style={customStyle}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

/**
 * Stagger automatically spreads delays among direct children
 */
export function Stagger({
  children,
  className,
  staggerMs = 90,
  initialDelay = 0,
  variant = "fade-up",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
  initialDelay?: number;
  variant?: RevealVariant;
  as?: ElementType;
}) {
  return (
    <Tag className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        // If the child is already a Reveal, pass down calculated delay
        return (
          <Reveal
            key={child.key || index}
            delay={initialDelay + index * staggerMs}
            variant={variant}
          >
            {child}
          </Reveal>
        );
      })}
    </Tag>
  );
}

export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1500;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(value * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-KE")}
      {suffix}
    </span>
  );
}
