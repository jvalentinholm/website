import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Circle X Group | Industrial platform for plastic circularity",
  description: "Circle X develops industrial technology transforming low-value plastic waste into circular feedstock for new plastics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
