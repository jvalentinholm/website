import { Button } from "@/components/ui/Button";
import { ValueFlowHero } from "@/components/illustrations/ValueFlowHero";
import { VersionBadge } from "@/components/ui/VersionBadge";

const proofPoints = ["Commercial production", "REACH registered", "ISCC+ certified"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-offWhite soft-grid">
      <div className="absolute right-[-18rem] top-[-18rem] h-[44rem] w-[44rem] rounded-full bg-white/55 blur-3xl" />
      <div className="absolute bottom-[-26rem] left-[-20rem] h-[48rem] w-[48rem] rounded-full bg-freshGreen/10 blur-3xl" />

      <div className="cx-container relative grid min-h-[calc(100vh-112px)] gap-14 pb-24 pt-10 md:pb-28 md:pt-14 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-16 lg:pb-32">
        <div className="absolute right-6 top-6 md:right-10 lg:right-16">
          <VersionBadge />
        </div>

        <div className="max-w-5xl pt-12 md:pt-16 lg:pt-0">
          <p className="mb-7 max-w-fit rounded-full bg-white/72 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.30em] text-coreGreen ring-1 ring-coreGreen/10">
            From Waste to Value
          </p>

          <h1 className="max-w-5xl text-[58px] font-semibold leading-[.92] tracking-[-.068em] text-coreGreen md:text-[88px] lg:text-[104px] xl:text-[116px]">
            Plastic should never lose its value.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-black/66 md:text-2xl md:leading-10">
            We transform difficult plastic waste into certified circular synthetic oil, enabling new plastics while creating lasting economic value.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact">Discuss your plastic waste stream <span className="ml-2">→</span></Button>
            <Button href="#platform" variant="secondary">Explore the platform</Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 border-t border-coreGreen/12 pt-6">
            {proofPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 rounded-full bg-white/72 px-4 py-2 text-sm font-semibold text-coreGreen ring-1 ring-coreGreen/10">
                <span className="h-2 w-2 rounded-full bg-orange" />
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="relative lg:pl-2">
          <ValueFlowHero />
        </div>
      </div>
    </section>
  );
}
