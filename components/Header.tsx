import Image from "next/image";

const nav = [
  { href: "#platform", label: "Platform" },
  { href: "#technology", label: "Technology" },
  { href: "#applications", label: "Applications" },
  { href: "#deployment", label: "Deployment" },
  { href: "#impact", label: "Impact" },
  { href: "#company", label: "Company" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e6dcc8] bg-cx-offwhite/92 backdrop-blur-xl">
      <div className="container-cx flex h-[104px] items-center justify-between gap-8">
        <a href="#top" className="flex items-center" aria-label="Circle X home">
          <Image
            src="/circlex-logo-core.png"
            alt="Circle X Group"
            width={184}
            height={58}
            priority
            className="h-[58px] w-auto object-contain"
          />
        </a>
        <nav className="hidden items-center gap-7 text-[15px] font-medium text-cx-black/75 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-cx-coregreen">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-cx-coregreen px-5 py-3 text-sm font-semibold text-cx-coregreen transition hover:bg-cx-coregreen hover:text-white md:inline-flex"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
