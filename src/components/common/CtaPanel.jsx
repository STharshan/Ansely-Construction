import { Plus } from "lucide-react";

export default function CtaPanel({ ctaCards }) {
  return (
    <section className="bg-[#f7f7f4] px-5 pb-14 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24">
      <div className="mx-auto grid max-w-[1520px] gap-6 lg:grid-cols-2">
        {ctaCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[2rem] border border-[#eceae4] bg-[#fffefb] px-8 py-10 shadow-[0_8px_30px_rgba(15,23,42,0.03)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[32px] font-semibold tracking-[-0.05em] text-[#161821] sm:text-[35px]">
                  {card.title}
                </h3>
                <p className="mt-5 max-w-lg text-[17px] leading-[1.55] text-[#4b4e59] sm:text-[18px]">
                  {card.description}
                </p>
              </div>
              <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1d1f28] text-white">
                <Plus size={26} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
