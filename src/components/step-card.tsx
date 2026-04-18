import type { ReactNode } from "react";

type Props = {
  step: number;
  title: string;
  body: string;
  icon: ReactNode;
};

export function StepCard({ step, title, body, icon }: Props) {
  return (
    <div className="relative flex flex-col gap-3 rounded-3xl border border-cream-200 bg-white p-6">
      <span className="absolute -top-3 -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-saffron text-white font-serif text-lg shadow-sm">
        {step}
      </span>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf/10 text-leaf-700">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold">{title}</h3>
      <p className="text-sm text-ink-soft leading-relaxed">{body}</p>
    </div>
  );
}
