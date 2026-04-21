import SectionIntro from "./SectionIntro";

export default function FeatureCardGrid({ section }) {
  return (
    <section className="bg-stone-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionIntro title={section.title} description={section.description} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {section.items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-6 h-12 w-12 rounded-2xl bg-emerald-100" />
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
