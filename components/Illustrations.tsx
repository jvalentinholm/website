export function PlatformIllustration() {
  return (
    <div className="relative aspect-[1.12] w-full overflow-hidden rounded-[36px] bg-white p-8 shadow-soft">
      <svg viewBox="0 0 620 550" className="h-full w-full" role="img" aria-label="Abstract Circle X platform illustration">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#EFE3CE" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="620" height="550" rx="34" fill="url(#g1)" />
        <path className="flow-line" d="M85 120 C170 35, 280 65, 315 145 C350 225, 455 205, 520 145" fill="none" stroke="#326875" strokeWidth="3" opacity=".55" />
        <path className="flow-line" d="M90 390 C180 465, 290 470, 350 390 C410 310, 505 350, 540 425" fill="none" stroke="#E59515" strokeWidth="3" opacity=".8" />
        <g transform="translate(78 145)">
          <rect width="130" height="92" rx="22" fill="#265D37" />
          <text x="65" y="43" textAnchor="middle" fill="white" fontSize="17" fontWeight="700">Feedstock</text>
          <text x="65" y="65" textAnchor="middle" fill="white" opacity=".75" fontSize="12">Mixed plastics</text>
        </g>
        <g transform="translate(245 96)">
          <rect width="138" height="138" rx="30" fill="#326875" />
          <circle cx="69" cy="69" r="32" fill="none" stroke="#EFE3CE" strokeWidth="10" />
          <circle cx="69" cy="69" r="8" fill="#E59515" />
          <text x="69" y="118" textAnchor="middle" fill="white" fontSize="15" fontWeight="700">Technology</text>
        </g>
        <g transform="translate(432 145)">
          <rect width="130" height="92" rx="22" fill="#FFFFFF" stroke="#265D37" strokeWidth="2" />
          <text x="65" y="43" textAnchor="middle" fill="#265D37" fontSize="17" fontWeight="700">Deployment</text>
          <text x="65" y="65" textAnchor="middle" fill="#231F20" opacity=".65" fontSize="12">Modular lines</text>
        </g>
        <g transform="translate(166 330)">
          <rect width="290" height="88" rx="26" fill="#FFFFFF" stroke="#E59515" strokeWidth="2" />
          <text x="145" y="40" textAnchor="middle" fill="#231F20" fontSize="18" fontWeight="700">Circular feedstock</text>
          <text x="145" y="63" textAnchor="middle" fill="#231F20" opacity=".62" fontSize="13">For new plastics</text>
        </g>
        <g fill="#5FB130" opacity=".9">
          <circle cx="101" cy="103" r="8" /><circle cx="532" cy="107" r="6" /><circle cx="96" cy="430" r="6" /><circle cx="528" cy="390" r="9" />
        </g>
      </svg>
    </div>
  );
}

export function FlowDiagram() {
  const items = ["Low-value plastic", "Circle X Platform", "Circular oil", "New plastics"];
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {items.map((item, i) => (
        <div key={item} className="soft-card relative rounded-cx p-6">
          <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-cx-coregreen text-white">{i + 1}</div>
          <h3 className="text-xl font-semibold tracking-[-.03em]">{item}</h3>
          {i < items.length - 1 && <div className="absolute right-[-18px] top-1/2 hidden text-3xl text-cx-orange md:block">→</div>}
        </div>
      ))}
    </div>
  );
}
