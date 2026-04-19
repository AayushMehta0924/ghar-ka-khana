"use client";

import { useEffect, useRef } from "react";

const FLOATS = [
  // depth 1 — far, small, slow, faded
  { emoji: "🌶️", top: "14%", left: "8%", size: 32, depth: 1, delay: 0 },
  { emoji: "🧄", top: "70%", left: "12%", size: 34, depth: 1, delay: 2 },
  { emoji: "🫛", top: "40%", left: "22%", size: 30, depth: 1, delay: 4 },
  // depth 2 — mid
  { emoji: "🫓", top: "20%", left: "72%", size: 54, depth: 2, delay: 1 },
  { emoji: "🍚", top: "78%", left: "64%", size: 50, depth: 2, delay: 3 },
  { emoji: "🥘", top: "58%", left: "86%", size: 56, depth: 2, delay: 0.5 },
  // depth 3 — near, large, fast, more visible
  { emoji: "🌿", top: "8%", left: "44%", size: 72, depth: 3, delay: 2.5 },
  { emoji: "🧅", top: "84%", left: "38%", size: 68, depth: 3, delay: 1.5 },
];

const STEAM_PLUMES = [
  { left: "58%", bottom: "35%", size: 180, delay: 0, duration: 7 },
  { left: "64%", bottom: "30%", size: 140, delay: 2.3, duration: 8 },
  { left: "52%", bottom: "38%", size: 160, delay: 4.1, duration: 9 },
  { left: "70%", bottom: "28%", size: 120, delay: 1.6, duration: 6.5 },
];

export function HeroAtmosphere() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Parallax food drift */}
      {FLOATS.map((f, i) => {
        const parallax = f.depth * 0.08;
        const opacity = 0.18 + f.depth * 0.12;
        return (
          <span
            key={i}
            className="absolute select-none"
            style={{
              top: f.top,
              left: f.left,
              transform: `translateY(calc(var(--py, 0) * -${parallax}px))`,
              willChange: "transform",
            }}
          >
            <span
              className="inline-block hero-float"
              style={{
                fontSize: f.size,
                opacity,
                filter: `saturate(${0.7 + f.depth * 0.15}) blur(${
                  f.depth === 1 ? 0.8 : 0
                }px)`,
                animationDelay: `${f.delay}s`,
                animationDuration: `${7 + f.depth}s`,
              }}
            >
              {f.emoji}
            </span>
          </span>
        );
      })}

      {/* Bold steam plumes rising from thali area */}
      <div className="absolute inset-0">
        {STEAM_PLUMES.map((s, i) => (
          <span
            key={i}
            className="hero-plume"
            style={{
              left: s.left,
              bottom: s.bottom,
              width: s.size,
              height: s.size,
              animationDelay: `-${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
