import { ArrowRight, BriefcaseBusiness, Copy, Mail, MapPin, Phone } from "lucide-react";

const iconMap = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  position: BriefcaseBusiness,
};

export default function AgentHero({ profileCard, about, experience }) {
  const primaryEmail =
    profileCard.contactDetails.find((item) => item.type === "email")?.value ?? "";
  const contactHref = primaryEmail ? `mailto:${primaryEmail}` : "#";

  const getContactHref = (item) => {
    if (item.type === "email") return `mailto:${item.value}`;
    if (item.type === "phone") return `tel:${item.value.replace(/[^\d+]/g, "")}`;
    return null;
  };

  return (
    <section className="bg-[#efeff2] px-6 py-10 sm:px-10 sm:py-14 lg:px-32 lg:py-24">
      <div className="mx-auto grid max-w-[1460px] gap-12 lg:grid-cols-[500px_minmax(0,1fr)] lg:items-start lg:gap-16">
        <aside className="relative overflow-hidden rounded-[24px] border border-[#e4e4e8] bg-[#f2f2f4] shadow-[0_10px_26px_rgba(16,24,40,0.06)]">
          <div className="relative z-0 h-[150px] sm:h-[170px]">
            <div className="agent-single-card---bg absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.3),transparent_40%),radial-gradient(circle_at_70%_25%,rgba(148,163,184,0.2),transparent_52%),linear-gradient(120deg,#2d3341_0%,#1f2432_45%,#0f1421_100%)]" />
          </div>

          <div className="relative z-10 px-8 pb-8 pt-0">
            <div className="relative z-10 flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="relative z-20 -mt-8 shrink-0 rounded-full  bg-[#f2f2f4]">
                <img
                  src={profileCard.image}
                  alt={profileCard.name}
                  className="h-[86px] w-[86px] rounded-full object-cover object-center"
                />
              </div>

              <a
                href={contactHref}
                className="relative z-20 mt-1 inline-flex items-center gap-2 rounded-full bg-[#1d1f29] px-5 py-2.5 text-[16px] font-semibold text-white transition hover:bg-[#101219] sm:mt-4"
              >
                {profileCard.contactButtonLabel}
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#1e2029]">
                  <ArrowRight size={15} />
                </span>
              </a>
            </div>

            <h1 className="mt-3 text-[36px] font-semibold leading-none tracking-[-0.03em] text-[#181b24]">
              {profileCard.name}
            </h1>
            <p className="mt-1 text-[22px] leading-none text-[#4f5260]">
              {profileCard.handle}
            </p>

            <div className="mt-7 space-y-5">
              {profileCard.contactDetails.map((item) => {
                const Icon = iconMap[item.type];
                const href = getContactHref(item);
                const ValueTag = href ? "a" : "div";

                return (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <div className="pt-1 text-[#4f5260]">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="text-[16px] text-[#4f5260]">
                        {item.label}
                      </p>
                      <ValueTag
                        href={href ?? undefined}
                        className={`mt-0.5 block text-[26px] font-semibold leading-tight tracking-[-0.03em] text-[#1b1e28] hover:text-[#0f172a] ${
                          item.type === "email" ? "break-all" : ""
                        }`}
                      >
                        {item.value}
                      </ValueTag>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex items-center justify-between gap-3 rounded-full bg-[#e9e9ed] px-5 py-3.5">
              <span className="truncate text-[16px] text-[#232633]">
                {profileCard.copyUrl}
              </span>
              <a
                href={profileCard.copyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1e2029] text-white"
              >
                <Copy size={15} />
              </a>
            </div>
          </div>
        </aside>

        <div className="pt-1 lg:pt-0">
          <section>
            <h2 className="text-[38px] font-semibold leading-none tracking-[-0.03em] text-[#1b1e28] sm:text-[48px]">
              {about.title}
            </h2>
            <div className="mt-6 max-w-[760px] space-y-4 text-[17px] leading-[1.6] text-[#4f5260]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="mt-12 sm:mt-14">
            <h2 className="text-[38px] font-semibold leading-none tracking-[-0.03em] text-[#1b1e28] sm:text-[48px]">
              {experience.title}
            </h2>
            <p className="mt-6 max-w-[760px] text-[17px] leading-[1.6] text-[#4f5260]">
              {experience.intro}
            </p>
            <ul className="mt-5 max-w-[760px] list-disc space-y-3 pl-8 text-[17px] leading-[1.6] text-[#4f5260] marker:text-[#4f5260]">
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
