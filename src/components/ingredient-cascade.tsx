"use client";

import { useEffect, useRef } from "react";

const PALETTE = [
  { color: "#e87722", weight: 3 }, // saffron
  { color: "#f2a81d", weight: 4 }, // turmeric
  { color: "#b8431e", weight: 2 }, // chili
  { color: "#2e5d3a", weight: 2 }, // coriander leaf
  { color: "#6d4423", weight: 2 }, // cumin
  { color: "#d3681a", weight: 1 }, // deep saffron
];

type P = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  phase: number;
  wobble: number;
  spin: number;
  angle: number;
};

type Props = {
  className?: string;
  density?: number;
  speed?: number;
};

export function IngredientCascade({
  className = "",
  density = 0.00018,
  speed = 1,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: P[] = [];
    let width = 0;
    let height = 0;
    let running = true;
    let rafId = 0;

    const pickColor = () => {
      const total = PALETTE.reduce((s, p) => s + p.weight, 0);
      let r = Math.random() * total;
      for (const p of PALETTE) {
        r -= p.weight;
        if (r <= 0) return p.color;
      }
      return PALETTE[0].color;
    };

    const makeParticle = (fromTop: boolean): P => ({
      x: Math.random() * width,
      y: fromTop ? -20 - Math.random() * height * 0.3 : Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: 0.3 + Math.random() * 0.8,
      r: 1.5 + Math.random() * 2.5,
      color: pickColor(),
      phase: Math.random() * Math.PI * 2,
      wobble: 0.4 + Math.random() * 0.8,
      spin: (Math.random() - 0.5) * 0.04,
      angle: Math.random() * Math.PI * 2,
    });

    const seed = () => {
      const count = Math.max(40, Math.floor(width * height * density));
      particles = Array.from({ length: count }, () => makeParticle(false));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = (t: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.phase += 0.015 * speed;
        p.angle += p.spin * speed;
        p.x += (p.vx + Math.sin(p.phase) * p.wobble * 0.3) * speed;
        p.y += p.vy * speed;

        if (p.y > height + 10 || p.x < -20 || p.x > width + 20) {
          Object.assign(p, makeParticle(true));
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = 0.65;
        ctx.fillStyle = p.color;
        // elongated seed-like shape for variety
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r * 1.2, p.r * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      void t;
      rafId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    rafId = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [density, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
