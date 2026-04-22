import { motion } from "framer-motion";

export default function RolixyAgentsCta() {
  const heading = "Are You Currently Working on a Project? Let’s Talk!";

  const headingVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.15,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="bg-white">
      <div className="relative min-h-[620px] overflow-hidden lg:min-h-[760px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=2200&q=80"
            alt="Luxury modern house"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto flex min-h-[620px] max-w-[1100px] flex-col items-center justify-center px-4 text-center lg:min-h-[760px]">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headingVariants}
            className="max-w-[1100px] text-[34px] font-semibold leading-[1.2] tracking-[0.01em] text-white sm:text-[56px] lg:text-[72px]"
          >
            {heading.split(" ").map((word, wordIndex) => (
              <span
                key={`${word}-${wordIndex}`}
                className="mr-[0.24em] inline-block whitespace-nowrap"
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${letter}-${wordIndex}-${letterIndex}`}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h2>

          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.6] text-white/80 sm:text-[17px]">
            We value your privacy and promise to send you only the most important and interesting
            information.
          </p>

          <form className="mt-10 w-full max-w-[760px]">
            <div className="relative flex items-center rounded-full bg-white/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <input
                type="email"
                placeholder="Your email"
                className="h-[56px] w-full rounded-full bg-transparent px-6 pr-[135px] text-[15px] text-[#1a1a1a] placeholder:text-[#6b6b6b] outline-none sm:h-[62px] sm:px-7 sm:pr-[200px] sm:text-[16px]"
              />

              <button
                type="button"
                className="absolute right-[4px] top-1/2 h-[48px] -translate-y-1/2 rounded-full bg-[#5a1a0c] px-7 text-[14px] font-semibold text-white transition duration-300 hover:bg-[#6d1f0c] sm:right-[5px] sm:h-[52px] sm:px-10 sm:text-[16px]"
              >
                Join Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}