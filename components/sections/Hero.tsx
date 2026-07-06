import { Button } from "@/components/ui/Button";
import { PlatformHero } from "@/components/illustrations/PlatformHero";
import { VersionBadge } from "@/components/ui/VersionBadge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-offWhite soft-grid">
      <div className="absolute right-[-18rem] top-[-18rem] h-[44rem] w-[44rem] rounded-full bg-white/50 blur-3xl" />
      <div className="absolute bottom-[-24rem] left-[-20rem] h-[46rem] w-[46rem] rounded-full bg-freshGreen/10 blur-3xl" />

      <div className="cx-container relative grid min-h-[calc(100vh-112px)] gap-12 pb-24 pt-10 md:pb-28 md:pt-14 lg:grid-cols-[.94fr_1.06fr] lg:items-center lg:gap-16 lg:pb-32 lg:pt-18">
        <div className="absolute right-6 top-6 md:right-10 lg:right-16">
          <VersionBadge />
        </div>

        <div className="max-w-4xl pt-12 md:pt-14 lg:pt-0">
          <p className="mb-7 max-w-fit rounded-full bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.30em] text-coreGreen ring-1 ring-coreGreen/10">
            From waste to value
          </p>
          <h1 className="text-[54px] font-semibold leading-[.93] tracking-[-.065em] text-coreGreen md:text-[82px] lg:text-[98px] xl:text-[108px]">
            Building the industrial platform for plastic circularity.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-black/66 md:text-2xl md:leading-10">
            Industrial technology converting low-value plastic waste into high-value circular feedstock for new plastic production.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#platform">Explore the platform <span className="ml-2">→</span></Button>
            <Button href="#technology" variant="secondary">See how it works</Button>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-coreGreen/12 pt-6 text-sm text-black/56">
            <div><strong className="block text-base text-coreGreen">Continuous</strong>process</div>
            <div><strong className="block text-base text-coreGreen">Modular</strong>deployment</div>
            <div><strong className="block text-base text-coreGreen">Certified</strong>feedstock</div>
          </div>
        </div>

        <div className="relative lg:pl-4">
          <PlatformHero />
        </div>
      </div>
    </section>
  );
}
