import { ArrowUpRight } from "lucide-react";

const processImage =
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80";

const steps = [
  {
    number: "01",
    title: "Project Consultation",
    description:
      "We begin by understanding your vision, budget, location needs, and timeline before shaping the right build strategy.",
  },
  {
    number: "02",
    title: "Planning & Execution",
    description:
      "Our team aligns design, approvals, materials, and site coordination to keep every stage organized and efficient.",
  },
  {
    number: "03",
    title: "Delivery & Support",
    description:
      "We complete the project with quality checks, final detailing, and ongoing support so you move forward with confidence.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#f3f1eb] px-3 py-10 sm:px-4 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1320px]">
        <div className="rounded-[28px] bg-white px-5 py-8 shadow-[0_24px_60px_rgba(24,32,48,0.14)] sm:px-8 sm:py-10 lg:rounded-[34px] lg:px-12 lg:py-12">
          <div className="mx-auto max-w-[980px]">
            <h2 className="text-center text-[2rem] font-semibold tracking-[-0.05em] text-[#20356f] sm:text-[2.4rem] lg:text-[2.8rem]">
              How We <span className="font-serif italic font-medium">Work</span>
            </h2>

            <div className="mt-6 overflow-hidden rounded-[24px] sm:mt-8 lg:mt-10">
              <img
                src={processImage}
                alt="Construction planning and project coordination"
                className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[360px]"
              />
            </div>

            <div className="mt-10 hidden md:block">
              <div className="relative grid grid-cols-3 gap-6">
                <div className="absolute left-[16.66%] right-[16.66%] top-7 h-[2px] bg-[#32498e]" />

                {steps.map((step, index) => {
                  const active = index === 1;

                  return (
                    <article
                      key={step.number}
                      className="relative z-10 flex flex-col items-center text-center"
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full border text-lg font-semibold ${
                          active
                            ? "border-[#32498e] bg-[#32498e] text-white shadow-[0_0_0_4px_white,0_0_0_6px_#32498e]"
                            : "border-[#32498e] bg-white text-[#20356f]"
                        }`}
                      >
                        {step.number}
                      </div>

                      <h3 className="mt-5 text-[1.02rem] font-semibold text-[#1d2b57]">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-[270px] text-sm leading-6 text-[#5c6785]">
                        {step.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 space-y-5 md:hidden">
              {steps.map((step, index) => {
                const active = index === 1;

                return (
                  <article
                    key={step.number}
                    className="relative rounded-[22px] border border-[#d9dfef] bg-[#f8f9fd] px-5 py-5"
                  >
                    {index !== steps.length - 1 && (
                      <div className="absolute bottom-[-22px] left-7 top-[68px] w-px bg-[#32498e]/25" />
                    )}

                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-base font-semibold ${
                          active
                            ? "border-[#32498e] bg-[#32498e] text-white shadow-[0_0_0_3px_white,0_0_0_5px_#32498e]"
                            : "border-[#32498e] bg-white text-[#20356f]"
                        }`}
                      >
                        {step.number}
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-[#1d2b57]">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#5c6785]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-9 flex justify-center sm:mt-10">
              <button className="inline-flex items-center gap-3 rounded-full bg-[#32498e] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_14px_28px_rgba(50,73,142,0.28)] transition hover:bg-[#273b77]">
                Explore Our Process
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#32498e]">
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
