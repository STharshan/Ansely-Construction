import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectReveal from "./ProjectReveal";

export default function RelatedProjects({ relatedProjects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalProjects = relatedProjects.items.length;
  const activeProject = relatedProjects.items[activeIndex];

  const goPrevious = () => {
    setActiveIndex((current) => (current - 1 + totalProjects) % totalProjects);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % totalProjects);
  };

  return (
    <section className="overflow-hidden bg-[var(--color-panel)] px-6 py-24 text-[var(--color-ink)] sm:px-10 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-[1680px]">
        <ProjectReveal className="text-center">
          <p className="text-[1rem] uppercase tracking-[-0.03em] text-[var(--color-ink-soft)]">
            {relatedProjects.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-[2.5rem] font-semibold uppercase leading-[0.96] tracking-[-0.07em] sm:text-[48px] lg:text-[48px]">
            {relatedProjects.title}
          </h2>
        </ProjectReveal>

        <ProjectReveal delay={100}>
          <div className="relative mt-20 overflow-hidden lg:mt-16">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="grid w-full gap-10 lg:grid-cols-[260px_minmax(0,1fr)_220px] lg:items-start lg:gap-8"
              >
                <div className="flex h-full flex-col justify-between pb-1 pt-1 lg:min-h-[33.5rem]">
                  <div className="space-y-3">
                    <h3 className="text-[33px] font-medium uppercase leading-[1.05] tracking-[-0.045em]">
                      {activeProject.title}
                    </h3>
                    <div className="text-[15px] text-[var(--color-ink-muted)]">
                      {activeProject.location} / {activeProject.year}
                    </div>
                  </div>
                  <p className="max-w-[15.5rem] text-[16px] leading-[1.7] text-[var(--color-ink-muted)]">
                    {activeProject.description}
                  </p>
                </div>

                <div className="relative mt-6 min-h-[26rem] sm:min-h-[34rem] lg:mt-0 lg:min-h-[33.5rem]">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    loading="lazy" 
                    className="h-[24rem] w-[76%] object-cover sm:h-[32rem] lg:h-[33.5rem]"
                  />
                  <img
                    src={activeProject.accentImage}
                    alt={`${activeProject.title} alternate view`}
                    loading="lazy" 
                    className="absolute bottom-[3.75rem] right-0 h-[15rem] w-[62%] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:h-[21rem] lg:h-[22rem]"
                  />
                </div>

                <div className="flex h-full flex-col justify-end pt-6 lg:min-h-[33.5rem] lg:pt-0">
                  <div className="flex items-start justify-start lg:justify-end">
                    <Link
                      to={`/projects/${activeProject.slug}`}
                      className="inline-flex items-center gap-3 text-[0.95rem] font-medium uppercase tracking-[-0.02em] text-[var(--color-brand)]"
                    >
                      <span className="h-5 w-5 rounded-full bg-[color:rgba(156,156,85,0.18)] p-[0.28rem]">
                        <span className="block h-full w-full rounded-full bg-[var(--color-brand)]" />
                      </span>
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="pointer-events-none absolute right-0 top-0 z-10 flex items-center gap-3 lg:right-0">
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Show previous project"
                className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-ink-soft)] bg-white text-[var(--color-ink-soft)] transition hover:bg-[var(--color-ink)] hover:text-white"
              >
                <ArrowLeft size={24} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Show next project"
                className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-ink-soft)] bg-white text-[var(--color-ink-soft)] transition hover:bg-[var(--color-ink)] hover:text-white"
              >
                <ArrowRight size={24} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </ProjectReveal>
      </div>
    </section>
  );
}
