import Image from "next/image";
import Link from "next/link";

const nav = ["Platform", "Technology", "Applications", "Deployment", "Impact", "Company", "News"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-28 max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center">
          <Image src="/circlex-logo-core.png" alt="Circle X Group" width={128} height={128} className="h-20 w-auto object-contain" priority />
        </Link>
        <nav className="hidden items-center gap-9 text-[15px] font-medium text-black/80 lg:flex">
          {nav.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-coreGreen">
              {item}
            </Link>
          ))}
        </nav>
        <Link href="#contact" className="hidden rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d08412] md:inline-flex">
          Contact us <span className="ml-3">→</span>
        </Link>
      </div>
    </header>
  );
}
