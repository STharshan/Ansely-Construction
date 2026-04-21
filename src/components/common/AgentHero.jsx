import { ArrowRight, BriefcaseBusiness, Copy, Mail, MapPin, Phone } from "lucide-react";

const iconMap = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  position: BriefcaseBusiness,
};

export default function AgentHero({ profileCard, about, experience }) {
  return (
    <section className="bg-[#f7f7f4] px-5 py-8 sm:px-8 sm:py-12 lg:px-14 lg:py-16">
      <div className="mx-auto grid max-w-[1520px] gap-14 lg:grid-cols-[610px_minmax(0,1fr)] lg:items-start">
        <aside className="rounded-[2rem] border border-[#eceae4] bg-[#fffefb] shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
          <div className="overflow-hidden rounded-t-[2rem]">
            <div className="relative h-[210px] bg-[#191b24]">
              <img src={profileCard.cover} alt="" className="h-full w-full object-cover opacity-18" />
            </div>
          </div>

          <div className="px-8 pb-9 pt-7 sm:px-10">
            <div className="flex items-start justify-between gap-4">
              <div className="-mt-[4.8rem] shrink-0 rounded-full bg-[#fffefb] p-[8px] shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                <img
                  src={profileCard.image}
                  alt={profileCard.name}
                  className="h-[7.2rem] w-[7.2rem] rounded-full object-cover object-top"
                />
              </div>
              <button className="mt-2 inline-flex items-center gap-3 rounded-full bg-[#1d1f28] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-black sm:px-7 sm:text-lg">
                {profileCard.contactButtonLabel}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1d1f28]">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>

            <h1 className="mt-4 text-[3rem] font-semibold leading-none tracking-[-0.06em] text-[#161821]">
              {profileCard.name}
            </h1>
            <p className="mt-2 text-[1.1rem] font-medium text-[#4b4e59]">{profileCard.handle}</p>

            <div className="mt-9 space-y-7">
              {profileCard.contactDetails.map((item) => {
                const Icon = iconMap[item.type];

                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="pt-1 text-[#4b4e59]">
                      <Icon size={23} strokeWidth={2.4} />
                    </div>
                    <div>
                      <p className="text-[1rem] text-[#4b4e59] sm:text-[1.05rem]">{item.label}</p>
                      <p className="mt-1 text-[1.35rem] leading-tight font-semibold tracking-[-0.04em] text-[#161821] sm:text-[1.5rem]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex items-center justify-between gap-4 rounded-full bg-[#f7f7f4] px-5 py-4">
              <span className="truncate text-[1rem] text-[#161821] sm:text-[1.05rem]">{profileCard.copyUrl}</span>
              <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1d1f28] text-white">
                <Copy size={20} />
              </button>
            </div>
          </div>
        </aside>

        <div className="pt-2 lg:pt-6">
          <section>
            <h2 className="text-[3rem] font-semibold tracking-[-0.06em] text-[#161821] sm:text-[4.2rem]">
              {about.title}
            </h2>
            <div className="mt-8 max-w-[860px] space-y-6 text-[1.05rem] leading-[1.55] text-[#4b4e59] sm:text-[1.1rem]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="mt-[4.5rem] sm:mt-24">
            <h2 className="text-[3rem] font-semibold tracking-[-0.06em] text-[#161821] sm:text-[4.2rem]">
              {experience.title}
            </h2>
            <p className="mt-8 max-w-[860px] text-[1.05rem] leading-[1.55] text-[#4b4e59] sm:text-[1.1rem]">
              {experience.intro}
            </p>
            <ul className="mt-8 max-w-[860px] list-disc space-y-5 pl-8 text-[1.05rem] leading-[1.55] text-[#4b4e59] marker:text-[#4b4e59] sm:text-[1.1rem]">
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
