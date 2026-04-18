import { Star } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex flex-col gap-4 rounded-3xl border border-cream-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-1 text-saffron">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-saffron" />
        ))}
      </div>
      <blockquote className="font-serif text-lg leading-relaxed text-ink">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-2 border-t border-cream-200">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf/10 text-leaf-700 font-semibold">
          {t.initials}
        </span>
        <span>
          <span className="block font-medium">{t.name}</span>
          <span className="block text-xs text-ink-soft">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
