export function GradientMeshBg({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <span className="mesh-blob mesh-blob-a" />
      <span className="mesh-blob mesh-blob-b" />
      <span className="mesh-blob mesh-blob-c" />
    </div>
  );
}
