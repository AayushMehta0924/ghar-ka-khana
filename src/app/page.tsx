import Link from "next/link";
import {
  BookOpen,
  ClipboardCheck,
  CreditCard,
  BikeIcon,
  UtensilsCrossed,
  DollarSign,
  Truck,
  CalendarDays,
  Star,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { PricingCard } from "@/components/pricing-card";
import { StepCard } from "@/components/step-card";
import { DishCard } from "@/components/dish-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { dishes } from "@/content/dishes";
import { testimonials } from "@/content/testimonials";
import { site, whatsappHref } from "@/lib/site";

export default function HomePage() {
  const featured = dishes.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-50 bg-paisley">
        <div className="mx-auto max-w-6xl px-4 md:px-6 pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-28 lg:pb-32 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="font-script text-3xl md:text-4xl text-saffron-700 leading-none">
              Ghar jaisa khana, Tempe mein.
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-ink">
              Missing <span className="italic text-terracotta">maa ke haath</span> ka khana?
            </h1>
            <p className="mt-5 text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl">
              Fresh, homemade desi tiffins delivered daily in Tempe.
              <span className="font-semibold text-ink"> $8 a day.</span> Free
              delivery within 10 miles. Menu rotates every day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/order"
                className="inline-flex items-center justify-center rounded-full bg-saffron px-7 py-4 text-base font-semibold text-white shadow-md shadow-saffron/30 hover:bg-saffron-600 transition-colors"
              >
                Order a tiffin
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white px-7 py-4 text-base font-semibold text-ink hover:border-ink/30 transition-colors"
              >
                See this week&rsquo;s menu
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-ink-soft">
              <span className="inline-flex items-center gap-1.5">
                <span className="flex gap-0.5 text-saffron">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-saffron" />
                  ))}
                </span>
                Loved by 10+ Tempe regulars
              </span>
              <span className="hidden sm:inline text-ink-soft/40">·</span>
              <span>Hygienic home kitchen</span>
              <span className="hidden sm:inline text-ink-soft/40">·</span>
              <span>Cooked fresh, same day</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-md rounded-[2.5rem] bg-gradient-to-br from-curry/40 via-saffron/30 to-terracotta/30 p-8 flex items-center justify-center shadow-xl shadow-saffron/10">
              <div className="absolute inset-6 rounded-[2rem] bg-white/70 backdrop-blur-sm" />
              <div className="relative text-center animate-float">
                <div className="text-[140px] md:text-[180px] leading-none">🍛</div>
                <p className="font-script text-2xl text-saffron-700 mt-2">
                  thali of the day
                </p>
              </div>
              <span className="absolute top-4 right-4 text-5xl md:text-6xl rotate-12">
                🫓
              </span>
              <span className="absolute bottom-6 left-6 text-4xl md:text-5xl -rotate-12">
                🥘
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ghar Ka Khana */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Why Ghar Ka Khana"
          title={
            <>
              Not restaurant food.
              <br />
              Actually <span className="italic text-saffron-700">homemade</span>.
            </>
          }
          subtitle="We're one person cooking one small batch at a time — not a cloud kitchen, not a buffet warmer. Just real ghar ka khana, made today, for you."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon={<UtensilsCrossed className="h-5 w-5" />}
            title="Cooked fresh daily"
            body="Groceries sourced weekly, prep starts the morning of delivery. Nothing frozen, nothing reheated."
          />
          <Feature
            icon={<DollarSign className="h-5 w-5" />}
            title="$8 a day"
            body="Cheaper than one Chipotle bowl — and it's a full Indian thali with sabzi, daal, rice and 3 rotis."
          />
          <Feature
            icon={<Truck className="h-5 w-5" />}
            title="Free delivery"
            body="Free within 10 miles of Tempe. Hot and hand-delivered, often by the chef herself."
          />
          <Feature
            icon={<CalendarDays className="h-5 w-5" />}
            title="Menu changes daily"
            body="Rotating 10-dish menu. You'll never eat the same thing two days in a row."
          />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream-100 border-y border-cream-200">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps to ghar ka khana"
            subtitle="No apps, no surge pricing, no 15% service fees. Just message, eat, pay weekly."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard
              step={1}
              icon={<BookOpen className="h-5 w-5" />}
              title="Browse the menu"
              body="See what's being cooked this week. Our menu rotates daily from 10 homestyle favorites."
            />
            <StepCard
              step={2}
              icon={<ClipboardCheck className="h-5 w-5" />}
              title="Place your order"
              body={`Fill our short form on the Order page — just 4-5 hours before you'd like your tiffin.`}
            />
            <StepCard
              step={3}
              icon={<CreditCard className="h-5 w-5" />}
              title="Pay weekly"
              body="Pay via Zelle or Venmo for the week upfront. No cards, no subscriptions, no fees."
            />
            <StepCard
              step={4}
              icon={<BikeIcon className="h-5 w-5" />}
              title="Hot delivery"
              body="Your tiffin arrives fresh and hot at your door in Tempe. Free within 10 miles."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Plans & pricing"
          title="Pick a plan, eat like home"
          subtitle="Each tiffin: 1 sabzi, 3 rotis, daal, rice. Want extra rotis or a custom combo? Just message us on WhatsApp — we'll sort you out."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-3xl">
          <PricingCard
            name="1 Tiffin / day"
            price={site.pricing.oneTiffin}
            per="day"
            features={[
              "1 fresh sabzi (rotates daily)",
              "3 hot rotis",
              "Daal + rice",
              "Pickle + small salad",
              "Free delivery in Tempe",
            ]}
          />
          <PricingCard
            name="2 Tiffins / day"
            price={site.pricing.twoTiffins}
            per="day"
            highlight
            features={[
              "Lunch & dinner covered",
              "Everything in the 1-tiffin plan × 2",
              "Different dishes across meals",
              "Priority delivery windows",
              "Save $2 vs 2 separate tiffins",
            ]}
          />
        </div>
        <p className="mt-6 text-sm text-ink-soft">
          Need extra roti, less spice, or a custom combo?{" "}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-saffron-700 link-underline"
          >
            Message us on WhatsApp
          </a>{" "}
          — pricing adjusts accordingly.
        </p>
      </section>

      {/* Menu preview */}
      <section className="bg-cream-100 border-y border-cream-200">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <SectionHeading
              eyebrow="This week, you might get"
              title="A peek at the kitchen"
              subtitle="Menu rotates every single day. Here are three dishes that might land in your tiffin this week."
            />
            <Link
              href="/menu"
              className="text-sm font-semibold text-saffron-700 link-underline self-start md:self-auto"
            >
              See full menu →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((d) => (
              <DishCard key={d.slug} dish={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Our regulars say"
          title="Students. Professionals. Aunties."
          subtitle="A small but happy group of Tempe locals who eat with us every week."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/testimonials"
            className="text-sm font-semibold text-saffron-700 link-underline"
          >
            Read more stories →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 md:px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-gradient-to-br from-saffron via-saffron-600 to-terracotta p-10 md:p-16 text-center text-white shadow-xl shadow-saffron/20">
          <p className="font-script text-3xl md:text-4xl text-cream-100">
            So, what&rsquo;s for dinner?
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl font-semibold text-white">
            Ready to eat ghar ka khana tonight?
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Place your order at least {site.leadTimeHours} hours in advance and
            we&rsquo;ll handle the rest.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/order"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-saffron-700 hover:bg-cream-100 transition-colors"
            >
              Order now
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-cream-200 bg-white p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-saffron/10 text-saffron-700">
        {icon}
      </div>
      <h3 className="mt-4 font-serif text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-ink-soft leading-relaxed">{body}</p>
    </div>
  );
}
