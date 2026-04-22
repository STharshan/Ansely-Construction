import React from 'react';

const VideoSection = () => {
  // Replace this with the actual YouTube video ID from your metadata
  const youtubeUrl = "https://www.youtube.com/watch?v=p0kOED0sfCw";

  return (
    <section className=" bg-white py-15">
        {/* Aspect Ratio Container (16:9) */}
        <div className="relative group overflow-hidden cursor-pointer">
          
          {/* Background Image / Video Cover */}
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src="https://cdn.prod.website-files.com/693e9d1043906400d3af572d/694534185fedad46d2ee80e3_ChatGPT%20Image%2019%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.%2C%2013_16_34.webp" 
              alt="Modern Modular Home Construction"
              className="w-full h-200 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Overlay & Play Button Container */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/20">
            
            {/* Play Button Wrapper */}
            <a 
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110"
            >
              {/* Animated Outer Ring */}
              <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/30 animate-ping opacity-0 group-hover:opacity-100" />
              
              {/* Play Button Circle */}
              <div className="z-10 w-16 h-16 md:w-20 md:h-20 bg-[#13120B] rounded-full flex items-center justify-center shadow-lg border border-white/10">
                <svg 
                  className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" 
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