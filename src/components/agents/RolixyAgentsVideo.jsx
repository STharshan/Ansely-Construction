import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

export default function RolixyAgentsVideo({ video }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

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
    <section className="bg-white pb-16 lg:pb-24">
      <div className="w-full overflow-hidden">
        <div className="relative h-[430px] sm:h-[560px] lg:h-[700px]">
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
            className="absolute bottom-8 right-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-white text-[#3b1107] shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:bottom-10 sm:right-10 sm:h-28 sm:w-28"
          >
            {playing ? <Pause size={40} strokeWidth={2} /> : <Play size={40} strokeWidth={2} />}
          </button>

          <div className="absolute bottom-10 left-6 right-36 sm:bottom-12 sm:left-10">
            <h2 className="text-[50px] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[72px]">
              {video.title}
            </h2>
            <p className="mt-3 text-[20px] font-medium text-white/90 sm:text-[32px]">{video.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
