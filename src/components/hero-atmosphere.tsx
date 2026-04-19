import { FloatingFood } from "./floating-food";

const STEAM_PLUMES = [
  { left: "58%", bottom: "35%", size: 180, delay: 0, duration: 7 },
  { left: "64%", bottom: "30%", size: 140, delay: 2.3, duration: 8 },
  { left: "52%", bottom: "38%", size: 160, delay: 4.1, duration: 9 },
  { left: "70%", bottom: "28%", size: 120, delay: 1.6, duration: 6.5 },
];

export function HeroAtmosphere() {
  return (
    <>
      <FloatingFood />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {STEAM_PLUMES.map((s, i) => (
          <span
            key={i}
            className="hero-plume"
            style={{
              left: s.left,
              bottom: s.bottom,
              width: s.size,
              height: s.size,
              animationDelay: `-${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
