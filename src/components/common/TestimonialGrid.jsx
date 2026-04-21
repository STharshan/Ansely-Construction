import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";

export default function TestimonialGrid({ section }) {
  return (
    <section className="bg-[#f7f7f4] px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-[1520px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-[#ececf1] px-4 py-2.5 text-[1rem] font-medium text-[#161821]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b6b8c6] text-white">
                <Newspaper size={16} />
              </span>
              {section.eyebrow}
            </div>
            <h2 className="mt-8 text-[3rem] font-semibold tracking-[-0.06em] text-[#161821] sm:text-[4.2rem]">
              {section.title}
            </h2>
          </div>

          <button className="inline-flex items-center gap-3 self-start text-[1rem] font-medium text-[#161821] transition hover:text-black sm:text-[1.1rem] lg:self-auto">
            {section.actionLabel}
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-10 grid gap-8 lg:max-w-[1040px] lg:grid-cols-2">
          {section.items.map((item) => (
            <article key={item.title}>
              <div className="relative overflow-hidden rounded-[2rem]">
                <img src={item.image} alt={item.title} className="h-[300px] w-full object-cover sm:h-[430px]" />
                <div className="absolute left-6 top-6 rounded-full bg-white px-5 py-3 text-[1rem] font-medium text-[#161821] shadow-sm">
                  {item.category}
                </div>
              </div>
              <h3 className="mt-7 max-w-xl text-[2rem] font-semibold leading-[1.1] tracking-[-0.05em] text-[#161821] sm:text-[2.25rem]">
                {item.title}
              </h3>
              <div className="mt-8 flex items-center justify-between gap-4 text-[1rem] sm:text-[1.05rem]">
                <div className="flex items-center gap-3 text-[#afb2bf]">
                  <CalendarDays size={20} />
                  <span>{item.date}</span>
                </div>
                <button className="inline-flex items-center gap-3 font-medium text-[#161821] transition hover:text-black">
                  Read more
                  <ArrowRight size={20} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
