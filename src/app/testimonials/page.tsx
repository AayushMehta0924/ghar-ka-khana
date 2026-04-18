import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/content/testimonials";
import { ScriptScatterBg } from "@/components/bg/script-scatter-bg";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What our regulars — students, engineers and grad-school aunties — say about Ghar Ka Khana.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-cream-50 bg-paisley">
        <div className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-12 md:pt-24 md:pb-20">
          <SectionHeading
            eyebrow="From our regulars"
            title={
              <>
                People who miss home,
                <br />
                eating like they&rsquo;re home.
              </>
            }
            subtitle="A handful of stories from our small but happy Tempe tiffin family."
          />
        </div>
      </section>

      <section className="relative isolate mx-auto max-w-6xl px-4 md:px-6 pb-20">
        <ScriptScatterBg />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-cream-200 bg-white p-8 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold">
            Already one of our regulars?
          </h2>
          <p className="mt-2 text-ink-soft">
            We&rsquo;d love to share your story here. Send us a message on
            WhatsApp with your experience.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold hover:border-ink/30 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
