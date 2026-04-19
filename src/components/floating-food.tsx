"use client";

import { useEffect, useRef } from "react";

type Item = {
  emoji: string;
  top: string;
  left: string;
  size: number;
  depth: 1 | 2 | 3;
  delay: number;
};

const DEFAULT_ITEMS: Item[] = [
  // depth 1 — far, small, muted
  { emoji: "🌶️", top: "10%", left: "6%", size: 34, depth: 1, delay: 0 },
  { emoji: "🧄", top: "70%", left: "10%", size: 36, depth: 1, delay: 2 },
  { emoji: "🫛", top: "40%", left: "20%", size: 32, depth: 1, delay: 4 },
  { emoji: "🍋", top: "86%", left: "24%", size: 30, depth: 1, delay: 3.2 },
  { emoji: "🥥", top: "26%", left: "36%", size: 34, depth: 1, delay: 1.1 },
  // depth 2 — mid
  { emoji: "🫓", top: "18%", left: "72%", size: 56, depth: 2, delay: 1 },
  { emoji: "🍚", top: "78%", left: "64%", size: 52, depth: 2, delay: 3 },
  { emoji: "🥘", top: "58%", left: "86%", size: 58, depth: 2, delay: 0.5 },
  { emoji: "🍅", top: "46%", left: "58%", size: 54, depth: 2, delay: 2.2 },
  { emoji: "🥣", top: "88%", left: "76%", size: 52, depth: 2, delay: 4.6 },
  { emoji: "🧈", top: "8%", left: "60%", size: 48, depth: 2, delay: 3.4 },
  // depth 3 — near, big, vivid
  { emoji: "🌿", top: "8%", left: "44%", size: 74, depth: 3, delay: 2.5 },
  { emoji: "🧅", top: "82%", left: "38%", size: 70, depth: 3, delay: 1.5 },
  { emoji: "🍲", top: "30%", left: "92%", size: 68, depth: 3, delay: 3.8 },
  { emoji: "🫑", top: "62%", left: "50%", size: 66, depth: 3, delay: 0.3 },
];

type Props = {
  items?: Item[];
  parallax?: boolean;
};

export function FloatingFood({ items = DEFAULT_ITEMS, parallax = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parallax) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        el.style.setProperty("--py", `${window.scrollY}`);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [parallax]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {items.map((f, i) => {
        const parallaxAmt = f.depth * 0.09;
        const opacity = 0.22 + f.depth * 0.14;
        return (
          <span
            key={i}
            className="absolute select-none"
            style={{
              top: f.top,
              left: f.left,
              transform: `translateY(calc(var(--py, 0) * -${parallaxAmt}px))`,
              willChange: "transform",
            }}
          >
            <span
              className="inline-block hero-float"
              style={{
                fontSize: f.size,
                opacity,
                filter: `saturate(${0.75 + f.depth * 0.15}) blur(${
                  f.depth === 1 ? 0.8 : 0
                }px)`,
                animationDelay: `${f.delay}s`,
                animationDuration: `${5 + f.depth}s`,
              }}
            >
              {f.emoji}
            </span>
          </span>
        );
      })}
    </div>
  );
}
