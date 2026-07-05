import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const cls =
    variant === "primary"
      ? "bg-orange text-white hover:bg-[#d08412]"
      : "border border-coreGreen/25 text-coreGreen hover:bg-coreGreen hover:text-white";

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition ${cls}`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
