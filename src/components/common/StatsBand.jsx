import SectionIntro from "./SectionIntro";

export default function StatsBand({ section }) {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow="Track Record"
          title={section.title}
          description="Metrics can be swapped per profile without touching the JSX structure."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {section.items.map((item) => (
            <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="text-4xl font-semibold tracking-tight text-emerald-300">{item.value}</p>
              <p className="mt-3 text-base text-stone-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
