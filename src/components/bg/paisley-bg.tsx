type Props = {
  className?: string;
  opacity?: number;
};

export function PaisleyBg({ className = "", opacity = 0.07 }: Props) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="paisley-tile"
          x="0"
          y="0"
          width="180"
          height="180"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="#B8431E" strokeWidth="1.2" opacity={opacity}>
            {/* mandala center */}
            <circle cx="90" cy="90" r="6" />
            <circle cx="90" cy="90" r="14" />
            <circle cx="90" cy="90" r="26" strokeDasharray="2 4" />
            {/* 8-point petals */}
            <g transform="translate(90 90)">
              {Array.from({ length: 8 }).map((_, i) => (
                <path
                  key={i}
                  d="M0 -28 C 6 -40, 6 -52, 0 -60 C -6 -52, -6 -40, 0 -28 Z"
                  transform={`rotate(${i * 45})`}
                />
              ))}
            </g>
            {/* corner paisleys */}
            <path
              d="M20 20 C 40 18, 52 32, 44 52 C 38 66, 22 66, 18 54 C 14 42, 16 30, 20 20 Z"
              transform="translate(-4 -4)"
            />
            <path
              d="M20 20 C 40 18, 52 32, 44 52 C 38 66, 22 66, 18 54 C 14 42, 16 30, 20 20 Z"
              transform="translate(132 132) rotate(180 30 30)"
            />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#paisley-tile)" />
    </svg>
  );
}
