"use client";

import { useState } from "react";


export default function DollarPage() {
  const [dollar] = useState<number | null>(() => {
    try {
      const value = localStorage.getItem("usd_egp");
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  });

  const [loading] = useState<boolean>(() => false);

  const [error] = useState<string>(() => {
    try {
      const value = localStorage.getItem("usd_egp");
      if (value) return "";
      return "لم يتم العثور على سعر الدولار. يرجى زيارة صفحة العملات أولاً.";
    } catch {
      return "حدث خطأ أثناء قراءة سعر الدولار.";
    }
  });

  if (loading)
    return (
      <div className="text-center p-10 text-xl text-gray-600">
        جاري تحميل سعر الدولار...
      </div>
    );

  if (error)
    return <div className="text-center p-10 text-xl text-red-500">{error}</div>;

  return (
    <div className="min-w-full mx-auto py-10 px-4 flex flex-col items-center min-h-screen bg-linear-to-b from-[#F2F2F2] via-[#e6ecf7] to-white">
      <h1 className="text-3xl font-bold text-center text-[#131E2B] mb-8 drop-shadow-lg">
        سعر الدولار مقابل الجنيه المصري
      </h1>
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200 flex flex-col items-center">
        <span className="text-5xl font-bold text-primary mb-4">
          {dollar?.toLocaleString(undefined, { maximumFractionDigits: 3 })} ج.م
        </span>
        <span className="text-[#131E2B] text-lg">
          آخر تحديث الأن
        </span>
      </div>
    </div>
  );
}
