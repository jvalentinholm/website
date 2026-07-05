import { SectionIntro } from "@/components/ui/Section";

export function DeploymentSection() {
  return (
    <section id="deployment" className="py-24 md:py-32">
      <div className="cx-container grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <SectionIntro eyebrow="Deployment" title="Designed for replication, not one-off facilities.">
          <p>The growth model is based on adding identical production lines and deploying regional facilities where suitable plastic waste streams, industrial infrastructure and offtake access align.</p>
        </SectionIntro>
        <div className="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-coreGreen/10">
          <div className="grid gap-4 md:grid-cols-3">
            {["Frederiksværk", "Multi-line site", "Regional rollout"].map((step, index) => (
              <div key={step} className="relative rounded-[1.35rem] bg-offWhite p-6 text-center">
                <p className="text-sm font-semibold text-orange">0{index + 1}</p>
                <p className="mt-4 text-xl font-semibold text-coreGreen">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 h-2 rounded-full bg-offWhite">
            <div className="h-2 w-2/3 rounded-full bg-orange" />
          </div>
          <p className="mt-5 text-sm leading-6 text-black/55">Platform build → new facility build → regional deployment.</p>
        </div>
      </div>
    </section>
  );
}
