import { motion } from "framer-motion";
import ProjectReveal from "./ProjectReveal";

function FormLine({ label }) {
  return (
    <label className="block">
      <span className="text-[0.95rem] font-semibold uppercase tracking-[-0.03em] text-white/85">
        {label}
      </span>
      <div className="mt-5 h-11 border-b border-white/20" />
    </label>
  );
}

export default function ProjectFooter({ footer }) {
  const statementLines = footer.statement
    .split(/(?<=\.)\s+/)
    .filter(Boolean);
  const leftReveal = {
    hidden: { opacity: 0, x: -48 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
    },
  };
  const rightReveal = {
    hidden: { opacity: 0, x: 48 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 },
    },
  };

  return (
    <footer className="overflow-x-clip bg-[#15130d] text-white">
      <section className="overflow-x-clip bg-white px-5 pb-20 pt-16 text-[#12100b] sm:px-8 lg:px-20 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-[1680px]">
          <ProjectReveal>
            <div className="grid gap-10 lg:grid-cols-[500px_minmax(0,1fr)] lg:items-end">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={leftReveal}
              >
                <p className="text-[44px] font-semibold uppercase leading-[0.9] tracking-[-0.08em] sm:text-[60px] lg:text-[72px] lg:whitespace-nowrap">
                  {footer.eyebrow}
                </p>
                <button className="mt-10 inline-flex min-h-16 items-center gap-4 rounded-full bg-[#12100b] px-9 text-[1rem] font-semibold uppercase text-white transition hover:bg-[#252019]">
                  <span className="h-4 w-4 rounded-full bg-white" />
                  {footer.ctaLabel}
                </button>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={rightReveal}
                className="lg:pb-1"
              >
                <h2 className="text-[44px] font-semibold uppercase leading-[0.9] tracking-[-0.08em] sm:text-[60px] lg:text-[72px] lg:whitespace-nowrap">
                  {footer.title}
                </h2>
              </motion.div>
            </div>
          </ProjectReveal>
        </div>
      </section>

      <section className="px-5 pb-16 pt-[4.5rem] sm:px-8 lg:px-20 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-[1680px]">
          <ProjectReveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-start">
              <h3 className="text-[42px] font-semibold uppercase leading-[0.98] tracking-[-0.07em] sm:text-[48px] lg:text-[48px]">
                {statementLines.map((line) => (
                  <span key={line} className="block whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </h3>
              <div className="space-y-3 text-left text-[1.35rem] font-semibold leading-[1.7] lg:text-right">
                <p>{footer.location}</p>
                <p>{footer.phone}</p>
                <p>{footer.email}</p>
              </div>
            </div>
          </ProjectReveal>

          <ProjectReveal delay={140}>
            <div className="mt-20 grid gap-16 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-20">
              <div className="grid gap-16 sm:grid-cols-2 sm:gap-14">
                <div className="space-y-4 text-[1rem] font-semibold uppercase leading-9">
                  {footer.navLinks.map((item) => (
                    <a key={item} href="#" className="block text-white/95 transition hover:text-white/65">
                      {item}
                    </a>
                  ))}
                </div>

                <div className="space-y-4 text-[1rem] font-semibold uppercase leading-9">
                  {footer.socialLinks.map((item) => (
                    <a key={item} href="#" className="block text-white/95 transition hover:text-white/65">
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <form className="grid gap-10 lg:grid-cols-2">
                <FormLine label={footer.form.firstName} />
                <FormLine label={footer.form.lastName} />
                <FormLine label={footer.form.phone} />
                <FormLine label={footer.form.email} />
                <div className="lg:col-span-2">
                  <label className="block">
                    <span className="text-[0.95rem] font-semibold uppercase tracking-[-0.03em] text-white/85">
                      {footer.form.message}
                    </span>
                    <textarea className="mt-5 min-h-[3.5rem] w-full resize-none border-b border-white/20 bg-transparent text-white outline-none" />
                  </label>
                </div>
                <div className="lg:col-span-2">
                  <button
                    type="button"
                    className="inline-flex min-h-16 items-center gap-4 rounded-full bg-white px-9 text-[1rem] font-semibold uppercase text-[#15130d]"
                  >
                    <span className="h-4 w-4 rounded-full bg-[#15130d]" />
                    {footer.form.submitLabel}
                  </button>
                </div>
              </form>
            </div>
          </ProjectReveal>

        </div>
      </section>
    </footer>
  );
}
