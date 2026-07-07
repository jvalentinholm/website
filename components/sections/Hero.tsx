import { Button } from "@/components/ui/Button";
import { VersionBadge } from "@/components/ui/VersionBadge";
import { ValueChainMark } from "@/components/illustrations/ValueChainMark";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-offWhite soft-grid">
      <div className="absolute right-[-18rem] top-[-18rem] h-[44rem] w-[44rem] rounded-full bg-white/55 blur-3xl" />
      <div className="absolute bottom-[-26rem] left-[-20rem] h-[48rem] w-[48rem] rounded-full bg-freshGreen/10 blur-3xl" />

      <div className="cx-container relative grid min-h-[calc(100vh-112px)] gap-16 pb-20 pt-10 md:pb-24 md:pt-14 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:gap-20 lg:pb-28">
        <div className="absolute right-6 top-6 md:right-10 lg:right-16">
          <VersionBadge />
        </div>

        <div className="max-w-5xl pt-12 md:pt-16 lg:pt-0">
          <p className="mb-7 max-w-fit rounded-full bg-white/72 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.30em] text-coreGreen ring-1 ring-coreGreen/10">
            Industrial platform for plastic circularity
          </p>

          <h1 className="max-w-5xl text-[58px] font-semibold leading-[.92] tracking-[-.068em] text-coreGreen md:text-[88px] lg:text-[104px] xl:text-[116px]">
            Plastic should never lose its value.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-black/68 md:text-2xl md:leading-10">
            We help businesses and organisations transform difficult plastic
            waste into certified circular feedstock for the production of new
            plastics.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Our modular platform enables local circular value chains by
            converting mixed plastic waste into a documented industrial
            resource.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#feedstock">
              Explore your waste stream
              <span className="ml-2">→</span>
            </Button>

            <Button href="#platform" variant="secondary">
              Discover the platform
            </Button>
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-black/54">
            For businesses, municipalities, waste companies, sorting
            facilities and organisations seeking a documented alternative to
            incineration and landfill.
          </p>
        </div>

        <div className="relative lg:pl-4">
          <ValueChainMark />
        </div>
      </div>
    </section>
  );
}