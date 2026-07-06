export function PlatformHero() {
  return (
    <div className="relative mx-auto w-full max-w-[700px] rounded-[2.25rem] bg-white/78 p-5 shadow-soft ring-1 ring-coreGreen/10 backdrop-blur md:p-8">
      <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-freshGreen/12 blur-2xl" />
      <div className="absolute -right-10 bottom-12 h-32 w-32 rounded-full bg-orange/14 blur-2xl" />
      <div className="absolute left-8 top-8 rounded-full bg-offWhite px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-coreGreen/70 ring-1 ring-coreGreen/10">
        Platform architecture
      </div>

      <svg viewBox="0 0 760 560" className="relative h-auto w-full" role="img" aria-label="Circle X platform illustration">
        <defs>
          <linearGradient id="cxg-v06" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#EFE3CE" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
          <filter id="shadow-v06" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#265D37" floodOpacity="0.12" />
          </filter>
        </defs>

        <rect x="42" y="56" width="676" height="442" rx="38" fill="url(#cxg-v06)" stroke="#265D37" strokeOpacity=".10" />

        <path d="M122 354 C 218 270, 304 424, 394 298 S 560 156, 638 218" fill="none" stroke="#265D37" strokeWidth="3" strokeOpacity=".16" className="draw-line" />
        <path d="M122 238 C 218 126, 354 168, 430 236 S 548 362, 642 284" fill="none" stroke="#E59515" strokeWidth="3" strokeOpacity=".45" strokeLinecap="round" strokeDasharray="10 16" />

        <g className="animate-float-slow" filter="url(#shadow-v06)">
          <rect x="90" y="136" width="164" height="112" rx="28" fill="#FFFFFF" stroke="#265D37" strokeOpacity=".14" />
          <circle cx="130" cy="174" r="12" fill="#5FB130" fillOpacity=".85" />
          <circle cx="166" cy="204" r="8" fill="#E59515" fillOpacity=".95" />
          <circle cx="208" cy="174" r="10" fill="#326875" fillOpacity=".9" />
          <text x="118" y="272" fill="#265D37" fontSize="16" fontWeight="700">Feedstock</text>
          <text x="118" y="294" fill="#231F20" fillOpacity=".52" fontSize="12">mixed / low-value</text>
        </g>

        <g filter="url(#shadow-v06)">
          <rect x="288" y="218" width="176" height="124" rx="30" fill="#265D37" />
          <circle cx="376" cy="280" r="38" fill="#EFE3CE" fillOpacity=".96" />
          <path d="M376 240 L392 272 L426 280 L396 296 L400 332 L376 306 L352 332 L356 296 L326 280 L360 272 Z" fill="#E59515" fillOpacity=".92" />
          <text x="329" y="368" fill="#265D37" fontSize="16" fontWeight="700">Circle X Platform</text>
          <text x="337" y="390" fill="#231F20" fillOpacity=".52" fontSize="12">conversion / control</text>
        </g>

        <g className="animate-float-slow" style={{ animationDelay: "-2s" }} filter="url(#shadow-v06)">
          <rect x="520" y="128" width="146" height="114" rx="28" fill="#FFFFFF" stroke="#265D37" strokeOpacity=".14" />
          <path d="M552 196 C574 158, 610 158, 628 196" fill="none" stroke="#326875" strokeWidth="10" strokeLinecap="round" />
          <circle cx="590" cy="196" r="13" fill="#E59515" />
          <text x="535" y="266" fill="#265D37" fontSize="16" fontWeight="700">Circular oil</text>
          <text x="535" y="288" fill="#231F20" fillOpacity=".52" fontSize="12">petrochemical input</text>
        </g>

        <g filter="url(#shadow-v06)">
          <rect x="512" y="344" width="166" height="110" rx="28" fill="#FFFFFF" stroke="#265D37" strokeOpacity=".14" />
          <rect x="548" y="380" width="22" height="38" rx="7" fill="#5FB130" />
          <rect x="584" y="364" width="22" height="54" rx="7" fill="#E59515" />
          <rect x="620" y="388" width="22" height="30" rx="7" fill="#326875" />
          <text x="536" y="478" fill="#265D37" fontSize="16" fontWeight="700">New plastics</text>
        </g>

        <g opacity=".9">
          <circle cx="280" cy="254" r="7" fill="#E59515" className="pulse-dot" />
          <circle cx="486" cy="254" r="7" fill="#E59515" className="pulse-dot" style={{ animationDelay: ".7s" }} />
          <circle cx="506" cy="368" r="7" fill="#E59515" className="pulse-dot" style={{ animationDelay: "1.2s" }} />
        </g>
      </svg>
    </div>
  );
}
