import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أسعار الذهب اليوم في مصر | EgyDragon",
  description:
    "صفحة أسعار الذهب في مصر لحظة بلحظة من EgyDragon. تعرف على أسعار العيارات المختلفة وتحليل السوق.",
  keywords: ["سعر الذهب", "الذهب في مصر", "أسعار العيارات", "EgyDragon"],
  openGraph: {
    title: "أسعار الذهب اليوم في مصر | EgyDragon",
    description: "آخر أسعار وتحليل الذهب في مصر مع تحديثات مباشرة.",
    url: "https://egydragon.com/gold",
    siteName: "EgyDragon",
    locale: "ar_EG",
    type: "website",
  },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}