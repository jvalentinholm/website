import { SectionIntro } from "@/components/ui/Section";

const applications = [
  ["Waste management", "A new value route for residual plastic fractions currently sent to incineration or landfill."],
  ["Petrochemicals", "Circular feedstock for refineries and chemical plants producing new plastics."],
  ["Industrial partners", "A modular platform for regional deployment with feedstock and offtake partners."],
];

export function ApplicationsSection() {
  return (
    <section id="applications" className="bg-white py-24 md:py-32">
      <div className="cx-container">
        <SectionIntro eyebrow="Applications" title="One platform. Multiple value chains." center>
          <p>Circle X connects waste owners, industrial production sites and petrochemical customers in a circular feedstock system.</p>
        </SectionIntro>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {applications.map(([title, text]) => (
            <article key={title} className="rounded-[1.75rem] border border-coreGreen/12 bg-offWhite p-8 transition hover:-translate-y-1 hover:shadow-card">
              <div className="mb-10 h-1.5 w-16 rounded-full bg-orange" />
              <h3 className="text-3xl font-semibold tracking-[-0.035em] text-coreGreen">{title}</h3>
              <p className="mt-4 leading-7 text-black/65">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
