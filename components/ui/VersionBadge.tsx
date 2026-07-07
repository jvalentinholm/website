export function VersionBadge() {
  return (
    <div className="pointer-events-none hidden rounded-full border border-coreGreen/20 bg-white/78 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-coreGreen shadow-[0_10px_30px_rgba(38,93,55,0.08)] backdrop-blur-md md:inline-flex md:items-center md:gap-3">
      <span className="h-2 w-2 rounded-full bg-orange" />
      <span>Design Preview</span>
      <span className="text-black/32">·</span>
      <span>v0.8</span>
    </div>
  );
}
