import { Button } from "@/components/ui/Button";

export function CompanySection() {
  return (
    <section id="company" className="bg-white py-24 md:py-32">
      <div className="cx-container grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-orange">Company</p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-coreGreen md:text-6xl">Engineering the future of plastic circularity.</h2>
        </div>
        <div className="rounded-[1.75rem] bg-offWhite p-8 ring-1 ring-coreGreen/10">
          <p className="text-lg leading-8 text-black/68">Circle X develops industrial technology that enables difficult plastic waste to become a valuable raw material again. Founded in Denmark. Built for global deployment.</p>
          <div className="mt-8"><Button href="#contact" variant="secondary">Talk to us</Button></div>
        </div>
      </div>
    </section>
  );
}
