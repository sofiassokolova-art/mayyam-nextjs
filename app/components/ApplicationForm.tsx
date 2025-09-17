"use client";
function Field({ label, children }: any) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

export default function ApplicationForm() {
  return (
    <section className="section bg-paper">
      <div className="max-w-2xl">
        <h2 className="text-ink text-4xl md:text-5xl font-extrabold">Заполните анкету</h2>
        <p className="text-muted mt-2 mb-8">Я выбираю проекты, с которыми работаю.</p>

        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-5">
          <Field label="Имя">
            <input className="w-full rounded-xl border-neutral-300 focus:border-lime focus:ring-lime" required />
          </Field>
          <Field label="Ниша / бизнес">
            <input className="w-full rounded-xl border-neutral-300 focus:border-lime focus:ring-lime" required />
          </Field>
          <Field label="Основной запрос">
            <select className="w-full rounded-xl border-neutral-300 focus:border-lime focus:ring-lime">
              <option>Увеличить продажи</option>
              <option>Построить воронку</option>
              <option>Масштабирование</option>
            </select>
          </Field>
          <Field label="Бюджет / готовность к инвестициям">
            <input className="w-full rounded-xl border-neutral-300 focus:border-lime focus:ring-lime" />
          </Field>
          <Field label="Контакты (email / телеграм)">
            <input type="email" className="w-full rounded-xl border-neutral-300 focus:border-lime focus:ring-lime" />
          </Field>

          <button className="mt-2 h-14 rounded-full bg-lime text-ink font-extrabold hover:shadow-glow">
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}