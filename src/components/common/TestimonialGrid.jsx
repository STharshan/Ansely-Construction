import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";

export default function TestimonialGrid({ section }) {
  return (
    <section className="bg-[#f7f7f4] px-0 py-10 sm:px-10 sm:py-14 lg:px-32 lg:py-20">
      <div className="mx-auto w-full px-4 sm:max-w-[1480px] sm:px-0">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-[#ececf1] px-4 py-2.5 text-[15px] font-medium text-[#161821]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b6b8c6] text-white">
                <Newspaper size={14} />
              </span>
              {section.eyebrow}
            </div>
            <h2 className="mt-7 text-[28px] font-semibold tracking-[-0.03em] text-[#161821] sm:text-[52px]">
              {section.title}
            </h2>
          </div>

          <button className="inline-flex items-center gap-2.5 self-start text-[14px] font-medium text-[#161821] transition hover:text-black sm:text-[15px] lg:self-auto">
            {section.actionLabel}
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="mt-10 grid gap-6 lg:max-w-[950px] lg:grid-cols-2">
          {section.items.map((item) => (
            <article key={item.title} className="group px-1 sm:px-2">
              <div className="relative overflow-hidden rounded-[28px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[260px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] sm:h-[380px]"
                />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] font-medium text-[#161821] shadow-sm">
                  <Newspaper size={14} />
                  {item.category}
                </div>
              </div>
              <h3 className="mt-5 max-w-xl text-[18px] font-semibold leading-[1.14] tracking-[-0.03em] text-[#161821] sm:text-[24px]">
                {item.title}
              </h3>
              <div className="mt-7 flex items-center justify-between gap-4 text-[14px] sm:text-[15px]">
                <div className="flex items-center gap-3 text-[#afb2bf]">
                  <CalendarDays size={18} />
                  <span>{item.date}</span>
                </div>
                <button className="inline-flex items-center gap-3 font-medium text-[#161821] transition hover:text-black">
                  Read more
                  <ArrowRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
