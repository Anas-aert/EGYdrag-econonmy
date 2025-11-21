import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الذهب - Gold",
  description:
    "صفحة أسعار وتحليل الذهب في مصر لحظة بلحظة من EgyDragon. تعرف على أسعار العيارات المختلفة وملخص السوق.",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
