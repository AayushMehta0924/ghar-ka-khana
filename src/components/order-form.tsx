"use client";

import { useMemo, useRef, useState } from "react";
import { site, whatsappHref } from "@/lib/site";
import { CheckCircle2, Loader2 } from "lucide-react";

/**
 * Native on-brand order form.
 *
 * Submits to the existing Google Form via hidden iframe, so no backend and no CORS.
 *
 * NOTE: The Google Form `entry.<id>` values below are PLACEHOLDERS. The real IDs
 * must come from the form owner — grab them via "Get pre-filled link" on the
 * Google Form. Once supplied, replace the values in FIELD_IDS. Until then,
 * submissions will reach the Google Form endpoint but fields will not map.
 */
const FIELD_IDS = {
  name: "entry.1000001",
  phone: "entry.1000002",
  email: "entry.1000003",
  address: "entry.1000004",
  plan: "entry.1000005",
  diet: "entry.1000006",
  startDate: "entry.1000007",
  allergies: "entry.1000008",
  notes: "entry.1000009",
} as const;

type Plan = "1 tiffin / day ($8)" | "2 tiffins / day ($14)" | "Custom";
type Diet = "Vegetarian only" | "Veg + egg is fine";

export function OrderForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const today = useMemo(() => {
    const d = new Date();
    const tomorrow = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    return tomorrow.toISOString().slice(0, 10);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Let the form submit to the hidden iframe; flip UI state.
    setStatus("submitting");
    setTimeout(() => setStatus("done"), 1200);
    // Don't preventDefault — we want the iframe POST to actually go through.
    void e;
  };

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-leaf/30 bg-leaf/5 p-8 md:p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-white">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="mt-5 font-serif text-3xl font-semibold">
          Order received!
        </h2>
        <p className="mt-2 text-ink-soft max-w-md mx-auto">
          We&rsquo;ll confirm on WhatsApp shortly. Please send your weekly
          payment via Zelle or Venmo before your first tiffin.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-white hover:bg-saffron-600 transition-colors"
          >
            Message on WhatsApp
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold hover:border-ink/30 transition-colors"
          >
            See payment details
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <iframe
        ref={iframeRef}
        name="hidden-google-form-target"
        title="hidden submit target"
        className="hidden"
        aria-hidden
        tabIndex={-1}
      />
      <form
        ref={formRef}
        action={site.googleFormSubmitUrl}
        method="POST"
        target="hidden-google-form-target"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Your name" name={FIELD_IDS.name} required />
          <Field
            label="WhatsApp / Phone"
            name={FIELD_IDS.phone}
            type="tel"
            required
            placeholder="+1 ..."
          />
        </div>

        <Field
          label="Email"
          name={FIELD_IDS.email}
          type="email"
          placeholder="you@example.com"
        />

        <Textarea
          label="Delivery address (Tempe)"
          name={FIELD_IDS.address}
          required
          placeholder="Street address, apt #, any delivery notes..."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <Radio<Plan>
            label="Plan"
            name={FIELD_IDS.plan}
            options={[
              "1 tiffin / day ($8)",
              "2 tiffins / day ($14)",
              "Custom",
            ]}
            required
          />
          <Radio<Diet>
            label="Dietary preference"
            name={FIELD_IDS.diet}
            options={["Vegetarian only", "Veg + egg is fine"]}
            required
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Start date"
            name={FIELD_IDS.startDate}
            type="date"
            defaultValue={today}
            required
          />
          <Field
            label="Allergies or preferences"
            name={FIELD_IDS.allergies}
            placeholder="e.g. no onion/garlic, less spicy"
          />
        </div>

        <Textarea
          label="Anything else? (optional)"
          name={FIELD_IDS.notes}
          placeholder="Custom combo, extra rotis, preferred delivery time..."
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 w-full inline-flex items-center justify-center rounded-full bg-saffron px-7 py-4 text-base font-semibold text-white hover:bg-saffron-600 transition-colors disabled:opacity-60"
        >
          {status === "submitting" && (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          )}
          Place order
        </button>
        <p className="text-xs text-ink-soft/70 text-center">
          By submitting, you agree to pay for the week via Zelle or Venmo before
          your tiffins begin. We&rsquo;ll confirm on WhatsApp within a few
          hours.
        </p>
      </form>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-terracotta"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="mt-1.5 w-full rounded-2xl border border-cream-200 bg-white px-4 py-3 text-base placeholder:text-ink-soft/40 focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron"
      />
    </label>
  );
}

function Textarea({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-terracotta"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={3}
        className="mt-1.5 w-full rounded-2xl border border-cream-200 bg-white px-4 py-3 text-base placeholder:text-ink-soft/40 focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron resize-y"
      />
    </label>
  );
}

function Radio<T extends string>({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: readonly T[];
  required?: boolean;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-ink mb-1.5">
        {label}
        {required && <span className="text-terracotta"> *</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <label
            key={opt}
            className="inline-flex items-center gap-2 rounded-full border border-cream-200 bg-white px-4 py-2.5 text-sm cursor-pointer has-[:checked]:border-saffron has-[:checked]:bg-saffron/10 has-[:checked]:text-saffron-700 transition-colors"
          >
            <input
              type="radio"
              name={name}
              value={opt}
              required={required}
              className="accent-saffron"
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
