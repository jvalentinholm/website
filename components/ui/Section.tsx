type SectionProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export function SectionIntro({ eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-coreGreen">{eyebrow}</p>}
      <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-black md:text-6xl">{title}</h2>
      {children && <div className="mt-6 text-lg leading-8 text-black/70">{children}</div>}
    </div>
  );
}
