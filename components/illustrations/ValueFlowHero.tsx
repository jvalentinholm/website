const steps = [
  { label: "Difficult plastic waste", detail: "low-value / mixed", x: 92, y: 122, color: "#5FB130" },
  { label: "Circle X platform", detail: "chemical recycling", x: 314, y: 238, color: "#265D37" },
  { label: "Circular synthetic oil", detail: "certified feedstock", x: 542, y: 122, color: "#326875" },
  { label: "New plastics", detail: "value retained", x: 542, y: 372, color: "#E59515" },
];

function Node({ step, index }: { step: (typeof steps)[number]; index: number }) {
  return (
    <g filter="url(#value-shadow)" style={{ animationDelay: `${index * 180}ms` }} className="value-node">
      <rect x={step.x} y={step.y} width="164" height="112" rx="28" fill="#FFFFFF" stroke="#265D37" strokeOpacity=".14" />
      <circle cx={step.x + 38} cy={step.y + 42} r="15" fill={step.color} fillOpacity=".92" />
      <circle cx={step.x + 66} cy={step.y + 58} r="8" fill="#E59515" fillOpacity=".88" />
      <text x={step.x + 24} y={step.y + 86} fill="#265D37" fontSize="15" fontWeight="700">{step.label}</text>
      <text x={step.x + 24} y={step.y + 106} fill="#231F20" fillOpacity=".50" fontSize="11">{step.detail}</text>
    </g>
  );
}

export function ValueFlowHero() {
  return (
    <div className="relative mx-auto w-full max-w-[720px] rounded-[2.25rem] bg-white/74 p-5 shadow-soft ring-1 ring-coreGreen/10 backdrop-blur md:p-8">
      <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-freshGreen/12 blur-2xl" />
      <div className="absolute -right-10 bottom-12 h-32 w-32 rounded-full bg-orange/14 blur-2xl" />
      <div className="absolute left-8 top-8 rounded-full bg-offWhite px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-coreGreen/70 ring-1 ring-coreGreen/10">
        Value flow
      </div>

      <svg viewBox="0 0 760 560" className="relative h-auto w-full" role="img" aria-label="Circle X value flow illustration">
        <defs>
          <linearGradient id="value-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#EFE3CE" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
          <filter id="value-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#265D37" floodOpacity="0.11" />
          </filter>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L10,5 L0,10 z" fill="#E59515" opacity=".85" />
          </marker>
        </defs>

        <rect x="42" y="56" width="676" height="442" rx="38" fill="url(#value-bg)" stroke="#265D37" strokeOpacity=".10" />
        <path d="M256 174 C310 172 310 255 314 284" fill="none" stroke="#E59515" strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrow)" className="draw-line" />
        <path d="M478 284 C506 250 510 210 542 178" fill="none" stroke="#E59515" strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrow)" className="draw-line" />
        <path d="M624 234 C662 284 662 332 624 372" fill="none" stroke="#E59515" strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrow)" className="draw-line" />
        <path d="M542 430 C382 508 222 460 164 236" fill="none" stroke="#265D37" strokeWidth="3" strokeOpacity=".16" strokeDasharray="8 14" />

        {steps.map((step, index) => <Node key={step.label} step={step} index={index} />)}

        <g filter="url(#value-shadow)">
          <rect x="116" y="372" width="270" height="84" rx="26" fill="#265D37" />
          <text x="144" y="414" fill="#FFFFFF" fontSize="19" fontWeight="800">Value retained</text>
          <text x="144" y="440" fill="#FFFFFF" fillOpacity=".68" fontSize="12">economic value enables circularity</text>
          <circle cx="344" cy="414" r="14" fill="#E59515" className="pulse-dot" />
        </g>
      </svg>
    </div>
  );
}
