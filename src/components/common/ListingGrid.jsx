import { ArrowRight, Bath, BedDouble, CarFront, Home, MapPin, Plus, Ruler } from "lucide-react";

const specIconMap = {
  area: Ruler,
  bath: Bath,
  bed: BedDouble,
  parking: CarFront,
};

export default function ListingGrid({ section }) {
  return (
    <section className="bg-[#f7f7f4] px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-[1740px] rounded-[2.5rem] bg-[#171922] px-6 py-10 text-white sm:px-12 sm:py-14 lg:px-24 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/6 px-4 py-2.5 text-[1rem] font-medium text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <Home size={17} />
              </span>
              {section.eyebrow}
            </div>
            <h2 className="mt-8 max-w-5xl text-[3rem] font-semibold tracking-[-0.06em] text-white sm:text-[4.2rem]">
              {section.title}
            </h2>
          </div>

          <button className="inline-flex items-center gap-3 self-start text-[1rem] font-medium text-white/95 transition hover:text-white sm:text-[1.1rem] lg:self-auto">
            {section.actionLabel}
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-12 grid gap-12">
          {section.items.map((item) => (
            <article key={item.title} className="max-w-[760px]">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img src={item.image} alt={item.title} className="h-[280px] w-full object-cover sm:h-[455px]" />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-[#171922] px-5 py-3 text-[1rem] font-semibold text-white sm:text-[1.05rem]">
                  <Home size={16} />
                  {item.type}
                </div>
                <button className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#171922]">
                  <Plus size={28} />
                </button>
              </div>
              <h3 className="mt-7 text-[2rem] font-semibold tracking-[-0.05em] text-white sm:text-[2.25rem]">
                {item.title}
              </h3>
              <div className="mt-3 flex items-center gap-3 text-[1.05rem] text-white/90 sm:text-[1.1rem]">
                <MapPin size={20} />
                <span>{item.location}</span>
              </div>
              <div className="mt-8 h-px w-full bg-white/14" />
              <div className="mt-7 flex flex-col gap-6 text-[#b3b6c2] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                  {item.specs?.map((spec) => {
                    const Icon = specIconMap[spec.type] ?? Home;

                    return (
                      <div key={`${item.title}-${spec.type}-${spec.label}`} className="flex items-center gap-2.5">
                        <Icon size={19} />
                        <span className="text-[1.05rem] font-medium sm:text-[1.1rem]">{spec.label}</span>
                      </div>
                    );
                  })}
                </div>

                <button className="inline-flex items-center gap-3 text-[1.05rem] font-medium text-white transition hover:text-white/80 sm:text-[1.1rem]">
                  {item.ctaLabel}
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
