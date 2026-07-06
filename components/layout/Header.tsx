import Image from "next/image";
import Link from "next/link";

const nav = [
  ["Platform", "#platform"],
  ["Technology", "#technology"],
  ["Applications", "#applications"],
  ["Deployment", "#deployment"],
  ["Impact", "#impact"],
  ["Company", "#company"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-coreGreen/10 bg-offWhite/90 backdrop-blur-2xl">
      <div className="cx-container flex h-[112px] items-center justify-between gap-8 lg:h-[104px]">
        <Link href="/" className="flex h-[76px] shrink-0 items-center" aria-label="Circle X Group home">
          <Image
            src="/circlex-logo-core.png"
            alt="Circle X Group"
            width={160}
            height={160}
            className="h-[58px] w-auto object-contain md:h-[62px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-[14px] font-medium text-black/66 xl:flex">
          {nav.map(([label, href]) => (
            <Link key={label} href={href} className="rounded-full px-1 py-2 transition hover:text-coreGreen">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full bg-white/75 px-5 py-3 text-sm font-semibold text-coreGreen ring-1 ring-coreGreen/15 transition hover:bg-coreGreen hover:text-white md:inline-flex"
          >
            Contact <span className="ml-2">→</span>
          </Link>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-coreGreen ring-1 ring-coreGreen/15 xl:hidden" aria-label="Open menu">
            <span className="block h-[2px] w-5 bg-current shadow-[0_6px_0_current,0_-6px_0_current]" />
          </button>
        </div>
      </div>
    </header>
  );
}
