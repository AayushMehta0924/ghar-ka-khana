const phrases = [
  { text: "ghar ka khana", top: "6%", left: "4%", rot: -8, size: 56 },
  { text: "maa ke haath", top: "18%", left: "68%", rot: 6, size: 44 },
  { text: "thank you", top: "38%", left: "10%", rot: -4, size: 40 },
  { text: "dil se", top: "52%", left: "78%", rot: 10, size: 60 },
  { text: "one bite", top: "68%", left: "20%", rot: -6, size: 38 },
  { text: "so good", top: "82%", left: "62%", rot: 4, size: 50 },
  { text: "yaar!", top: "30%", left: "44%", rot: -12, size: 46 },
];

export function ScriptScatterBg({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {phrases.map((p, i) => (
        <span
          key={i}
          className="font-script absolute select-none whitespace-nowrap"
          style={{
            top: p.top,
            left: p.left,
            transform: `rotate(${p.rot}deg)`,
            fontSize: p.size,
            color: "#B8431E",
            opacity: 0.08,
            filter: "blur(0.3px)",
            lineHeight: 1,
          }}
        >
          &ldquo;{p.text}&rdquo;
        </span>
      ))}
    </div>
  );
}
