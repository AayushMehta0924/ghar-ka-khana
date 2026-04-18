import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { DishCard } from "@/components/dish-card";
import { dishes } from "@/content/dishes";

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "10 rotating homestyle Indian dishes. Any of these may land in your tiffin this week.",
};

export default function MenuPage() {
  return (
    <>
      <section className="bg-hero-warm">
        <div className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-12 md:pt-24 md:pb-20">
          <SectionHeading
            eyebrow="What's cooking"
            title="Our rotating menu"
            subtitle="The menu changes every day. Any of these 10 dishes may show up in your tiffin this week. Every tiffin always includes 1 sabzi, 3 hot rotis, daal, and rice."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((d) => (
            <DishCard key={d.slug} dish={d} />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-cream-200 bg-white p-6 md:p-10 text-center">
          <p className="font-script text-2xl text-saffron-700">psst...</p>
          <h2 className="mt-1 font-serif text-2xl md:text-3xl font-semibold">
            Want something specific this week?
          </h2>
          <p className="mt-2 text-ink-soft max-w-xl mx-auto">
            Let us know when you order — we&rsquo;ll do our best to include your
            favourite dish in your rotation.
          </p>
          <Link
            href="/order"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-saffron px-7 py-4 text-base font-semibold text-white hover:bg-saffron-600 transition-colors"
          >
            Order this week
          </Link>
        </div>
      </section>
    </>
  );
}
