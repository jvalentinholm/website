import { Button } from "@/components/ui/Button";

const streams = [
  "Mixed plastic fractions",
  "Contaminated plastics",
  "Sorting residues",
  "Municipal waste fractions",
  "Industrial plastic waste",
  "Black plastic",
  "Flexible plastics",
  "Complex plastic streams",
];

export function FeedstockTeaser() {
  return (
    <section id="feedstock" className="bg-white pb-20 pt-10 md:pb-28 md:pt-16">
      <div className="cx-container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.30em] text-orange">Waste owners</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-coreGreen md:text-6xl">
            Keep difficult plastic in the value chain.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-black/64">
            Circle X can evaluate mixed and difficult plastic waste streams and help turn them into documented circular feedstock instead of incineration, landfill or low-value recovery.
          </p>
          <div className="mt-8">
            <Button href="#contact">Start a feedstock dialogue <span className="ml-2">→</span></Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-coreGreen/12 bg-offWhite/50 p-6 md:p-8">
          <div className="flex flex-wrap gap-3">
            {streams.map((stream) => (
              <span key={stream} className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-coreGreen ring-1 ring-coreGreen/12">
                {stream}
              </span>
            ))}
          </div>
          <p className="mt-8 border-t border-coreGreen/12 pt-6 text-sm leading-7 text-black/56">
            Each waste stream is evaluated individually to ensure compatibility with the Circle X process and to maintain consistent product quality.
          </p>
        </div>
      </div>
    </section>
  );
}
