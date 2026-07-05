import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles = {
    primary: "bg-orange text-white hover:bg-[#d58913] shadow-[0_12px_28px_rgba(229,149,21,.22)]",
    secondary: "bg-white text-coreGreen ring-1 ring-coreGreen/20 hover:ring-coreGreen/40 hover:bg-white/80",
    ghost: "text-coreGreen hover:text-orange",
  };
  return (
    <Link href={href} className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition duration-200 ${styles[variant]}`}>
      {children}
    </Link>
  );
}
