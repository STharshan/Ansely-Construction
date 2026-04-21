import React from "react";
import { ArrowUpRight, CarFront, ToyBrick, Waves } from "lucide-react";

const amenities = [
  {
    title: "Yoga & Meditation Zone",
    description:
      "Creative designed wellness zone creating a tranquil setting for yoga and meditation.",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Secure Parking Area",
    description:
      "Dedicated parking area with controlled access for a safe hassle free parking experience.",
    icon: CarFront,
    image: "https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Children's Play Area",
    description:
      "Dedicated play spaces for children to explore, play, play spaces and grow safely.",
    icon: ToyBrick,
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80",
  },
];

function DetailLink() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-3 text-lg font-semibold transition-colors duration-500 group-hover:text-white text-[#202020]"
    >
      <span>View Details</span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a9a454] text-white transition-transform duration-500 group-hover:rotate-45">
        <ArrowUpRight size={15} strokeWidth={2} />
      </span>
    </button>
  );
}

export default function Whowebuild() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#ddd7ca] bg-white px-5 py-1 text-base font-medium text-[#1d1d1d] shadow-[0_8px_20px_rgba(0,0,0,0.03)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#a9a454]" />
            <span>Our Amenities</span>
          </div>

          <h2 className="mt-6 text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.06em] text-[#181818] sm:text-[3.4rem]">
            Thoughtfully curated amenities for a <br className="hidden md:block" /> comfortable and elevated lifestyle
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {amenities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative flex flex-col overflow-hidden rounded-[40px] bg-[#f4f2eb] p-8 transition-all duration-500 ease-in-out sm:p-10"
              >
                {/* Image Overlay: Slides up on hover */}
                <div 
                  className="absolute inset-0 z-0 translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Content: Z-index ensures it stays above the sliding image */}
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#a9a454] text-white transition-transform duration-500 group-hover:scale-110">
                    <Icon size={25} strokeWidth={1.9} />
                  </div>

                  <div className="mt-8">
                    <h3 className="max-w-[290px] text-2xl font-semibold leading-[1.08] tracking-[-0.05em] transition-colors duration-500 group-hover:text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-16 text-lg leading-[1.7] text-[#535353] transition-colors duration-500 group-hover:text-white/80">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="mb-8 h-px w-full bg-[#dbd6c8] transition-colors duration-500 group-hover:bg-white/20" />
                    <DetailLink />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer Text */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:mt-16 sm:flex-row sm:text-left">
          <span className="rounded-full bg-[#a9a454] px-4 py-1 text-sm font-semibold text-white">
            Free
          </span>
          <p className="text-base text-[#252525]">
            Where thoughtful design meets flawless execution -
            <span className="ml-2 font-semibold text-[#9b9547] underline decoration-[#9b9547]/40 underline-offset-4">
              See The Difference In Every Outcome.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}