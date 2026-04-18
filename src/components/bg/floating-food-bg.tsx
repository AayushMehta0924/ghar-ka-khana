"use client";

import { useEffect, useRef } from "react";

const items = [
  { emoji: "🍛", top: "8%", left: "6%", size: 48, speed: 0.15 },
  { emoji: "🫓", top: "22%", left: "88%", size: 56, speed: 0.25 },
  { emoji: "🥘", top: "55%", left: "4%", size: 52, speed: 0.1 },
  { emoji: "🍚", top: "72%", left: "92%", size: 44, speed: 0.3 },
  { emoji: "🌶️", top: "38%", left: "50%", size: 36, speed: 0.2 },
  { emoji: "🧄", top: "88%", left: "42%", size: 40, speed: 0.12 },
];

export function FloatingFoodBg({ className = "" }: { className?: string }) {
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
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {items.map((it, i) => (
        <span
          key={i}
          className="absolute select-none"
          style={{
            top: it.top,
            left: it.left,
            transform: `translateY(calc(var(--py, 0) * -${it.speed}px))`,
            willChange: "transform",
          }}
        >
          <span
            className="inline-block animate-float"
            style={{
              fontSize: it.size,
              opacity: 0.22,
              filter: "saturate(0.9)",
              animationDelay: `${i * 0.7}s`,
            }}
          >
            {it.emoji}
          </span>
        </span>
      ))}
    </div>
  );
}
