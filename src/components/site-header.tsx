"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Bike } from "lucide-react";
import { navLinks } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur border-b border-cream-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-ink hover:text-saffron transition-colors"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-saffron text-white shadow-sm">
            <Bike className="h-5 w-5" aria-hidden />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-script text-xl text-saffron-700">Ghar Ka</span>
            <span className="font-serif text-lg font-semibold tracking-tight">
              Khana
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-ink-soft hover:text-saffron transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/order"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-saffron-600 transition-colors"
          >
            Order Now
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-200 bg-white/70 text-ink"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bottom-0 z-30 bg-cream-50/98 backdrop-blur">
          <nav className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-4 text-lg font-serif hover:bg-cream-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/order"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-saffron px-6 py-4 text-base font-semibold text-white shadow-sm"
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
