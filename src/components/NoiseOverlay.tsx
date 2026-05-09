export default function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="bg-noise pointer-events-none fixed inset-0 z-[80] opacity-[0.035] mix-blend-overlay"
    />
  );
}
