export function PlatformIllustration() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-coreGreen/15 bg-white p-8 shadow-soft">
      <div className="absolute inset-0 bg-[linear-gradient(#265D3710_1px,transparent_1px),linear-gradient(90deg,#265D3710_1px,transparent_1px)] bg-[size:32px_32px]" />
      <svg viewBox="0 0 720 460" className="relative z-10 h-full w-full" role="img" aria-label="Circle X platform illustration">
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="12" stdDeviation="12" floodOpacity="0.12" /></filter>
        </defs>
        <path d="M80 340 C180 280 230 380 330 320 C430 260 480 360 640 280" fill="none" stroke="#5FB130" strokeWidth="3" strokeDasharray="6 10" />
        <path d="M110 145 L250 65 L390 145 L250 225 Z" fill="#EFE3CE" stroke="#265D37" strokeWidth="2" filter="url(#shadow)" />
        <path d="M250 225 L390 145 L390 285 L250 365 Z" fill="#E8DCC6" stroke="#265D37" strokeWidth="2" />
        <path d="M110 145 L250 225 L250 365 L110 285 Z" fill="#F7F0E4" stroke="#265D37" strokeWidth="2" />
        <circle cx="250" cy="170" r="48" fill="#265D37" />
        <circle cx="250" cy="170" r="18" fill="#EFE3CE" />
        <rect x="455" y="120" width="120" height="88" rx="18" fill="#326875" filter="url(#shadow)" />
        <rect x="482" y="145" width="66" height="12" rx="6" fill="#EFE3CE" opacity=".75" />
        <rect x="482" y="170" width="44" height="12" rx="6" fill="#EFE3CE" opacity=".75" />
        <path d="M392 190 C430 190 430 164 455 164" fill="none" stroke="#E59515" strokeWidth="5" strokeLinecap="round" />
        <path d="M250 365 C340 420 470 400 568 330" fill="none" stroke="#E59515" strokeWidth="4" strokeLinecap="round" />
        <rect x="505" y="278" width="105" height="75" rx="18" fill="#FFFFFF" stroke="#265D37" strokeWidth="2" filter="url(#shadow)" />
        <path d="M536 315 h44" stroke="#265D37" strokeWidth="7" strokeLinecap="round" />
        <path d="M558 293 v44" stroke="#265D37" strokeWidth="7" strokeLinecap="round" />
        <g fill="#5FB130"><circle cx="88" cy="345" r="7" /><circle cx="118" cy="318" r="5" /><circle cx="156" cy="340" r="6" /><circle cx="616" cy="270" r="7" /><circle cx="650" cy="292" r="5" /></g>
        <text x="110" y="55" fill="#265D37" fontSize="18" fontWeight="700">Feedstock</text>
        <text x="455" y="105" fill="#265D37" fontSize="18" fontWeight="700">Technology</text>
        <text x="504" y="382" fill="#265D37" fontSize="18" fontWeight="700">Circular feedstock</text>
      </svg>
    </div>
  );
}
