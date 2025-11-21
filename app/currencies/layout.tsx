import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "محول العملات - Converter",
  description:
    "صفحة محول العملات وأسعار الصرف العالمية من EgyDragon. حول بين العملات وتعرف على الأسعار المحدثة فورياً.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
