import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AgentsCta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      setStatus("error");
      setMessage("Email service is not configured yet.");
      return;
    }

    try {
      setStatus("loading");
      setMessage("");

      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          user_email: email.trim(),
          source: "Agents CTA",
        },
        {
          publicKey: emailJsPublicKey,
        },
      );

      setEmail("");
      setStatus("success");
      setMessage("Thank you! We'll keep you updated.");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
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

          <form className="mt-10 w-full max-w-[500px]" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="font-inter relative z-[2] block h-[56px] min-h-[56px] w-full rounded-[100px] border border-black/35 bg-white px-5 py-3 pr-[150px] text-[16px] font-medium leading-5 text-[#0a0a0a] placeholder:font-medium placeholder:text-[#1f1f1f] outline-none sm:pr-[170px]"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="font-inter absolute right-[4px] top-1/2 z-[3] h-[48px] w-[128px] -translate-y-1/2 rounded-[100px] bg-[#5a1a0c] text-[16px] font-semibold leading-5 text-white transition duration-300 hover:bg-[#6d1f0c] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Sending" : "Join Now"}
              </button>
            </div>
            {message && (
              <p
                className={`font-inter mt-4 text-center text-[14px] font-medium leading-5 ${
                  status === "success" ? "text-white" : "text-[#ffd7d7]"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
