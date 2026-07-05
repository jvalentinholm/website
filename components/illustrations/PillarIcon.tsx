export function PillarIcon({ type }: { type: "feedstock" | "technology" | "deployment" | "commercial" }) {
  const common = "stroke-coreGreen";
  if (type === "feedstock") {
    return <svg viewBox="0 0 96 96" className="h-20 w-20"><circle cx="32" cy="36" r="10" className={common} strokeWidth="4" fill="none"/><circle cx="58" cy="30" r="7" className={common} strokeWidth="4" fill="none"/><circle cx="60" cy="59" r="13" stroke="#E59515" strokeWidth="4" fill="none"/><path d="M24 66h48" className={common} strokeWidth="4" strokeLinecap="round"/></svg>;
  }
  if (type === "technology") {
    return <svg viewBox="0 0 96 96" className="h-20 w-20"><circle cx="48" cy="48" r="27" className={common} strokeWidth="4" fill="none"/><path d="M48 20v56M20 48h56M30 30l36 36M66 30L30 66" stroke="#E59515" strokeWidth="4" strokeLinecap="round"/><circle cx="48" cy="48" r="8" fill="#E59515"/></svg>;
  }
  if (type === "deployment") {
    return <svg viewBox="0 0 96 96" className="h-20 w-20"><rect x="18" y="22" width="24" height="24" rx="5" className={common} strokeWidth="4" fill="none"/><rect x="54" y="22" width="24" height="24" rx="5" className={common} strokeWidth="4" fill="none"/><rect x="36" y="58" width="24" height="24" rx="5" stroke="#E59515" strokeWidth="4" fill="none"/><path d="M42 34h12M48 46v12" className={common} strokeWidth="4" strokeLinecap="round"/></svg>;
  }
  return <svg viewBox="0 0 96 96" className="h-20 w-20"><path d="M22 58c10 18 42 18 52-2" className={common} strokeWidth="4" fill="none" strokeLinecap="round"/><path d="M72 38c-10-18-42-18-52 2" stroke="#E59515" strokeWidth="4" fill="none" strokeLinecap="round"/><path d="M68 28l6 10-12 2M28 68l-6-10 12-2" className={common} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
