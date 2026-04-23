import React from "react";

const heroImage =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2200&q=80";

export default function AboutHero() {
  return (
    <section>
      <div className="relative overflow-hidden bg-[var(--color-ink)] shadow-[0_25px_80px_rgba(7,10,16,0.35)]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.52)_38%,rgba(0,0,0,0.34)_58%,rgba(0,0,0,0.64)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,11,15,0.18)_0%,rgba(8,11,15,0.16)_48%,rgba(8,11,15,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.12),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[24%] bg-[linear-gradient(180deg,rgba(7,9,13,0)_0%,rgba(7,9,13,0.78)_100%)]" />

        <div className="relative z-10 mx-auto flex max-w-[1440px] items-end px-5 pb-10 pt-28 sm:px-8 sm:pb-12 md:px-10 h-screen lg:px-14 lg:pb-16 lg:pt-36 xl:px-18">
          <div className="w-full max-w-[1180px]">
            <div className="max-w-[920px]">
              <h1 className="max-w-[820px] -mt-80 text-[2.9rem] font-semibold uppercase leading-[0.9] tracking-[-0.07em] text-white sm:text-[4.2rem] md:text-[5.2rem] ">
                Built Modular.
                <br />
                Built Better.
              </h1>
            </div>

            <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[280px_minmax(0,560px)] lg:items-center lg:gap-10">
              <a
                href="/projects"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-[var(--color-brand)] px-6 py-2 text-sm font-semibold uppercase tracking-[0.04em] text-white shadow-[0_14px_30px_rgba(0,0,0,0.28)] transition duration-300 hover:bg-white hover:text-[var(--color-ink)] font-semibold"
              >
                <span className="relative flex h-7 w-7 items-center justify-center">
                  <span className="absolute h-5 w-5 rounded-full border border-white/35 transition group-hover:border-black/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white transition group-hover:bg-[var(--color-ink)]" />
                </span>
                Explore Our Homes
              </a>

              <p className="max-w-[620px] text-base font-medium leading-[1.45] text-white/88 sm:text-xl lg:leading-[1.35]">
                We create homes that are faster to build, easier to customize,
                and designed to support modern living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
