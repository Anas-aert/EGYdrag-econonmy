import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الدولار - Dollar",
  description:
    "صفحة سعر الدولار مقابل الجنيه المصري مع تحديثات محلية من EgyDragon. تعرف على آخر سعر صرف الدولار بسهولة.",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
