import { ArrowUpRight } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80";
const promoImage =
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80";

export default function HeroSection() {
  return (
    <section className="bg-[#efede7] px-3 pb-0 pt-3 sm:px-4 sm:pt-4 font-['DM_Sans',_sans-serif]">
      <div className="relative overflow-hidden rounded-[26px] bg-[#202833] pb-15 text-white sm:rounded-[30px]">
        {/* Background Overlays */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,52,62,0.78)_0%,rgba(34,42,51,0.4)_25%,rgba(23,24,26,0.58)_62%,rgba(25,22,20,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_38%)]" />
        <div className="absolute inset-x-0 top-[108px] z-10 h-px bg-white/10" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-[linear-gradient(180deg,rgba(22,20,17,0)_0%,rgba(22,20,17,0.58)_100%)]" />

        <div className="relative z-20 mx-auto flex min-h-[640px] max-w-[1380px] flex-col justify-end px-4 pb-6 pt-28 sm:px-6 sm:pb-8 md:min-h-[620px] md:px-8 lg:px-8 lg:pb-4 lg:pt-32">
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_460px] xl:grid-cols-[minmax(0,1fr)_500px]">
            
            {/* Left Content */}
            <div className="max-w-[760px] pb-3 md:pb-6 lg:pb-7">
              {/* Eyebrow Tag */}
              <div className="inline-flex mt-5 sm:mt-0 rounded-full border border-white/10 bg-[rgba(104,111,102,0.78)] px-5 py-1 text-sm font-medium tracking-tight text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <span className="mr-3 mt-[5px] h-2 w-2 rounded-full bg-[#b0ad58]" />
                <span>Building Dream Homes Across Sri Lanka</span>
              </div>

              {/* Main Headline */}
              <h1 className="mt-6 max-w-[700px] text-[3rem] font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-[3.9rem]">
                Build Your <span className="font-['Cormorant_Garamond'] italic font-medium">Dream Home</span> in Sri Lanka — From Land to Keys
              </h1>

              {/* Subline */}
              <p className="mt-6 max-w-[910px] text-base leading-relaxed font-normal text-white/90 sm:text-lg lg:max-w-[790px] lg:text-[1.1rem]">
                Euro Builders manages every step of your custom home build in Sri Lanka — land sourcing, 
                architecture, design and full construction. <span className="font-['Cormorant_Garamond'] italic text-white">European standards.</span> Local expertise. Built for you.
              </p>
            </div>

            {/* Right Card */}
            <div className="w-full lg:mb-[14px] lg:justify-self-end">
              <div className="rounded-[28px] border border-white/10 bg-[rgba(111,106,95,0.88)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-5">
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="overflow-hidden rounded-[18px] sm:w-[204px] sm:min-w-[204px]">
                    <img
                      src={promoImage}
                      alt="Modern Sri Lankan Villa"
                      className="h-[190px] w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-4 pt-1">
                    {/* Card Quote */}
                    <p className="max-w-[220px] text-[1.15rem] font-medium leading-[1.4] text-white">
                      &ldquo;Your vision. Our expertise. One <span className="font-['Cormorant_Garamond'] italic">seamless</span> build.&rdquo;
                    </p>

                    <div className="border-t border-white/10 pt-6">
                      {/* Card CTA */}
                      <a 
                        href="#enquiry-form" 
                        className="inline-flex items-center gap-3 text-[1.05rem] font-semibold text-white transition hover:text-[#d7d06f] group"
                      >
                        Start Your Build
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b0ad58] text-[#292724] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <ArrowUpRight size={17} />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}