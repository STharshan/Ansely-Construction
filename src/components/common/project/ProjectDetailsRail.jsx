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
        <h2 className="font-geist text-[26px] font-medium leading-[33.8px] text-[#13120b]">
          Project Details
        </h2>
        <div className="mt-6">
          {details.map((detail) => {
            const Icon = detailIcons[detail.label] ?? House;

            return (
              <div
                key={detail.label}
                className="flex items-center gap-4 border-b border-[#ece8df] py-4"
              >
                <Icon className="shrink-0 text-[#17130d]" size={28} strokeWidth={1.8} />
                <p className="font-geist text-[16px] font-normal leading-6 text-[#13120b]">
                  <span className="font-semibold text-[#13120b]">{detail.label}:</span>{" "}
                  <span className="text-[#13120b]">{detail.value}</span>
                </p>
              </div>
            );
          })}
        </div>
        <button className="font-geist mt-12 inline-flex h-[49.6px] max-w-full items-center justify-start gap-4 rounded-[100px] bg-[#13120b] px-6 py-4 text-[16px] font-semibold capitalize leading-6 text-white transition hover:bg-[#252019]">
          <span className="h-4 w-4 shrink-0 rounded-full bg-white" />
          {consultation.primaryActionLabel}
        </button>
      </div>
    </aside>
  );
}
