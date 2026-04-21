import React from "react";

const galleryImages = {
  topLeft:
    "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
  bottomLeft:
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  right:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
};

export default function AboutGallery() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[320px_minmax(0,1fr)]">
          <div className="order-2 flex items-start lg:order-1">
            <div className="overflow-hidden bg-[#efede7] shadow-[0_18px_40px_rgba(15,20,30,0.08)]">
              <img
                src={galleryImages.topLeft}
                alt="Compact modular cabin exterior"
                className="h-[210px] w-full object-cover sm:h-[230px] lg:h-[250px] lg:w-[280px] xl:w-[320px]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="max-w-[840px] text-[2.25rem] font-semibold uppercase leading-[0.96] tracking-[-0.06em] text-[#111111] sm:text-[3.3rem] lg:text-[4.4rem] xl:text-[5rem]">
              Start Your Modular Home Journey With Ease And Intelligent Design.
            </h2>

            <div className="mt-8 grid gap-6 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.16fr)] lg:items-end xl:gap-8">
              <div className="overflow-hidden bg-[#f1eee7] shadow-[0_18px_40px_rgba(15,20,30,0.08)]">
                <img
                  src={galleryImages.bottomLeft}
                  alt="Warm timber modular home patio"
                  className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
                />
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden bg-[#f1eee7] shadow-[0_18px_40px_rgba(15,20,30,0.08)]">
                  <img
                    src={galleryImages.right}
                    alt="Two modular homes by the water"
                    className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px] xl:h-[500px]"
                  />
                </div>

                <a
                  href="/contact"
                  className="inline-flex w-fit items-center gap-3 rounded-full bg-[#17140f] px-6 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-white transition hover:bg-[#2b2418] sm:px-7"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/25">
                    <span className="h-2 w-2 rounded-full bg-[#f5d87a]" />
                  </span>
                  Start Building Your Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
