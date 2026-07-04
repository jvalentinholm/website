import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-[#e6dcc8] bg-cx-coregreen text-white">
      <div className="container-cx grid gap-10 py-16 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Image src="/circlex-logo-core.png" alt="Circle X Group" width={160} height={50} className="mb-8 h-12 w-auto invert" />
          <h2 className="max-w-xl text-4xl font-semibold tracking-[-.04em] md:text-5xl">Let’s build the circular plastics industry together.</h2>
        </div>
        <div className="text-sm leading-7 text-white/78">
          <p className="font-semibold text-white">Circle X Group A/S</p>
          <p>Havnevej 10</p>
          <p>3300 Frederiksværk</p>
          <p>Denmark</p>
        </div>
        <div className="text-sm leading-7 text-white/78">
          <p className="font-semibold text-white">Contact</p>
          <p>info@circlexgroup.com</p>
          <p>circlexgroup.com</p>
        </div>
      </div>
      <div className="container-cx border-t border-white/14 py-6 text-sm text-white/60">© 2026 Circle X Group. From waste to value.</div>
    </footer>
  );
}
