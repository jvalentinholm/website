import { ReactNode } from "react";

export function SectionIntro({ eyebrow, title, children, center = false }: { eyebrow: string; title: string; children?: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-orange">{eyebrow}</p>
      <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-coreGreen md:text-5xl lg:text-6xl">{title}</h2>
      {children ? <div className="mt-6 max-w-2xl text-lg leading-8 text-black/68 md:text-xl md:leading-9">{children}</div> : null}
    </div>
  );
}
