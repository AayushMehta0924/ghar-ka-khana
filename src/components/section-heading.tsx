import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="font-script text-2xl text-saffron-700 leading-none mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-ink-soft leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
