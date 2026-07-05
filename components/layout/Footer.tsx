import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-coreGreen text-white">
      <div className="cx-container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-orange">Contact</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">Let’s build the circular plastics industry together.</h2>
          </div>
          <div className="rounded-[1.75rem] bg-white/9 p-8 ring-1 ring-white/12">
            <p className="text-lg leading-8 text-white/78">Circle X Group A/S<br />Havnevej 10<br />3300 Frederiksværk, Denmark</p>
            <Link href="mailto:info@circlexgroup.com" className="mt-6 inline-flex rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d58913]">info@circlexgroup.com</Link>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-8 border-t border-white/12 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="rounded-2xl bg-white p-3">
            <Image src="/circlex-logo-core.png" alt="Circle X Group" width={96} height={96} className="h-14 w-auto object-contain" />
          </div>
          <p className="text-sm text-white/60">© 2026 Circle X Group. From waste to value for people & planet.</p>
        </div>
      </div>
    </footer>
  );
}
