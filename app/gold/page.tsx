"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GoldStats = {
  average: number;
  max: number;
  min: number;
  count: number;
  prices: number[];
};



export default function GoldPricesEgypt() {
  const [data, setData] = useState<GoldStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const karats = [
    "عيار 24",
    "عيار 22",
    "عيار 21",
    "عيار 18",
    "عيار 14",
    "عيار 10",
  ];

  useEffect(() => {
    fetch("/gold_stats.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(
          "فشل تحميل البيانات المحلية. تأكد من تشغيل سكريبت بايثون أولاً."
        );
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="text-center p-10 text-xl text-gray-600">
        جاري تحميل أسعار الذهب...
      </div>
    );

  if (error)
    return <div className="text-center p-10 text-xl text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-linear-to-b from-[#F2F2F2] via-[#e6ecf7] to-white py-10 px-4 flex flex-col items-center">
      {/* Title */}
      <div className="w-full flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-center text-[#131E2B] mb-2 drop-shadow-lg">
          أسعار الذهب اليوم في مصر
        </h1>
        <span className="inline-block w-16 h-1 bg-primary rounded-full mb-2"></span>
      </div>

      {/* Summary Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {data ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="price-card shadow-md border border-primary bg-white rounded-2xl p-4 flex flex-col items-center">
                <span className="label text-[#755575] text-sm">أعلى سعر</span>
                <span className="text-xl font-bold text-[#131E2B] mt-1">
                  {data.max.toLocaleString()} ج.م
                </span>
              </div>

              <div className="price-card shadow-md border border-[#131E2B] bg-white rounded-2xl p-4 flex flex-col items-center">
                <span className="label text-[#755575] text-sm">أقل سعر</span>
                <span className="text-xl font-bold text-[#131E2B] mt-1">
                  {data.min.toLocaleString()} ج.م
                </span>
              </div>

              <div className="price-card shadow-md border border-[#F2F2F2] bg-white rounded-2xl p-4 flex flex-col items-center">
                <span className="label text-[#755575] text-sm">
                  متوسط السعر
                </span>
                <span className="text-xl font-bold text-[#131E2B] mt-1">
                  {data.average.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}{" "}
                  ج.م
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center w-full text-gray-400">
            لا توجد بيانات أسعار متاحة حالياً.
          </div>
        )}
      </div>

      {/* Chart Image */}
      <div className="flex justify-center my-8 w-full">
        <div className="bg-white rounded-2xl shadow-xl border p-4 flex flex-col items-center">
          <Image
            src="/gold_stat.png"
            alt="تحليل أسعار الذهب"
            className="mx-auto rounded-xl shadow-lg border mb-2"
            style={{ maxWidth: 500 }}
            width={500}
            height={300}
          />
          <span className="text-[#131E2B] text-sm mt-2">
            رسم بياني لأسعار الذهب
          </span>
        </div>
      </div>

      {/* Table of Prices */}
      <h2 className="text-xl font-bold text-[#131E2B] mb-4 text-center">
        أسعار العيارات
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {data?.prices?.map((price, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[#F2F2F2] border shadow-sm hover:shadow-lg transition flex flex-col items-center"
          >
            <p className="text-lg font-semibold text-[#131E2B] mb-2">
              {karats[idx] || `عيار ${idx}`}
            </p>

            <p className="text-2xl font-bold text-primary">
              {price.toLocaleString()} ج.م
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
