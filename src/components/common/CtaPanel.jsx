import { Plus } from "lucide-react";

export default function CtaPanel({ ctaCards }) {
  return (
    <section className="bg-[#f7f7f4] px-5 pb-14  sm:px-8 sm:pb-20 lg:px-14 lg:pb-24">
      <div className="mx-auto grid max-w-[1520px] gap-6 lg:grid-cols-2">
        {ctaCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[1.5rem] border border-[#eceae4] bg-[#fffefb] px-6 py-8 shadow-[0_8px_30px_rgba(15,23,42,0.03)] sm:px-8 sm:py-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.05em] text-[#161821] sm:text-[35px] sm:leading-[1.12]">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-lg text-[14px] leading-[1.65] text-[#4b4e59] sm:mt-5 sm:text-[18px] sm:leading-[1.55]">
                  {card.description}
                </p>
              </div>
              <button className="flex sm:h-14 sm:w-14 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1d1f28] text-white">
                <Plus size={26} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
