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
    <section className="bg-[#efeff2] px-4 py-16 sm:px-10 sm:py-14 lg:px-32 lg:py-24">
      <div className="mx-auto grid max-w-[1460px] gap-8 sm:gap-12 lg:grid-cols-[500px_minmax(0,1fr)] lg:items-start lg:gap-16">
        <aside className="relative overflow-hidden rounded-[20px] border border-[#e4e4e8] bg-[#f2f2f4] shadow-[0_10px_26px_rgba(16,24,40,0.06)] sm:rounded-[24px]">
          <div className="relative z-0 h-[96px] sm:h-[150px]">
            <div className="agent-single-card---bg absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.3),transparent_40%),radial-gradient(circle_at_70%_25%,rgba(148,163,184,0.2),transparent_52%),linear-gradient(120deg,#2d3341_0%,#1f2432_45%,#0f1421_100%)]" />
          </div>

          <div className="relative z-10 px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
            <div className="relative z-10 flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="relative z-20 -mt-8 shrink-0 rounded-full  bg-[#f2f2f4]">
                <img
                  src={profileCard.image}
                  alt={profileCard.name}
                  className="h-[86px] w-[86px] rounded-full object-cover object-center"
                />
              </div>

              <a
                href={contactHref}
                className="relative z-20 mt-1 hidden items-center gap-2 rounded-full bg-[#1d1f29] px-5 py-2.5 text-[15px] font-semibold text-white transition hover:bg-[#101219] sm:mt-4 sm:inline-flex sm:text-[16px]"
              >
                {profileCard.contactButtonLabel}
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#1e2029]">
                  <ArrowRight size={15} />
                </span>
              </a>
            </div>

            <h1 className="mt-3 text-[22px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#181b24] sm:text-[36px] sm:leading-none">
              {profileCard.name}
            </h1>
            <p className="mt-1 text-[16px] leading-none text-[#4f5260] sm:text-[22px]">
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
                      <p className="text-[15px] text-[#4f5260] sm:text-[16px]">
                        {item.label}
                      </p>
                      <ValueTag
                        href={href ?? undefined}
                        className={`mt-0.5 block text-[14px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#1b1e28] hover:text-[#0f172a] sm:text-[26px] sm:leading-tight ${
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
              <span className="truncate text-[14px] text-[#232633] sm:text-[16px]">
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

            <a
              href={contactHref}
              className="mt-5 inline-flex w-full items-center justify-between rounded-full bg-[#1d1f29] px-5 py-3 text-[16px] font-semibold text-white sm:hidden"
            >
              {profileCard.contactButtonLabel}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#1e2029]">
                <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </aside>

        <div className="pt-1 lg:pt-0">
          <section>
            <h2 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#1b1e28] sm:text-[48px] sm:leading-none">
              {about.title}
            </h2>
            <div className="mt-4 max-w-[760px] space-y-4 text-[14px] leading-[1.65] text-[#4f5260] sm:mt-6 sm:text-[17px] sm:leading-[1.6]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="mt-12 sm:mt-14">
            <h2 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#1b1e28] sm:text-[48px] sm:leading-none">
              {experience.title}
            </h2>
            <p className="mt-4 max-w-[760px] text-[14px] leading-[1.65] text-[#4f5260] sm:mt-6 sm:text-[17px] sm:leading-[1.6]">
              {experience.intro}
            </p>
            <ul className="mt-4 max-w-[760px] list-disc space-y-2.5 pl-6 text-[14px] leading-[1.65] text-[#4f5260] marker:text-[#4f5260] sm:mt-5 sm:space-y-3 sm:pl-8 sm:text-[17px] sm:leading-[1.6]">
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
