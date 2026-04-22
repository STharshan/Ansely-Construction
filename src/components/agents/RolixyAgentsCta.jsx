import { motion } from "framer-motion";

export default function RolixyAgentsCta() {
  const headingLines = ["Are You Currently Working", "on a Project? Let’s Talk!"];

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
            className="font-inter max-w-[1100px] text-[30px] font-medium leading-[39px] tracking-normal text-white sm:text-[38px] sm:leading-[49.4px] lg:text-[44px] lg:leading-[57.2px]"
          >
            {headingLines.map((line, lineIndex) => (
              <span key={line} className="block">
                {line.split(" ").map((word, wordIndex) => (
                  <span
                    key={`${word}-${lineIndex}-${wordIndex}`}
                    className="mr-[0.24em] inline-block whitespace-nowrap last:mr-0"
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={`${letter}-${lineIndex}-${wordIndex}-${letterIndex}`}
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>
            ))}
          </motion.h2>

          <p className="font-inter mt-5 w-full max-w-[530px] text-center text-[18px] font-normal leading-[27px] text-white sm:text-[20px] sm:leading-[30px]">
            We value your privacy and promise to send you only the most important and interesting
            information.
          </p>

          <form className="mt-10 w-full max-w-[500px]">
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="font-inter relative z-[2] block h-[56px] min-h-[56px] w-full rounded-[100px] border border-black/35 bg-white px-5 py-3 pr-[150px] text-[16px] font-medium leading-5 text-[#0a0a0a] placeholder:font-medium placeholder:text-[#1f1f1f] outline-none sm:pr-[170px]"
              />

              <button
                type="button"
                className="font-inter absolute right-[4px] top-1/2 z-[3] h-[48px] w-[128px] -translate-y-1/2 rounded-[100px] bg-[#5a1a0c] text-[16px] font-semibold leading-5 text-white transition duration-300 hover:bg-[#6d1f0c]"
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
