import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "محول العملات وأسعار الصرف العالمية | EgyDragon",
  description:
    "استخدم محول العملات من EgyDragon لمعرفة أسعار الصرف العالمية المحدثة فورياً. حول بين العملات بسهولة.",
  keywords: ["محول العملات", "أسعار الصرف", "تحويل العملات", "EgyDragon"],
  openGraph: {
    title: "محول العملات وأسعار الصرف العالمية | EgyDragon",
    description: "حول بين العملات وتعرف على الأسعار المحدثة لحظة بلحظة.",
    url: "https://egydragoneco.vercel.app/converter",
    siteName: "EgyDragon",
    locale: "ar_EG",
    type: "website",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
