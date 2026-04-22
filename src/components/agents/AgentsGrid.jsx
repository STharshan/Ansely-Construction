import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AgentsGrid({ agents }) {
  const headingText = "Meet Our Expert Agents";

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const headingVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.055,
        delayChildren: 0.2,
      },
    },
  };

  const headingLetterVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const revealVariants = {
    hidden: {
      opacity: 0,
      clipPath: "inset(42% 42% 42% 42%)",
      scale: 1.12,
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      transition: {
        duration: 1.75,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  return (
    <section className="bg-[var(--color-panel)] px-4 pb-16 pt-10 sm:px-8 lg:pb-24 lg:pt-26">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-16 mx-auto max-w-[760px] text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-mist)] px-4 py-2 text-[14px] font-semibold text-[var(--color-ink-soft)]"
          >
            <Sparkles size={16} />
            Our Agents
          </motion.div>

          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headingVariants}
            className="font-inter mt-4 text-center text-[34px] font-medium leading-[44.2px] tracking-normal text-[var(--color-ink)] sm:text-[50px] sm:leading-[65px] lg:text-[62px] lg:leading-[80.6px]"
          >
            {headingText.split("").map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                variants={headingLetterVariants}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent) => (
            <motion.article
              key={agent.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <motion.div
                variants={revealVariants}
                style={{ transformOrigin: "center" }}
                className="relative overflow-hidden rounded-[8px] bg-[var(--color-surface-alt)]"
              >
                <a href={agent.profileLink} className="block">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="h-[380px] w-full object-cover object-top transition duration-1000 group-hover:scale-105 sm:h-[470px]"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={textVariants}
                className="flex items-start justify-between gap-4 pt-6"
              >
                <div>
                  <a
                    href={agent.profileLink}
                    className="text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand)]"
                  >
                    {agent.name}
                  </a>
                  <p className="mt-1 text-[16px] font-medium text-[var(--color-ink-muted)]">{agent.role}</p>
                </div>

                <a
                  href={agent.socialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink-soft)] transition duration-300 hover:bg-[var(--color-ink)] hover:text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6C13.1935 6 14.3381 6.47411 15.182 7.31802C16.0259 8.16193 16.5 9.30653 16.5 10.5V15.75H13.5V10.5C13.5 10.1022 13.342 9.72064 13.0607 9.43934C12.7794 9.15804 12.3978 9 12 9C11.6022 9 11.2206 9.15804 10.9393 9.43934C10.658 9.72064 10.5 10.1022 10.5 10.5V15.75H7.5V10.5C7.5 9.30653 7.97411 8.16193 8.81802 7.31802C9.66193 6.47411 10.8065 6 12 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.5 6.75H1.5V15.75H4.5V6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 4.5C3.82843 4.5 4.5 3.82843 4.5 3C4.5 2.17157 3.82843 1.5 3 1.5C2.17157 1.5 1.5 2.17157 1.5 3C1.5 3.82843 2.17157 4.5 3 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
