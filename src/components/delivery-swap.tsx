"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function DeliverySwap() {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setPlay(entry.isIntersecting);
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`delivery-swap grid gap-6 md:grid-cols-2 items-stretch ${
        play ? "is-playing" : ""
      }`}
    >
      <div className="delivery-swap__tile rounded-3xl border border-cream-200 bg-white p-6 md:p-8 flex flex-col">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-saffron/15 text-saffron-700">
          <MapPin className="h-5 w-5" />
        </div>
        <p className="mt-4 text-xs uppercase tracking-widest text-ink-soft/70">
          Service area
        </p>
        <p className="mt-1 font-serif text-xl md:text-2xl font-semibold break-words">
          {site.serviceArea}
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          Free delivery within 10 miles of Tempe, AZ. Orders need{" "}
          {site.leadTimeHours}+ hours advance notice.
        </p>
      </div>

      <div className="delivery-swap__scooter relative flex items-center justify-center min-h-64">
        <div className="scooter-stage">
          <div className="scooter-breeze" aria-hidden>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="scooter-exhaust" aria-hidden>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Image
            src="/brand/scooter-delivery.png"
            alt="Chef Uma on her delivery scooter heading out with a fresh tiffin"
            fill
            sizes="(min-width: 768px) 22rem, 90vw"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
