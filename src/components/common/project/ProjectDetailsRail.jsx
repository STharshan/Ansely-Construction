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
    <aside className={sticky ? "lg:sticky lg:top-10 self-start" : ""}>
      <div className="rounded-[1.5rem] border border-[#ece8df] bg-white p-6 sm:p-7">
        <h2 className="text-[1.55rem] font-medium tracking-[-0.04em] text-[#12100b]">
          Project Details
        </h2>
        <div className="mt-6 border-t border-transparent">
          {details.map((detail) => {
            const Icon = detailIcons[detail.label] ?? House;

            return (
              <div
                key={detail.label}
                className="flex items-center gap-4 border-b border-[#ece8df] py-5"
              >
                <Icon className="shrink-0 text-[#17130d]" size={28} strokeWidth={1.8} />
                <p className="text-[0.98rem] leading-6 text-[#1c1a15]">
                  <span className="font-semibold">{detail.label}:</span>{" "}
                  <span className="text-[#2d2a24]">{detail.value}</span>
                </p>
              </div>
            );
          })}
        </div>
        <button className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#12100b] px-7 text-[0.9rem] font-semibold uppercase tracking-[-0.02em] text-white transition hover:bg-[#252019]">
          <span className="h-4 w-4 rounded-full bg-white" />
          {consultation.primaryActionLabel}
        </button>
      </div>
    </aside>
  );
}
