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
    <section className="bg-[var(--color-panel)] px-4 py-10 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[320px_minmax(0,1fr)]">
          <div className="order-2 flex items-start lg:order-1">
            <div className="overflow-hidden bg-[var(--color-surface)] shadow-[0_18px_40px_rgba(15,20,30,0.08)]">
              <img
                src={galleryImages.topLeft}
                alt="Compact modular cabin exterior"
                className="h-[180px] w-full object-cover lg:w-[280px] xl:w-[320px]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="mb-12 max-w-[840px] text-[2.25rem] font-semibold uppercase leading-[0.96] tracking-[-0.06em] text-[var(--color-ink)] md:mb-0 sm:text-[3.3rem]">
              Start Your Modular Home Journey With Ease And Intelligent Design.
            </h2>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.9fr)] lg:items-end xl:gap-8">
              <div className="overflow-hidden bg-[var(--color-surface)] shadow-[0_18px_40px_rgba(15,20,30,0.08)]">
                <img
                  src={galleryImages.bottomLeft}
                  alt="Warm timber modular home patio"
                  className="h-[280px] w-full object-cover sm:h-[300px]"
                />
              </div>

              <div>
                <div className="overflow-hidden bg-[var(--color-surface)] shadow-[0_18px_40px_rgba(15,20,30,0.08)]">
                  <img
                    src={galleryImages.right}
                    alt="Two modular homes by the water"
                    className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[410px]"
                  />
                </div>
              </div>
              <a
                href="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[var(--color-brand)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-white transition hover:bg-[var(--color-brand-hover)] sm:px-7"
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
