"use client";

import { useEffect, useRef } from "react";

const SPICES = [
  "#e87722", // saffron
  "#f2a81d", // turmeric
  "#b8431e", // chili
  "#d3681a", // deep saffron
  "#6d4423", // cumin
  "#2e5d3a", // coriander (rare)
];

type P = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
  rot: number;
  vrot: number;
};

export function SpiceTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const MAX = isTouch ? 120 : 260;
    const particles: P[] = [];

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX) particles.shift();
        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.6,
          vy: 0.2 + Math.random() * 1.3,
          life: 1,
          color: SPICES[Math.floor(Math.random() * SPICES.length)],
          size: 1.5 + Math.random() * 2.6,
          rot: Math.random() * Math.PI * 2,
          vrot: (Math.random() - 0.5) * 0.12,
        });
      }
    };

    let lastX = 0;
    let lastY = 0;
    let lastT = 0;

    const emitAt = (x: number, y: number) => {
      const now = performance.now();
      if (now - lastT < 16) return;
      const dist = Math.hypot(x - lastX, y - lastY);
      const count = Math.min(3, Math.max(1, Math.ceil(dist / 14)));
      spawn(x, y, count);
      lastX = x;
      lastY = y;
      lastT = now;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse") emitAt(e.clientX, e.clientY);
    };
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) spawn(t.clientX, t.clientY, 8);
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) emitAt(t.clientX, t.clientY);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    let rafId = 0;
    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.vx *= 0.98;
        p.rot += p.vrot;
        p.life -= 0.012;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.min(1, p.life * 1.1) * 0.85;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 1.2, p.size * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}
