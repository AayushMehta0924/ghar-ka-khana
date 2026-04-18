export function PingRingsBg({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="ping-origin">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="ping-ring"
            style={{ animationDelay: `-${i * 1.4}s` }}
          />
        ))}
        <span className="ping-dot" />
      </div>
    </div>
  );
}
