type Props = {
  className?: string;
  count?: number;
};

export function SteamParticles({ className = "", count = 24 }: Props) {
  const particles = Array.from({ length: count }).map((_, i) => {
    const left = (i * 97) % 100;
    const size = 40 + ((i * 37) % 90);
    const delay = (i * 0.47) % 8;
    const duration = 9 + ((i * 1.3) % 7);
    const drift = ((i * 53) % 40) - 20;
    return (
      <span
        key={i}
        className="steam-dot"
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `-${delay}s`,
          animationDuration: `${duration}s`,
          ["--drift" as string]: `${drift}px`,
        }}
      />
    );
  });

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {particles}
    </div>
  );
}
