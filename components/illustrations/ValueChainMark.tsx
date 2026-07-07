const nodes = [
  { label: "Mixed plastic", x: 78, y: 76 },
  { label: "Circle X platform", x: 318, y: 146 },
  { label: "Circular synthetic oil", x: 166, y: 302 },
  { label: "New plastics", x: 404, y: 376 },
  { label: "Value retained", x: 278, y: 506 },
];

export function ValueChainMark() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-coreGreen/12 bg-white/70 p-6 shadow-card backdrop-blur-sm md:p-8">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-orange/10" />
      <div className="absolute bottom-0 left-0 h-44 w-44 rounded-tr-full bg-freshGreen/10" />

      <svg viewBox="0 0 540 580" className="relative h-auto w-full" role="img" aria-label="Circle X value chain illustration">
        <defs>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#265D37" floodOpacity="0.12" />
          </filter>
        </defs>

        <path
          d="M92 92 C206 88 274 106 318 146 C382 204 236 246 168 302 C92 365 308 352 404 376 C506 402 386 484 286 506"
          fill="none"
          stroke="#265D37"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="8 14"
          opacity="0.32"
        />

        {nodes.map((node, index) => (
          <g key={node.label} filter="url(#softShadow)">
            <circle cx={node.x} cy={node.y} r={index === 1 ? 46 : 36} fill={index === 1 ? "#265D37" : "#FFFFFF"} stroke="#265D37" strokeWidth="2" />
            <circle cx={node.x} cy={node.y} r={index === 1 ? 10 : 7} fill={index === 4 ? "#E59515" : index === 1 ? "#E59515" : "#5FB130"} />
          </g>
        ))}

        {nodes.map((node, index) => (
          <g key={`${node.label}-text`}>
            <text
              x={node.x}
              y={node.y + (index === 1 ? 68 : 56)}
              textAnchor="middle"
              fill="#231F20"
              fontSize="17"
              fontWeight="650"
              style={{ letterSpacing: "-0.02em" }}
            >
              {node.label}
            </text>
          </g>
        ))}

        <g opacity="0.9">
          <circle cx="474" cy="114" r="5" fill="#E59515" />
          <circle cx="446" cy="150" r="3" fill="#5FB130" />
          <circle cx="60" cy="418" r="4" fill="#326875" />
          <circle cx="92" cy="452" r="2.5" fill="#265D37" />
        </g>
      </svg>
    </div>
  );
}
