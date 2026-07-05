import { SectionIntro } from "@/components/ui/Section";
import { PillarIcon } from "@/components/illustrations/PillarIcon";

const pillars = [
  { title: "Feedstock", icon: "feedstock" as const, text: "Access to mixed, contaminated and low-value plastic waste streams." },
  { title: "Technology", icon: "technology" as const, text: "Friction-based conversion designed for continuous industrial operation." },
  { title: "Deployment", icon: "deployment" as const, text: "Replicable production lines and modular facility architecture." },
  { title: "Commercial", icon: "commercial" as const, text: "Offtake, certification and partnerships integrated across the value chain." },
];

export function PlatformPillars() {
  return (
    <section id="platform" className="bg-white py-24 md:py-32">
      <div className="cx-container">
        <SectionIntro eyebrow="The Circle X Platform" title="Four integrated systems. One scalable platform." center>
          <p>The platform combines feedstock access, proprietary conversion technology, modular deployment and commercial integration into one operating model.</p>
        </SectionIntro>
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, i) => (
            <article key={pillar.title} className="group relative overflow-hidden rounded-[1.75rem] bg-offWhite p-8 ring-1 ring-coreGreen/10 transition duration-300 hover:-translate-y-1 hover:shadow-card">
              <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-orange/10 transition group-hover:bg-orange/18" />
              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <PillarIcon type={pillar.icon} />
                  <span className="text-sm font-semibold text-orange">0{i + 1}</span>
                </div>
                <h3 className="text-3xl font-semibold tracking-[-0.03em] text-coreGreen">{pillar.title}</h3>
                <p className="mt-4 text-base leading-7 text-black/65">{pillar.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
