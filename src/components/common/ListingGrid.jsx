import { ArrowRight, Home, MapPin, Plus } from "lucide-react";

const specIconMap = {
  area: "https://cdn.prod.website-files.com/65e5e5474c606fdc3f19a597/6601ffc1f8cbcc407a3e5396_sqft-grey-icon-property-x-webflow-template.svg",
  bath: "https://cdn.prod.website-files.com/65e5e5474c606fdc3f19a597/6602000ababefde183ed47a1_bathrooms-grey-icon-property-x-webflow-template.svg",
  bed: "https://cdn.prod.website-files.com/65e5e5474c606fdc3f19a597/6601ffc13761ca06f9ca68ed_bedrooms-grey-icon-property-x-webflow-template.svg",
  parking:
    "https://cdn.prod.website-files.com/65e5e5474c606fdc3f19a597/6601ffc15a4d19701ac05dcb_parking-spots-grey-icon-property-x-webflow-template.svg",
};

export default function ListingGrid({ section }) {
  return (
    <section className="bg-[#f7f7f4] px-0 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-20">
      <div className="mx-auto w-full rounded-[0px] bg-[#171922] px-4 py-10 text-white sm:max-w-[1720px] sm:rounded-[36px] sm:px-10 sm:py-14 lg:px-20 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/6 px-4 py-2.5 text-[15px] font-medium text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                <Home size={14} />
              </span>
              {section.eyebrow}
            </div>
            <h2 className="mt-8 max-w-5xl text-[34px] font-semibold leading-[1.18] tracking-[-0.03em] text-white sm:text-[58px] sm:leading-[1.08]">
              {section.title}
            </h2>
          </div>

          <button className="inline-flex items-center gap-2.5 self-start text-[14px] font-medium text-white/95 transition hover:text-white sm:text-[16px] lg:self-auto">
            {section.actionLabel}
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="mt-10 grid gap-10">
          {section.items.map((item) => (
            <article key={item.title} className="max-w-[620px]">
              <div className="group relative overflow-hidden rounded-[26px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[260px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.045] sm:h-[340px]"
                />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-[#171922] px-4 py-2 text-[13px] font-semibold text-white sm:text-[15px]">
                  <Home size={14} />
                  {item.type}
                </div>
                <button className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#171922]">
                  <Plus size={22} />
                </button>
              </div>
              <h3 className="mt-5 text-[20px] font-semibold leading-[1.28] tracking-[-0.03em] text-white sm:text-[24px] sm:leading-[1.18]">
                {item.title}
              </h3>
              <div className="mt-2.5 flex items-center gap-2.5 text-[15px] leading-[1.4] text-white/90 sm:text-[17px]">
                <MapPin size={17} />
                <span>{item.location}</span>
              </div>
              <div className="mt-6 h-px w-full bg-white/14" />
              <div className="mt-5 flex flex-col gap-5 text-[#b3b6c2] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-5 sm:gap-6">
                  {item.specs?.map((spec) => {
                    const iconSrc = specIconMap[spec.type];

                    return (
                      <div key={`${item.title}-${spec.type}-${spec.label}`} className="flex items-center gap-2">
                        {iconSrc ? (
                          <img src={iconSrc} alt={`${spec.type} icon`} className="h-4 w-4 object-contain" />
                        ) : (
                          <Home size={16} />
                        )}
                        <span className="text-[14px] font-medium leading-[1.3] sm:text-[16px]">{spec.label}</span>
                      </div>
                    );
                  })}
                </div>

                <button className="inline-flex items-center gap-2.5 text-[14px] font-medium leading-[1.3] text-white transition hover:text-white/80 sm:text-[16px]">
                  {item.ctaLabel}
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
