import GoldPricesEgypt from "./gold/page";
import CurrenciesPage from "./currencies/page";
import DollarPage from "./dollar/page";

export default function Home() {
  return (
    <main className="bg-[#f2f2f2] flex min-h-screen flex-col items-center justify-between p-6 gap-10">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#131E2B]">
          مرحبا بك في موقع أسعار اليوم
        </h1>
        <section className="mb-8">
          <GoldPricesEgypt />
        </section>
        <section className="mb-8">
          <DollarPage />
        </section>
        <section className="mb-8">
          <CurrenciesPage />
        </section>
      </div>
    </main>
  );
}
