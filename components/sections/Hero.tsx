import { Button } from "@/components/ui/Button";
import { PlatformHero } from "@/components/illustrations/PlatformHero";

export function Hero() {
  return (
    <section className="soft-grid">
      <div className="cx-container grid min-h-[calc(100vh-104px)] gap-14 pb-24 pt-16 md:pt-20 lg:grid-cols-[.96fr_1.04fr] lg:items-center lg:pb-28 lg:pt-24">
        <div>
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.36em] text-orange">From waste to value for people & planet</p>
          <h1 className="max-w-5xl text-[56px] font-semibold leading-[.93] tracking-[-.065em] text-coreGreen md:text-[80px] lg:text-[94px]">
            Building the industrial platform for plastic circularity.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-black/68 md:text-2xl md:leading-10">
            Industrial technology converting low-value plastic waste into circular feedstock for new plastic production.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#platform">Explore the platform <span className="ml-2">→</span></Button>
            <Button href="#technology" variant="secondary">See how it works</Button>
          </div>
        </div>
        <PlatformHero />
      </div>
    </section>
  );
}
