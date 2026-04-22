import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const backgroundImage =
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2200&q=80";

const testimonials = [
  {
    name: "Emma R.",
    role: "Modular Home Owner",
    quote:
      "Pody made the entire process feel easy. The design was thoughtful, the timeline was clear, and the quality exceeded our expectations.",
  },
  {
    name: "Daniel M.",
    role: "Tiny Home Client",
    quote:
      "We wanted a sustainable home without the delays of traditional construction. The delivery was organized, efficient, and beautifully finished.",
  },
  {
    name: "Sophie L.",
    role: "Custom Modular Project",
    quote:
      "The modular approach gave us more flexibility than we expected. Every detail felt intentional, from the layout planning to the final finishes.",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="bg-white py-14 sm:py-16">
        <div className="relative overflow-hidden h-200">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,31,40,0.28)_0%,rgba(25,35,46,0.12)_42%,rgba(19,24,31,0.4)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,24,30,0.08)_0%,rgba(14,18,23,0.2)_100%)]" />

          <div className="relative z-10 px-4 mt-15 py-6 sm:px-16 sm:py-8 ">
            <div className="max-w-[580px] bg-[rgba(244,246,248,0.92)] p-6 shadow-[0_25px_70px_rgba(15,20,30,0.18)] backdrop-blur-md sm:p-8 lg:ml-8 lg:mt-6 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] sm:text-sm">
                Trusted By Homeowners
              </p>

              <div className="mt-34 flex items-center gap-1 text-[#111111]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-current"
                    strokeWidth={1.6}
                  />
                ))}
              </div>

              <blockquote className="mt-7 text-[1.9rem] font-medium leading-[1.06] tracking-[-0.05em] text-[#161616] sm:text-[2rem]">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-10 flex flex-col gap-8 border-t border-black/8 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[1.15rem] font-medium tracking-[-0.03em] text-[#171717]">
                    {activeTestimonial.name}
                  </p>
                  <p className="mt-1 text-base text-[#6a7280]">
                    {activeTestimonial.role}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrevious}
                    aria-label="Previous testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-black/12 bg-white/50 text-[#151515] transition hover:bg-white"
                  >
                    <ArrowLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-black/12 bg-white/50 text-[#151515] transition hover:bg-white"
                  >
                    <ArrowRight size={22} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}
