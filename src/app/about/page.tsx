import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ShieldCheck, Sprout, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { chef } from "@/content/chef";
import { GradientMeshBg } from "@/components/bg/gradient-mesh-bg";

export const metadata: Metadata = {
  title: "About the Chef",
  description:
    "The story behind Ghar Ka Khana — one home cook, one kitchen in Tempe, one mission: feed students like they're family.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-cream-50">
        <GradientMeshBg />
        <div className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-12 md:pt-24 md:pb-20 grid gap-12 md:grid-cols-[1fr_1.3fr] items-center">
          <div className="relative mx-auto md:mx-0 aspect-square w-full max-w-sm rounded-[2rem] bg-gradient-to-br from-curry/40 via-saffron/30 to-terracotta/30 p-4 shadow-lg shadow-saffron/15">
            <div className="relative h-full w-full rounded-[1.5rem] bg-cream-100 overflow-hidden">
              <Image
                src={chef.photo}
                alt={`${chef.name} — chef at Ghar Ka Khana`}
                fill
                sizes="(min-width: 768px) 400px, 90vw"
                className="object-cover"
                priority
              />
            </div>
            <span className="absolute -bottom-4 -right-4 rounded-2xl bg-white px-4 py-3 shadow-md text-sm">
              <span className="font-script text-xl text-saffron-700 block leading-none">
                since {chef.since}
              </span>
              <span className="text-ink-soft text-xs">feeding Tempe</span>
            </span>
          </div>

          <div>
            <p className="font-script text-3xl text-saffron-700">Meet</p>
            <h1 className="mt-1 font-serif text-4xl md:text-6xl font-semibold tracking-tight text-ink">
              {chef.name}
            </h1>
            <p className="mt-3 text-lg text-ink-soft">{chef.subtitle}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink-soft">
              <MapPin className="h-4 w-4" /> {chef.region}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 md:px-6 py-16 md:py-24">
        <SectionHeading
          eyebrow="Why Ghar Ka Khana"
          title="A small kitchen, a big reason"
        />
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
          {chef.story.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="mt-10 font-script text-3xl text-terracotta">
          {chef.signature}
        </p>
      </section>

      <section className="bg-cream-100 border-y border-cream-200">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-24 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white border border-cream-200 p-6 md:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf/10 text-leaf-700">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-serif text-2xl font-semibold">
              Clean kitchen, honest food
            </h3>
            <p className="mt-3 text-ink-soft leading-relaxed">{chef.hygiene}</p>
          </div>
          <div className="rounded-3xl bg-white border border-cream-200 p-6 md:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-saffron/15 text-saffron-700">
              <Sprout className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-serif text-2xl font-semibold">
              Small batch, big heart
            </h3>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Every tiffin is hand-packed and delivered — often by me — because
              a small operation is the only way to keep the food tasting like
              home.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 md:px-6 py-16 md:py-24 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold">
          Come sit at my table
        </h2>
        <p className="mt-3 text-ink-soft">
          I&rsquo;d love to cook for you this week.
        </p>
        <Link
          href="/order"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-saffron px-7 py-4 text-base font-semibold text-white hover:bg-saffron-600 transition-colors"
        >
          Order a tiffin
        </Link>
      </section>
    </>
  );
}
