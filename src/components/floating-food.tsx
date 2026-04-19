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
  { emoji: "🌶️", top: "10%", left: "6%", size: 34, depth: 1, delay: 0 },
  { emoji: "🧄", top: "70%", left: "10%", size: 36, depth: 1, delay: 2 },
  { emoji: "🫛", top: "40%", left: "20%", size: 32, depth: 1, delay: 4 },
  { emoji: "🍋", top: "86%", left: "24%", size: 30, depth: 1, delay: 3.2 },
  { emoji: "🥥", top: "26%", left: "36%", size: 34, depth: 1, delay: 1.1 },
  { emoji: "🫓", top: "18%", left: "72%", size: 56, depth: 2, delay: 1 },
  { emoji: "🍚", top: "78%", left: "64%", size: 52, depth: 2, delay: 3 },
  { emoji: "🥘", top: "58%", left: "86%", size: 58, depth: 2, delay: 0.5 },
  { emoji: "🍅", top: "46%", left: "58%", size: 54, depth: 2, delay: 2.2 },
  { emoji: "🥣", top: "88%", left: "76%", size: 52, depth: 2, delay: 4.6 },
  { emoji: "🧈", top: "8%", left: "60%", size: 48, depth: 2, delay: 3.4 },
  { emoji: "🌿", top: "8%", left: "44%", size: 74, depth: 3, delay: 2.5 },
  { emoji: "🧅", top: "82%", left: "38%", size: 70, depth: 3, delay: 1.5 },
  { emoji: "🍲", top: "30%", left: "92%", size: 68, depth: 3, delay: 3.8 },
  { emoji: "🫑", top: "62%", left: "50%", size: 66, depth: 3, delay: 0.3 },
];

type Props = {
  items?: Item[];
  parallax?: boolean;
  magnetic?: boolean;
};

export function FloatingFood({
  items = DEFAULT_ITEMS,
  parallax = true,
  magnetic = true,
}: Props) {
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

  useEffect(() => {
    if (!magnetic) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = Array.from(
      el.querySelectorAll<HTMLSpanElement>("[data-magnet]")
    );
    const depths = nodes.map((n) => Number(n.dataset.depth ?? 2));
    let centers: Array<{ x: number; y: number }> = [];

    const recalc = () => {
      centers = nodes.map((n) => {
        const r = n.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      });
    };
    recalc();

    let mx = 0;
    let my = 0;
    let ticking = false;
    const R = 200;

    const apply = () => {
      ticking = false;
      for (let i = 0; i < nodes.length; i++) {
        const c = centers[i];
        const dx = mx - c.x;
        const dy = my - c.y;
        const dist = Math.hypot(dx, dy);
        if (dist < R) {
          const pull = (1 - dist / R) * (14 + depths[i] * 6);
          const ox = (dx / (dist || 1)) * pull;
          const oy = (dy / (dist || 1)) * pull;
          nodes[i].style.setProperty("--mx", `${ox.toFixed(1)}px`);
          nodes[i].style.setProperty("--my", `${oy.toFixed(1)}px`);
        } else {
          nodes[i].style.setProperty("--mx", "0px");
          nodes[i].style.setProperty("--my", "0px");
        }
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx = e.clientX;
      my = e.clientY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };

    const onRecalc = () => {
      recalc();
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onRecalc, { passive: true });
    window.addEventListener("resize", onRecalc);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onRecalc);
      window.removeEventListener("resize", onRecalc);
    };
  }, [magnetic]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {items.map((f, i) => {
        const opacity = 0.22 + f.depth * 0.14;
        return (
          <span
            key={i}
            className="absolute"
            style={{ top: f.top, left: f.left }}
          >
            <span
              className="food-parallax inline-block"
              style={{ ["--parallax" as string]: `${f.depth * 0.09}` }}
            >
              <span
                data-magnet
                data-depth={f.depth}
                className="food-magnet inline-block"
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
            </span>
          </span>
        );
      })}
    </div>
  );
}
