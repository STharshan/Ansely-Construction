export default function AgentOverview({ overview, contactCards }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Introduction
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {overview.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
            {overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {overview.bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4">
          {contactCards.map((card) => (
            <article
              key={card.label}
              className="rounded-[1.75rem] border border-slate-200 bg-stone-50 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                {card.label}
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {card.value}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
