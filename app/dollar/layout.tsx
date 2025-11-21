import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سعر الدولار اليوم - Dollar | EgyDragon",
  description:
    "تعرف على سعر الدولار مقابل الجنيه المصري مع تحديثات لحظية من EgyDragon. أسعار الصرف اليومية بسهولة.",
  keywords: [
    "سعر الدولار",
    "الدولار مقابل الجنيه",
    "سعر الصرف اليوم",
    "EgyDragon",
  ],
  openGraph: {
    title: "سعر الدولار اليوم - Dollar | EgyDragon",
    description: "آخر أسعار الدولار مقابل الجنيه المصري مع تحديثات مباشرة.",
    url: "https://egydragoneco.vercel.app/dollar",
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
