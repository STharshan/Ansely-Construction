export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background */}
      <img
        src="/hero.jpg"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12">
        <div className="max-w-3xl text-white">
          
          {/* Tag */}
          <div className="inline-block mb-4 px-4 py-1 bg-white/10 rounded-full text-sm">
            A Better Way To Experience Home
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Your Dream Apartment in the Perfect Location
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base text-gray-200 max-w-xl">
            Experience contemporary apartments crafted with smart layouts,
            premium finishes, and everyday comfort.
          </p>
        </div>
      </div>

      {/* Floating Card */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 z-10 w-[90%] sm:w-[350px] bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-white">
        <div className="flex gap-4">
          
          <img
            src="/card.jpg"
            alt="home"
            className="w-24 h-24 object-cover rounded-lg"
          />

          <div>
            <p className="text-sm text-gray-200">
              “Find your perfect home designed for comfort, style, and everyday living”
            </p>

            <button className="text-lime-400 text-sm mt-2">
              Bok A Home →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}