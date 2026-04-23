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
    <section className="bg-[var(--color-panel)] px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col gap-6 
                        lg:grid lg:grid-cols-2 lg:gap-6
                        lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[320px_minmax(0,1fr)]">

          {/* Top Small Image */}
          <div className="w-full lg:w-auto">
            <div className="overflow-hidden bg-[var(--color-surface)] shadow-[0_18px_40px_rgba(15,20,30,0.08)]">
              <img
                src={galleryImages.topLeft}
                loading="lazy"
                alt="Compact modular cabin exterior"
                className="h-40 w-60 lg:w-full object-cover lg:h-[180px] lg:w-[280px] xl:w-[320px]"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col lg:col-span-1">
            <h2 className="z-99 text-[2.25rem] font-semibold max-w-3xl uppercase leading-[1.1] lg:-mb-6 tracking-[-0.04em] text-[var(--color-ink)] sm:text-[3.3rem] lg:leading-[0.96] lg:tracking-[-0.06em]">
              Start Your Modular Home Journey With Ease And Intelligent Design.
            </h2>

            {/* Image Grid */}
            <div className="grid gap-6 sm:grid-cols-2 
                            lg:col-span-2
                            lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-end xl:gap-8">

              {/* Bottom Left Image */}
              <div className="overflow-hidden -mt-5 bg-[var(--color-surface)] shadow-[0_18px_40px_rgba(15,20,30,0.08)]">
                <img
                  src={galleryImages.bottomLeft}
                  alt="Warm timber modular home patio"
                  loading="lazy"
                  className="h-[280px] w-full object-cover sm:h-[300px]"
                />
              </div>

              {/* Right Image */}
              <div className="overflow-hidden hidden sm:inline bg-[var(--color-surface)] shadow-[0_18px_40px_rgba(15,20,30,0.08)]">
                <img
                  src={galleryImages.right}
                  alt="Two modular homes by the water"
                  loading="lazy"
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[410px]"
                />
              </div>
            </div>

            {/* Button */}
            <div className="sm:col-span-2 lg:col-span-2 lg:col-span-1 mt-5 lg:mt-4 lg:flex lg:justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full bg-[var(--color-brand)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-white transition hover:bg-[var(--color-brand-hover)] sm:px-7"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/25">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                Start Building Your Home
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}