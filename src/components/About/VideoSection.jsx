import React from "react";

const VideoSection = () => {
  const youtubeUrl = "https://www.youtube.com/watch?v=p0kOED0sfCw";

  return (
    <section className="bg-[var(--color-panel)] py-15">
      <div className="group relative cursor-pointer overflow-hidden">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src="https://cdn.prod.website-files.com/693e9d1043906400d3af572d/694534185fedad46d2ee80e3_ChatGPT%20Image%2019%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.%2C%2013_16_34.webp"
            alt="Modern Modular Home Construction"
            loading="lazy"
            className="h-200 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/20">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex transform items-center justify-center transition-transform duration-300 group-hover:scale-110"
          >
            <div className="absolute h-20 w-20 rounded-full border-2 border-white/30 opacity-0 animate-ping group-hover:opacity-100 md:h-24 md:w-24" />

            <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[var(--color-ink)] shadow-lg md:h-20 md:w-20">
              <svg
                className="ml-1 h-6 w-6 text-white md:h-8 md:w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
