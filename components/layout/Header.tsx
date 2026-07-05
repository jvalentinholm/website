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
    <header className="sticky top-0 z-50 border-b border-coreGreen/10 bg-offWhite/92 backdrop-blur-xl">
      <div className="cx-container flex h-[104px] items-center justify-between">
        <Link href="/" className="flex h-[72px] items-center" aria-label="Circle X Group home">
          <Image src="/circlex-logo-core.png" alt="Circle X Group" width={160} height={160} className="h-[62px] w-auto object-contain" priority />
        </Link>
        <nav className="hidden items-center gap-8 text-[15px] font-medium text-black/72 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={label} href={href} className="transition hover:text-coreGreen">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="#contact" className="hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-coreGreen ring-1 ring-coreGreen/15 transition hover:bg-coreGreen hover:text-white md:inline-flex">
          Contact <span className="ml-2">→</span>
        </Link>
      </div>
    </header>
  );
}
