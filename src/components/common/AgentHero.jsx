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
    <section className="bg-[#f7f7f8] px-4 py-14 sm:px-8 sm:py-16 lg:px-20 lg:py-28">
      <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[488px_minmax(0,1fr)] lg:items-start lg:gap-[56px]">
        <aside className="relative overflow-hidden rounded-[28px] border border-[#e7e7eb] bg-white shadow-[0_18px_40px_rgba(17,24,39,0.06)]">
          <div className="relative z-0 h-[104px] sm:h-[138px]">
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.26),transparent_36%),radial-gradient(circle_at_46%_24%,rgba(176,182,194,0.34),transparent_24%),linear-gradient(135deg,#2f3442_0%,#1f2432_44%,#101420_100%)]" />
          </div>

          <div className="relative z-10 px-6 pb-6 pt-0 sm:px-10 sm:pb-10">
            <div className="relative z-10 flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="relative z-20 -mt-[38px] shrink-0 rounded-full  bg-white">
                <img
                  src={profileCard.image}
                  alt={profileCard.name}
                  className="h-[94px] w-[94px] rounded-full object-cover object-center sm:h-[102px] sm:w-[102px]"
                />
              </div>

              <a
                href={contactHref}
                className="relative z-20 mt-3 hidden items-center gap-2 rounded-full bg-[#232631] px-5 py-2.5 text-[16px] font-semibold text-white shadow-[0_10px_20px_rgba(16,24,40,0.14)] transition hover:bg-[#151821] sm:inline-flex"
              >
                {profileCard.contactButtonLabel}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#1e2029]">
                  <ArrowRight size={16} />
                </span>
              </a>
            </div>

            <h1 className="font-objectivity mt-3 text-[28px] font-medium leading-[30px] tracking-[-0.84px] text-[#14161c]">
              {profileCard.name}
            </h1>
            <p className="font-objectivity mt-1 text-[16px] font-medium leading-[20px] tracking-[-0.48px] text-[#464851]">
              {profileCard.handle}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-y-6">
              {profileCard.contactDetails.map((item) => {
                const Icon = iconMap[item.type];
                const href = getContactHref(item);
                const ValueTag = href ? "a" : "div";

                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="pt-[2px] text-[#14161c]">
                      <Icon size={20} strokeWidth={2.3} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-objectivity text-[16px] font-normal leading-[20px] tracking-[-0.48px] text-[#464851]">
                        {item.label}
                      </p>
                      <ValueTag
                        href={href ?? undefined}
                        className="font-objectivity mt-1.5 block w-full max-w-[198.25px] break-all text-[16px] font-bold leading-[20px] tracking-[-0.48px] text-[#14161c] transition hover:text-[#0f172a]"
                      >
                        {item.value}
                      </ValueTag>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex items-center justify-between gap-3 rounded-full bg-[#f4f4f6] px-4 py-3">
              <span className="font-objectivity truncate text-[16px] font-normal leading-[20px] tracking-[-0.48px] text-[#14161c]">
                {profileCard.copyUrl}
              </span>
              <a
                href={profileCard.copyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1f222d] text-white transition hover:bg-[#11141c]"
              >
                <Copy size={15} />
              </a>
            </div>

            <a
              href={contactHref}
              className="mt-6 inline-flex w-full items-center justify-between rounded-full bg-[#232631] px-5 py-3 text-[16px] font-semibold text-white shadow-[0_10px_20px_rgba(16,24,40,0.14)] sm:hidden"
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
            <h2 className="font-objectivity text-[40px] font-medium leading-[45px] tracking-[-1.2px] text-[#14161c]">
              {about.title}
            </h2>
            <div className="font-objectivity mt-6 max-w-[720px] space-y-5 text-[16px] font-normal leading-[24px] tracking-[-0.48px] text-[#464851]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="font-objectivity text-[40px] font-medium leading-[45px] tracking-[-1.2px] text-[#14161c]">
              {experience.title}
            </h2>
            <p className="font-objectivity mt-6 max-w-[720px] text-[16px] font-normal leading-[24px] tracking-[-0.48px] text-[#464851]">
              {experience.intro}
            </p>
            <ul className="font-objectivity mt-6 max-w-[720px] list-disc space-y-3 pl-10 text-[16px] leading-[24px] tracking-[-0.48px] text-[#464851] marker:text-[#464851]">
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
