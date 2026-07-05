import { SectionIntro } from "@/components/ui/Section";

const items = [
  ["Direct energy transfer", "Mechanical energy is delivered directly into the material flow rather than through large externally heated reactors."],
  ["Real-world waste", "Designed for mixed and contaminated plastic streams, not only clean laboratory-grade fractions."],
  ["Continuous operation", "A closed, oxygen-free process designed for industrial operation at normal atmospheric pressure."],
  ["Circular output", "Recovered hydrocarbons can be used as circular feedstock for refineries and petrochemical production."],
];

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 md:py-32">
      <div className="cx-container grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <SectionIntro eyebrow="Technology" title="Built around friction. Not combustion.">
          <p>Circle X uses a friction-based conversion process that shifts the critical parameters from large thermal reactor design to controlled mechanical energy input and material flow.</p>
        </SectionIntro>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map(([title, text]) => (
            <article key={title} className="rounded-[1.75rem] bg-white p-8 shadow-soft ring-1 ring-coreGreen/10">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-coreGreen">{title}</h3>
              <p className="mt-4 leading-7 text-black/65">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
