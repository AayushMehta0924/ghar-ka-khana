import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Truck, Wallet } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { OrderForm } from "@/components/order-form";
import { SteamParticles } from "@/components/bg/steam-particles";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order a tiffin",
  description: `Place your Ghar Ka Khana order. $8 per tiffin, free delivery within 10 miles of Tempe. Order ${site.leadTimeHours}+ hours in advance.`,
};

export default function OrderPage() {
  return (
    <section className="relative isolate overflow-hidden bg-cream-50 bg-paisley min-h-screen">
      <SteamParticles />
      <div className="mx-auto max-w-6xl px-4 md:px-6 pt-12 pb-20 md:pt-20">
        <SectionHeading
          eyebrow="Order"
          title="Let's get you fed"
          subtitle={`Fill this quick form — it takes a minute. We'll confirm on WhatsApp within a few hours. Orders need at least ${site.leadTimeHours} hours' notice.`}
        />

        <div className="mt-10 md:mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
          <div className="rounded-3xl border border-cream-200 bg-white p-6 md:p-10 shadow-sm">
            <OrderForm />
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24">
            <InfoCard
              icon={<Clock className="h-5 w-5" />}
              title={`${site.leadTimeHours}-hour lead time`}
              body="Place your order at least 4–5 hours before you'd like to eat. Today's dinner? Order before lunch."
            />
            <InfoCard
              icon={<Truck className="h-5 w-5" />}
              title="Free delivery ≤ 10 mi"
              body="Free delivery anywhere within 10 miles of Tempe. Beyond that, ping us on WhatsApp for a quote."
            />
            <InfoCard
              icon={<Wallet className="h-5 w-5" />}
              title="Pay weekly, Zelle or Venmo"
              body={
                <>
                  We collect payment for the week upfront via{" "}
                  <strong>Zelle</strong> or <strong>Venmo</strong>. No cards, no
                  service fees.{" "}
                  <Link
                    href="/contact"
                    className="font-semibold text-saffron-700 link-underline"
                  >
                    See payment details →
                  </Link>
                </>
              }
            />
            <div className="rounded-3xl bg-leaf/5 border border-leaf/20 p-6 text-sm text-leaf-700">
              <p className="font-semibold">Prefer WhatsApp?</p>
              <p className="mt-1 text-ink-soft">
                Message us directly if you&rsquo;d rather chat first — we reply
                fast.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-leaf text-white px-5 py-2.5 text-sm font-semibold hover:bg-leaf-700 transition-colors"
              >
                Open WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-cream-200 bg-white p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-saffron/15 text-saffron-700">
        {icon}
      </div>
      <h3 className="mt-3 font-serif text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-ink-soft leading-relaxed">{body}</p>
    </div>
  );
}
