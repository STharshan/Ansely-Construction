import React from "react";

const heroImage =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2200&q=80";

export default function AboutHero() {
  return (
    <section className="bg-[#101317] px-3 pb-3 pt-3 sm:px-4 sm:pb-4 sm:pt-4">
      <div className="relative overflow-hidden rounded-[28px] bg-[#13171d] shadow-[0_25px_80px_rgba(7,10,16,0.35)] sm:rounded-[34px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,15,22,0.82)_0%,rgba(18,23,31,0.52)_38%,rgba(14,17,23,0.34)_58%,rgba(11,14,18,0.64)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,11,15,0.18)_0%,rgba(8,11,15,0.16)_48%,rgba(8,11,15,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.12),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[24%] bg-[linear-gradient(180deg,rgba(7,9,13,0)_0%,rgba(7,9,13,0.78)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[580px] max-w-[1440px] items-end px-5 pb-10 pt-28 sm:min-h-[660px] sm:px-8 sm:pb-12 md:px-10 lg:min-h-[720px] lg:px-14 lg:pb-16 lg:pt-36 xl:min-h-[760px] xl:px-18">
          <div className="w-full max-w-[1180px]">
            <div className="max-w-[920px]">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-[#b07b3d]" />
                About Ansely
              </p>

              <h1 className="mt-5 max-w-[820px] text-[2.9rem] font-semibold uppercase leading-[0.9] tracking-[-0.07em] text-white sm:text-[4.2rem] md:text-[5.2rem] lg:text-[6.4rem] xl:text-[7rem]">
                Built Modular.
                <br />
                Built Better.
              </h1>
            </div>

            <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[280px_minmax(0,560px)] lg:items-center lg:gap-10">
              <a
                href="/projects"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#16130f] px-6 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-white shadow-[0_14px_30px_rgba(0,0,0,0.28)] transition duration-300 hover:bg-white hover:text-[#111111] sm:px-7 sm:py-5 sm:text-base"
              >
                <span className="relative flex h-7 w-7 items-center justify-center">
                  <span className="absolute h-5 w-5 rounded-full border border-white/35 transition group-hover:border-black/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white transition group-hover:bg-[#111111]" />
                </span>
                Explore Our Homes
              </a>

              <p className="max-w-[620px] text-base font-medium leading-[1.45] text-white/88 sm:text-xl md:text-2xl lg:text-[2rem] lg:leading-[1.35]">
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
