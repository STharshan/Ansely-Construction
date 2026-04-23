import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const OurStory = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xTranslation = useTransform(scrollYProgress, [0.3, 0.9], ["0%", "-150%"]);

  const stats = [
    { num: "53", label: "HOUSES WERE BUILT" },
    { num: "5+", label: "YEARS" },
    { num: "12", label: "HOME SETUPS" },
  ];

  return (
    <div ref={containerRef} className="relative h-auto bg-[var(--color-panel)] lg:h-[800vh]">
      <div className="relative flex flex-col justify-center py-12 lg:sticky lg:top-0 lg:overflow-hidden lg:py-20">
        <div className="mb-12 mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div>
              <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-[var(--color-ink-muted)]">
                Our Story
              </span>
              <h2 className="text-3xl font-bold leading-tight text-[var(--color-ink)] md:text-5xl">
                Pody started with a <br className="hidden lg:block" /> simple but powerful idea.
              </h2>
            </div>

            <div className="space-y-6 text-lg text-[var(--color-ink-muted)]">
              <p>
                Traditional construction often brings delays, unclear costs, and limited flexibility.
                We set out to change that by creating a modular building system that prioritizes
                efficiency, transparency, and quality at every stage.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full px-6 md:px-12">
          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-col gap-0 lg:flex-row lg:items-end">
              <div className="z-10 mb-10 w-full overflow-hidden rounded-lg shadow-2xl lg:mb-0 lg:w-3/5">
                <img
                  src="https://cdn.prod.website-files.com/693e9d1043906400d3af572d/6942826103443d922712e9ae_2149571922.webp"
                  alt="Modular Home"
                  className="h-[300px] w-full object-cover lg:h-[400px]"
                />
              </div>

              <div className="w-full lg:-ml-20 lg:w-2/3 lg:overflow-hidden lg:pb-40">
                <div className="block space-y-0 lg:hidden">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center py-8 border-t border-[var(--color-border)] last:border-b">
                      <span className="min-w-[100px] text-6xl font-bold text-[var(--color-ink)]">{stat.num}</span>
                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-ink-soft)]">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.div
                  style={{ x: xTranslation }}
                  className="ml-70 hidden items-center gap-28 whitespace-nowrap pt-0 lg:flex"
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="text-9xl font-bold text-[var(--color-ink)]">{stat.num}</span>
                      <span className="text-sm font-medium uppercase tracking-widest text-[var(--color-ink-muted)]">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
