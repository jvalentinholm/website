import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="bg-coreGreen text-offWhite">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-[1fr_1.3fr_1fr] md:px-10 lg:px-16">
        <div>
          <Image src="/circlex-logo-core.png" alt="Circle X Group" width={108} height={108} className="mb-8 h-24 w-auto brightness-0 invert" />
          <p className="max-w-xs text-sm leading-7 text-offWhite/75">Industrial platform for plastic circularity. From waste to value for people and planet.</p>
        </div>
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-offWhite/60">Next step</p>
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">Let's build the circular plastics industry together.</h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white" href="mailto:info@circlexgroup.com">Talk to us →</a>
            <a className="rounded-full border border-offWhite/30 px-6 py-3 text-sm font-semibold" href="mailto:info@circlexgroup.com">Visit our facility →</a>
          </div>
        </div>
        <div className="text-sm leading-7 text-offWhite/75 md:text-right">
          <p className="font-semibold text-offWhite">Circle X Group A/S</p>
          <p>Havnevej 10<br />3300 Frederiksværk<br />Denmark</p>
          <p className="mt-4">info@circlexgroup.com</p>
        </div>
      </div>
    </footer>
  );
}
