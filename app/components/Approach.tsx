const STEPS = [
  { n: "01", title: "Анализ ниши и продукта", copy: "Данные, аудит, гипотезы." },
  { n: "02", title: "Построение воронки продаж", copy: "Креативы, лидмагниты, маршруты." },
  { n: "03", title: "Привлечение и удержание лидов", copy: "Трафик, ретеншн, email." },
];

export default function Approach() {
  return (
    <section className="section bg-paper">
      <div className="max-w-3xl">
        <h2 className="text-ink text-3xl md:text-4xl font-extrabold mb-8">мой подход</h2>
        <div className="divide-y divide-neutral-200">
          {STEPS.map((s) => (
            <div key={s.n} className="py-6">
              <div className="text-lime text-[64px] md:text-[80px] leading-none font-extrabold">{s.n}</div>
              <div className="text-ink text-2xl md:text-3xl font-bold mt-2">{s.title}</div>
              <div className="text-muted mt-2 max-w-prose">{s.copy}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}