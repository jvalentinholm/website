import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PlatformIllustration } from "@/components/illustrations/PlatformIllustration";
import { Button } from "@/components/ui/Button";
import { SectionIntro } from "@/components/ui/Section";

const pillars = [
  ["Feedstock", "Access to mixed, low-value and contaminated plastic waste streams."],
  ["Technology", "Friction-based conversion designed for continuous industrial operation."],
  ["Deployment", "Replicable production lines designed for modular scale-up."],
  ["Commercial", "Offtake, certification and partnerships integrated across the value chain."],
];

const metrics = [
  ["1,250 kg/h", "Documented processing capacity per production line"],
  ["60–70%", "Typical oil yield, feedstock dependent"],
  ["TRL 8", "Operational validation and industrial qualification"],
  ["Modular", "Designed for replication and regional rollout"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-offWhite text-black">
      <Header />

      <section className="mx-auto grid max-w-[1440px] gap-16 px-6 pb-24 pt-20 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-16 lg:pt-28">
        <div className="flex flex-col justify-center">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.34em] text-coreGreen">From waste to value for people & planet</p>
          <h1 className="max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.05em] text-coreGreen md:text-7xl lg:text-8xl">
            Building the industrial platform for plastic circularity.
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-black/70">
            Circle X develops industrial technology that transforms low-value plastic waste into circular feedstock for new plastics.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#platform">Explore the platform</Button>
            <Button href="#technology" variant="secondary">See how it works</Button>
          </div>
        </div>
        <PlatformIllustration />
      </section>

      <section id="platform" className="bg-white py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionIntro eyebrow="The Circle X Platform" title="Everything required to make plastic circularity industrial.">
            <p>The platform combines feedstock access, proprietary conversion technology, modular deployment and commercial integration into one scalable operating model.</p>
          </SectionIntro>
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {pillars.map(([title, text], i) => (
              <div key={title} className="rounded-[1.5rem] border border-coreGreen/15 bg-offWhite p-7 transition hover:-translate-y-1 hover:shadow-soft">
                <p className="mb-8 text-sm font-semibold text-orange">0{i + 1}</p>
                <h3 className="text-2xl font-semibold text-coreGreen">{title}</h3>
                <p className="mt-4 leading-7 text-black/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
          <SectionIntro eyebrow="Technology" title="Built around friction. Not combustion.">
            <p>Instead of relying on large externally heated reactors, Circle X transfers mechanical energy directly into the material flow, enabling a compact, continuous conversion process.</p>
          </SectionIntro>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Real-world feedstock", "Designed for mixed and contaminated plastic streams."],
              ["Continuous process", "Closed, oxygen-free system at normal atmospheric pressure."],
              ["Compact architecture", "Direct energy transfer reduces reliance on large heat inventories."],
              ["Circular output", "Oil for refineries and petrochemical production."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.5rem] bg-white p-7 shadow-soft">
                <h3 className="text-xl font-semibold text-coreGreen">{title}</h3>
                <p className="mt-3 leading-7 text-black/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="bg-white py-20">
        <div className="mx-auto grid max-w-[1440px] gap-4 px-6 md:grid-cols-4 md:px-10 lg:px-16">
          {metrics.map(([value, label]) => (
            <div key={value} className="border-l border-coreGreen/15 p-8 first:border-l-0">
              <p className="text-4xl font-semibold text-coreGreen">{value}</p>
              <p className="mt-3 text-sm leading-6 text-black/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="applications" className="py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionIntro eyebrow="Applications" title="One platform. Multiple value chains.">
            <p>Circle X is designed to connect waste owners, industrial production sites and petrochemical customers in a circular feedstock system.</p>
          </SectionIntro>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Waste management", "A new value route for residual plastic fractions."],
              ["Petrochemicals", "Circular feedstock for new plastic production."],
              ["Industrial partners", "Scalable deployment through partnerships and regional rollout."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.5rem] border border-coreGreen/15 bg-white p-8">
                <h3 className="text-2xl font-semibold text-coreGreen">{title}</h3>
                <p className="mt-4 leading-7 text-black/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
