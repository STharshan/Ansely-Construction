import {
  CalendarDays,
  Clock3,
  House,
  KeyRound,
  LocateFixed,
  Maximize,
} from "lucide-react";

const detailIcons = {
  Location: LocateFixed,
  Duration: Clock3,
  Type: House,
  Status: KeyRound,
  Size: Maximize,
  Year: CalendarDays,
};

export default function ProjectDetailsRail({ details, consultation, sticky = true }) {
  return (
    <aside className={sticky ? "self-start lg:sticky lg:top-24" : ""}>
      <div className="px-2 sm:px-0">
        <h2 className="text-[2rem] font-medium tracking-[-0.05em] text-[#12100b] sm:text-[2.2rem]">
          Project Details
        </h2>
        <div className="mt-8">
          {details.map((detail) => {
            const Icon = detailIcons[detail.label] ?? House;

            return (
              <div
                key={detail.label}
                className="flex items-center gap-4 border-b border-[#ece8df] py-6"
              >
                <Icon className="shrink-0 text-[#17130d]" size={28} strokeWidth={1.8} />
                <p className="text-[1rem] leading-6 text-[#1c1a15] sm:text-[1.02rem]">
                  <span className="font-semibold">{detail.label}:</span>{" "}
                  <span className="text-[#2d2a24]">{detail.value}</span>
                </p>
              </div>
            );
          })}
        </div>
        <button className="mt-12 inline-flex min-h-16 items-center gap-4 rounded-full bg-[#12100b] px-9 text-[1rem] font-semibold uppercase tracking-[-0.03em] text-white transition hover:bg-[#252019]">
          <span className="h-4 w-4 rounded-full bg-white" />
          {consultation.primaryActionLabel}
        </button>
      </div>
    </aside>
  );
}
