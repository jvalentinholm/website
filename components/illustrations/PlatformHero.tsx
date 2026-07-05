export function PlatformHero() {
  return (
    <div className="relative mx-auto w-full max-w-[660px] rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-coreGreen/10 md:p-8">
      <div className="absolute -left-5 top-14 h-24 w-24 rounded-full bg-freshGreen/15 blur-2xl" />
      <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-orange/18 blur-2xl" />
      <svg viewBox="0 0 700 520" className="relative h-auto w-full" role="img" aria-label="Circle X platform illustration">
        <defs>
          <linearGradient id="cxg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#EFE3CE" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#265D37" floodOpacity="0.12" />
          </filter>
        </defs>

        <rect x="40" y="48" width="620" height="424" rx="34" fill="url(#cxg)" stroke="#265D37" strokeOpacity=".12" />
        <path d="M118 344 C 210 250, 310 420, 405 282 S 550 150, 606 206" fill="none" stroke="#265D37" strokeWidth="3" strokeOpacity=".18" className="draw-line" />
        <path d="M112 250 C 205 126, 356 164, 426 238 S 526 340, 605 270" fill="none" stroke="#E59515" strokeWidth="3" strokeOpacity=".45" strokeLinecap="round" strokeDasharray="10 14" />

        <g className="animate-float-slow" filter="url(#shadow)">
          <rect x="92" y="118" width="154" height="94" rx="22" fill="#FFFFFF" stroke="#265D37" strokeOpacity=".16" />
          <circle cx="126" cy="153" r="12" fill="#5FB130" fillOpacity=".85" />
          <circle cx="160" cy="176" r="8" fill="#E59515" fillOpacity=".95" />
          <circle cx="198" cy="150" r="10" fill="#326875" fillOpacity=".9" />
          <text x="116" y="228" fill="#265D37" fontSize="16" fontWeight="700">Feedstock</text>
        </g>

        <g filter="url(#shadow)">
          <rect x="276" y="210" width="160" height="112" rx="26" fill="#265D37" />
          <circle cx="356" cy="266" r="34" fill="#EFE3CE" fillOpacity=".95" />
          <path d="M356 232 L370 262 L402 266 L374 282 L378 314 L356 292 L334 314 L338 282 L310 266 L342 262 Z" fill="#E59515" fillOpacity=".92" />
          <text x="317" y="346" fill="#265D37" fontSize="16" fontWeight="700">Platform</text>
        </g>

        <g className="animate-float-slow" style={{ animationDelay: "-2s" }} filter="url(#shadow)">
          <rect x="482" y="116" width="134" height="96" rx="22" fill="#FFFFFF" stroke="#265D37" strokeOpacity=".16" />
          <path d="M520 172 C540 140, 570 140, 586 172" fill="none" stroke="#326875" strokeWidth="10" strokeLinecap="round" />
          <circle cx="552" cy="172" r="13" fill="#E59515" />
          <text x="506" y="228" fill="#265D37" fontSize="16" fontWeight="700">Circular oil</text>
        </g>

        <g filter="url(#shadow)">
          <rect x="477" y="315" width="150" height="92" rx="22" fill="#FFFFFF" stroke="#265D37" strokeOpacity=".16" />
          <rect x="510" y="348" width="22" height="36" rx="6" fill="#5FB130" />
          <rect x="542" y="336" width="22" height="48" rx="6" fill="#E59515" />
          <rect x="574" y="355" width="22" height="29" rx="6" fill="#326875" />
          <text x="501" y="424" fill="#265D37" fontSize="16" fontWeight="700">New plastics</text>
        </g>

        <circle cx="266" cy="245" r="7" fill="#E59515" className="pulse-dot" />
        <circle cx="452" cy="245" r="7" fill="#E59515" className="pulse-dot" style={{ animationDelay: ".7s" }} />
        <circle cx="464" cy="335" r="7" fill="#E59515" className="pulse-dot" style={{ animationDelay: "1.2s" }} />
      </svg>
    </div>
  );
}
