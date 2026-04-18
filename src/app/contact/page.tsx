import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Payment",
  description:
    "WhatsApp, phone, email, and payment details (Zelle, Venmo) for Ghar Ka Khana in Tempe.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream-50 bg-paisley">
        <div className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-10 md:pt-24 md:pb-16">
          <SectionHeading
            eyebrow="Get in touch"
            title="Reach us anytime"
            subtitle="WhatsApp is fastest. Payments go via Zelle or Venmo — never on this site."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-20 grid gap-6 md:grid-cols-2">
        <ContactTile
          icon={<MessageCircle className="h-5 w-5" />}
          label="WhatsApp"
          value={site.phone}
          href={whatsappHref}
          cta="Open chat"
          accent="leaf"
        />
        <ContactTile
          icon={<Phone className="h-5 w-5" />}
          label="Phone"
          value={site.phone}
          href={`tel:${site.phoneRaw}`}
          cta="Call now"
        />
        <ContactTile
          icon={<Mail className="h-5 w-5" />}
          label="Email"
          value={site.email}
          href={`mailto:${site.email}`}
          cta="Send email"
        />
        <ContactTile
          icon={<MapPin className="h-5 w-5" />}
          label="Service area"
          value={site.serviceArea}
          cta=""
          body={`Free delivery within 10 miles of Tempe, AZ. Orders need ${site.leadTimeHours}+ hours advance notice.`}
        />
      </section>

      <section className="bg-cream-100 border-y border-cream-200">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-20">
          <SectionHeading
            eyebrow="Payments"
            title="Pay weekly — Zelle or Venmo"
            subtitle="We collect payment for the week upfront. No cards, no on-site payments, no fees."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <PaymentCard
              brand="Zelle"
              color="bg-[#6d1ed4]"
              handle={site.zelle}
              instructions="Send to this phone number via your bank's Zelle. Include your name in the memo."
            />
            <PaymentCard
              brand="Venmo"
              color="bg-[#008cff]"
              handle={site.venmo}
              instructions="Tap the handle below on your phone, or search this handle in Venmo."
            />
          </div>
          <div className="mt-8 rounded-3xl border border-cream-200 bg-white p-5 flex items-start gap-3 text-sm text-ink-soft">
            <Clock className="h-4 w-4 mt-0.5 text-saffron-700 flex-none" />
            <p>
              <strong>Please pay before your first tiffin of the week.</strong>{" "}
              If we haven&rsquo;t received payment, delivery may be paused until
              we hear back.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactTile({
  icon,
  label,
  value,
  href,
  cta,
  body,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  cta: string;
  body?: string;
  accent?: "leaf";
}) {
  return (
    <div className="rounded-3xl border border-cream-200 bg-white p-6 md:p-8 flex flex-col">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
          accent === "leaf"
            ? "bg-leaf/10 text-leaf-700"
            : "bg-saffron/15 text-saffron-700"
        }`}
      >
        {icon}
      </div>
      <p className="mt-4 text-xs uppercase tracking-widest text-ink-soft/70">
        {label}
      </p>
      <p className="mt-1 font-serif text-xl md:text-2xl font-semibold break-words">
        {value}
      </p>
      {body && <p className="mt-2 text-sm text-ink-soft">{body}</p>}
      {href && cta && (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="mt-5 inline-flex items-center justify-center rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-semibold hover:border-ink/30 w-fit transition-colors"
        >
          {cta}
        </a>
      )}
    </div>
  );
}

function PaymentCard({
  brand,
  color,
  handle,
  instructions,
}: {
  brand: string;
  color: string;
  handle: string;
  instructions: string;
}) {
  return (
    <div className="rounded-3xl border border-cream-200 bg-white p-6 md:p-8">
      <div
        className={`inline-flex items-center justify-center rounded-xl ${color} px-3 py-1.5 text-white font-semibold text-sm`}
      >
        {brand}
      </div>
      <p className="mt-4 font-serif text-2xl md:text-3xl font-semibold break-all">
        {handle}
      </p>
      <p className="mt-2 text-sm text-ink-soft leading-relaxed">
        {instructions}
      </p>
    </div>
  );
}
