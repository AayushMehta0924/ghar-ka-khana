import Link from "next/link";
import { Check } from "lucide-react";

type Props = {
  name: string;
  price: number;
  per: string;
  highlight?: boolean;
  features: string[];
  ctaLabel?: string;
};

export function PricingCard({
  name,
  price,
  per,
  highlight,
  features,
  ctaLabel = "Start this plan",
}: Props) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-6 md:p-8 border ${
        highlight
          ? "border-saffron bg-gradient-to-br from-saffron to-saffron-600 text-white shadow-lg shadow-saffron/20"
          : "border-cream-200 bg-white"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-6 rounded-full bg-ink text-cream-50 text-[11px] font-semibold uppercase tracking-widest px-3 py-1">
          Most popular
        </span>
      )}
      <h3
        className={`font-serif text-2xl font-semibold ${
          highlight ? "text-white" : ""
        }`}
      >
        {name}
      </h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-serif text-5xl font-semibold">${price}</span>
        <span
          className={`text-sm ${
            highlight ? "text-white/80" : "text-ink-soft"
          }`}
        >
          / {per}
        </span>
      </div>
      <ul className="mt-6 space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <Check
              className={`h-4 w-4 mt-0.5 flex-none ${
                highlight ? "text-white" : "text-leaf"
              }`}
            />
            <span className={highlight ? "text-white/95" : "text-ink-soft"}>
              {f}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href="/order"
        className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
          highlight
            ? "bg-white text-saffron-700 hover:bg-cream-100"
            : "bg-ink text-cream-50 hover:bg-ink-soft"
        }`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
