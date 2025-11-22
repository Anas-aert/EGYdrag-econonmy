import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
  display: "swap", // أسرع للـ CLS
});

export const metadata: Metadata = {
  title: "Asaar Elyoum",
  description:
    "Araar Elyoum is a news place helps you know the economic information from Egydragon",
};

function Navigator() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  const economicLinks = [
    { href: "/dollar", label: "الدولار" },
    { href: "/gold", label: "الذهب" },
    { href: "/currencies", label: "العملات" },
  ];
  const generalLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "عنا" },
    { href: "/contact", label: "تواصل" },
  ];
  return (
    <nav className="w-full p-2.5 text-[#F2F2F2] bg-[#131E2B] flex justify-between items-center">
      <div className="flex gap-6">
        {economicLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative px-2 py-1 font-semibold transition-colors duration-150 ${
              pathname === link.href
                ? "border-b-2 border-primary text-primary"
                : "hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-6">
        {generalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative px-2 py-1 font-semibold transition-colors duration-150 ${
              pathname === link.href
                ? "border-b-2 border-primary text-primary"
                : "hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="K_ia_fdAuYdnwaITlI-2Khh1EnbHbDojnvzzwHsbCDs"
        />
      </head>
      <body className={`text-[#131E2B] ${cairo.className}`}>
        <Navigator />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
