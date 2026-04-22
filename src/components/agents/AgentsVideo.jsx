import { Pause, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function AgentsVideo({ video }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const title = video.title || "";

  const titleVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.25,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
      return;
    }
    videoRef.current.pause();
    setPlaying(false);
  };

  return (
    <section className="bg-[var(--color-panel)] pb-16 lg:pb-24">
      <div className="w-full overflow-hidden">
        <div className="relative h-[605px] sm:h-[560px] lg:h-[700px]">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={video.poster}
            className="h-full w-full object-cover"
          >
            <source src={video.mp4} type="video/mp4" />
            <source src={video.webm} type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.25)_40%,rgba(0,0,0,0.45)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/10" />
          <button
            onClick={togglePlayback}
            className="absolute left-1/2 top-1/2 inline-flex h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[var(--color-brand)] shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:bottom-10 sm:left-auto sm:right-10 sm:top-auto sm:h-28 sm:w-28 sm:translate-x-0 sm:translate-y-0"
          >
            {playing ? <Pause size={40} strokeWidth={2} /> : <Play size={40} strokeWidth={2} />}
          </button>

          <div className="absolute bottom-7 left-6 right-6 sm:bottom-12 sm:left-10 sm:right-36">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              className="font-inter text-[30px] font-medium leading-[39px] tracking-normal text-white sm:text-[44px] sm:leading-[57.2px]"
            >
              {title.split(" ").map((word, wordIndex) => (
                <span key={`${word}-${wordIndex}`} className="mr-[0.22em] inline-block whitespace-nowrap">
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
            <p className="font-inter mt-3 text-[18px] font-normal leading-[27px] text-white sm:text-[20px] sm:leading-[30px]">
              {video.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
