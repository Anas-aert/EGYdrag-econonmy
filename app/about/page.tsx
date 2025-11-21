import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F2F2F2]">
      {/* Hero Section */}
      <section className="bg-[#131E2B] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">من نحن</h1>
          <p className="text-lg text-[#F2F2F2]">
            مرحباً بك في{" "}
            <span className="font-semibold text-primary">EgyDragon</span> –
            نبني حلولاً رقمية حديثة تجعل حياتك أسهل وأكثر ذكاءً.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <Image
              src="/Team2.png"
              alt="فريق العمل"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#131E2B]">من نحن</h2>
            <p className="text-[#755575] leading-relaxed mb-4">
              نحن فريق شغوف من المطورين والمصممين والمبدعين نؤمن بقوة التقنية في
              حل مشاكل الحياة الواقعية. هدفنا تقديم منتجات عالية الجودة تجمع بين
              تجربة المستخدم الرائعة والأداء القوي.
            </p>
            <p className="text-[#755575] leading-relaxed">
              منذ انطلاقنا، ونحن ملتزمون بالابتكار والعمل الجماعي والتطوير
              المستمر لخدمة مستخدمينا بشكل أفضل.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#131E2B]">
            ما الذي يدفعنا؟
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F2F2F2] p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                🚀 رسالتنا
              </h3>
              <p className="text-[#755575]">
                تقديم حلول رقمية حديثة وقابلة للتوسع وسهلة الاستخدام تمكّن
                الأفراد والشركات.
              </p>
            </div>

            <div className="bg-[#F2F2F2] p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-[#131E2B]">
                🌍 رؤيتنا
              </h3>
              <p className="text-[#755575]">
                أن نكون رواداً في تقديم حلول تقنية مبتكرة على مستوى العالم.
              </p>
            </div>

            <div className="bg-[#F2F2F2] p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                💡 قيمنا
              </h3>
              <p className="text-[#755575]">
                الابتكار، العمل الجماعي، الشفافية، والسعي الدائم نحو التميز.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#131E2B] text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">انضم إلينا في رحلتنا</h2>
        <p className="mb-6 text-[#F2F2F2]">
          دائماً نبحث عن المواهب والشركاء الجدد. لنصنع المستقبل معاً.
        </p>
        <a
          href="/contact"
          className="bg-primary text-[#131E2B] px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#FFD740] transition"
        >
          تواصل معنا
        </a>
      </section>
    </main>
  );
}
