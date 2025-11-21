"use client";

import { useState, useEffect, useMemo } from "react";

type RatesResponse = {
  data: Record<string, { code: string; value: number }>;
};



export default function CurrenciesPage() {
  const [rates, setRates] = useState<RatesResponse | null>(null);
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EGP");

  useEffect(() => {
    fetch(
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_t17QckB7UiIxzJmpdYI40uzjbOrdY48gt6unYrBA"
    )
      .then((res) => res.json())
      .then((data: RatesResponse) => {
        setRates(data);
        // حفظ سعر الدولار مقابل الجنيه في localStorage
        if (data?.data?.EGP && data?.data?.USD) {
          // سعر الدولار مقابل الجنيه
          const usdEgp = data.data["EGP"].value / data.data["USD"].value;
          localStorage.setItem("usd_egp", JSON.stringify(usdEgp));
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const currencies = useMemo(
    () => (rates ? Object.keys(rates.data) : []),
    [rates]
  );

  const result = useMemo(() => {
    if (!rates) return 0;
    const usdToTarget = rates.data[to]?.value;
    const usdToFrom = rates.data[from]?.value;
    if (!usdToTarget || !usdToFrom) return 0;
    return (amount / usdToFrom) * usdToTarget;
  }, [amount, from, to, rates]);

  if (!rates) {
    return (
      <div className="text-center p-10 text-xl text-gray-500">
        جاري تحميل أسعار العملات...
      </div>
    );
  }

  return (
    <div className="w-full mx-auto py-10 px-2 bg-gray-100 min-h-screen">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center mb-10 text-[#131E2B]">
        أسعار العملات اليوم
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {["EGP", "EUR", "GBP", "SAR", "AED", "JPY"].map((cur) => (
          <div
            key={cur}
            className="p-6 rounded-2xl shadow-md bg-linear-to-br from-primary/30 to-white border border-gray-200 hover:shadow-xl hover:scale-105 transition transform"
          >
            <p className="text-xl font-semibold text-[#131E2B]">{cur}</p>
            <p className="text-2xl font-bold mt-2 text-primary">
              {rates.data[cur]?.value.toFixed(3)}
            </p>
          </div>
        ))}
      </div>

      {/* Converter */}
      <h2 className="text-3xl font-bold text-center mt-10 mb-6 text-[#131E2B]">
        محول العملات
      </h2>

      <div className="bg-white shadow-lg rounded-3xl p-8 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="p-4 w-full rounded-xl border border-gray-300 text-lg font-semibold bg-white text-gray-800 focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Amount"
          />
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="p-4 w-full rounded-xl border border-gray-300 text-lg font-semibold bg-[#131E2B] text-white focus:ring-2 focus:ring-primary focus:border-primary"
          >
            {currencies.map((c) => (
              <option key={c} value={c} className="bg-white text-gray-800">
                {c}
              </option>
            ))}
          </select>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="p-4 w-full rounded-xl border border-gray-300 text-lg font-semibold bg-[#131E2B] text-white focus:ring-2 focus:ring-primary focus:border-primary"
          >
            {currencies.map((c) => (
              <option key={c} value={c} className="bg-white text-gray-800">
                {c}
              </option>
            ))}
          </select>
          {/* Result */}
          <div className="text-center mt-8">
            <p className="text-3xl font-extrabold text-primary">
              {result.toFixed(3)} {to}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
