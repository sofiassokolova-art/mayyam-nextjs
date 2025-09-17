const POINTS = [
  { n: "01", title: "Делаю эффективные продукты", desc: "Выстраиваю стратегию и систему роста." },
  { n: "02", title: "Разрабатываю решения для масштабирования", desc: "Строю воронки, систему лидов, email‑маркетинг." },
  { n: "03", title: "Фокус на выручке и ROI", desc: "Всё измеримо, результативно и прозрачно." },
];

export default function WorkWithMaryam() {
  return (
    <section className="section bg-paper">
      <h2 className="text-ink text-3xl md:text-4xl font-extrabold mb-12">С чем работает Марьям</h2>
      <div className="space-y-10 md:space-y-16">
        {POINTS.map((p) => (
          <div key={p.n} className="flex items-start gap-6">
            <div className="text-lime font-extrabold text-4xl md:text-6xl leading-none">{p.n}</div>
            <div>
              <h3 className="text-ink text-xl md:text-2xl font-bold">{p.title}</h3>
              <p className="text-muted mt-2 text-base md:text-lg">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}