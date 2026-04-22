import React from "react";
import { ArrowUpRight, MapPin, HardHat, Globe } from "lucide-react";

const builderCategories = [
  {
    title: "I Have Land in Sri Lanka",
    description:
      "You've already got the plot - now you need the right team to design and build your vision on it. We take it from there.",
    icon: HardHat,
    buttonText: "Start Your Build",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80",
    href: "/build",
  },
  {
    title: "I Need Land and a Build",
    description:
      "No land yet? No problem. We source the right location for you, then manage the full build from design to completion.",
    icon: MapPin,
    buttonText: "Find My Plot",
    image: "https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?auto=format&fit=crop&w=1200&q=80",
    href: "/land-and-build",
  },
  {
    title: "I'm Building from Abroad",
    description:
      "Based in the UK or overseas? We manage everything on the ground in Sri Lanka so you don't have to be there to get it done.",
    icon: Globe,
    buttonText: "Build Remotely",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80",
    href: "/build-from-abroad",
  },
];

function DetailLink({ text, href }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 text-lg font-semibold transition-colors duration-500 group-hover:text-white text-[#202020]"
    >
      <span>{text}</span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a9a454] text-white transition-transform duration-500 group-hover:rotate-45">
        <ArrowUpRight size={15} strokeWidth={2} />
      </span>
    </a>
  );
}

export default function Whowebuild() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 pb-32">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow - Non-heading tag for SEO */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#ddd7ca] bg-white px-5 py-1 text-base font-medium text-[#1d1d1d] shadow-[0_8px_20px_rgba(0,0,0,0.03)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#a9a454]" />
            <span>Who We Build For</span>
          </div>

          <h2 className="mt-6 text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.06em] text-[#181818] sm:text-[3.4rem]">
            Whatever Your Starting Point, <br className="hidden md:block" /> We <span className="accent-font italic">Handle</span> the Rest
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {builderCategories.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative flex flex-col overflow-hidden rounded-[40px] bg-[#f4f2eb] p-8 transition-all duration-500 ease-in-out sm:p-10"
              >
                {/* Image Overlay: Enhanced contrast for WCAG AA (0.6 opacity) */}
                <div 
                  className="absolute inset-0 z-0 translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#a9a454] text-white transition-transform duration-500 group-hover:scale-110">
                    <Icon size={25} strokeWidth={1.9} />
                  </div>

                  <div className="mt-8">
                    <h3 className="max-w-[290px] text-2xl font-semibold leading-[1.08] tracking-[-0.05em] transition-colors duration-500 group-hover:text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-16 text-lg leading-[1.7] text-[#535353] transition-colors duration-500 group-hover:text-white/90">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="mb-8 h-px w-full bg-[#dbd6c8] transition-colors duration-500 group-hover:bg-white/20" />
                    <DetailLink text={item.buttonText} href={item.href} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Floating CTA Strip */}
        <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center gap-3 rounded-full border border-[#ddd7ca] bg-white/90 px-6 py-3 shadow-xl backdrop-blur-md transition-all hover:scale-[1.02] sm:flex-row">
          <span className="rounded-full bg-[#a9a454] px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
            Free
          </span>
          <p className="whitespace-nowrap text-sm font-medium text-[#252525]">
            Ready to get started? — 
            <a href="/contact" className="ml-2 font-bold text-[#9b9547] underline decoration-[#9b9547]/40 underline-offset-4 hover:decoration-[#9b9547]">
              Get Your Free Consultation Today.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}