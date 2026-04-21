import React from "react";
import { ArrowUpRight } from "lucide-react";

const headingWords = [
  "Step",
  "inside",
  "and",
  "discover",
  "a",
  "new",
  "standard",
  "of",
  "living",
];

export default function CtaContactSection() {
  return (
    // OUTER WHITE
    <section className="bg-white">

      {/* INNER GREY CONTAINER */}
      <div className="relative overflow-hidden rounded-[30px] bg-white">

        {/* blueprint image ONLY inside container */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-[360px] opacity-30"
          style={{
            backgroundImage:
              "url('https://html.awaikenthemes.com/antila/images/section-bg-image-1.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            backgroundSize: "contain",
          }}
        />

        <div className="grid xl:grid-cols-[1.05fr_0.95fr] h-full">

          {/* LEFT */}
          <div className="flex flex-col justify-between px-6 py-16 sm:px-10 md:px-16 xl:px-[110px] xl:py-[50px]">
            <div>
              {/* pill */}
              <div className="inline-flex items-center gap-3 rounded-full border border-[#dcdcd6] px-6 py-3 bg-[#f4f4f1]">
                <span className="h-[8px] w-[8px] rounded-full bg-[#a7a14b]" />
                <span className="text-[16px] font-medium text-[#111]">
                  Schedule A Visit
                </span>
              </div>

              {/* heading */}
              <h2 className="mt-8 max-w-[760px] text-[48px] sm:text-[58px] md:text-[50px] xl:text-[50px] font-medium leading-[1.05] tracking-[-0.04em] text-[#111]">
                {headingWords.map((word, i) => (
                  <span
                    key={i}
                    className="inline-block mr-[12px] mb-[6px] overflow-hidden"
                  >
                    <span
                      className="inline-block animate-textReveal"
                      style={{ animationDelay: `${i * 0.07}s` }}
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </h2>

              {/* paragraph */}
              <p
                className="mt-8 max-w-[750px] text-[18px] leading-[1.7] text-[#3a3f46] opacity-0 animate-fadeUp"
                style={{ animationDelay: "0.6s" }}
              >
                From spacious interiors and modern layouts to landscaped outdoor
                areas and world-class amenities, every image highlights the
                perfect blend of style, functionality, and comfort.
              </p>

              {/* button */}
              <button
                className="mt-10 inline-flex items-center gap-3 rounded-[10px] bg-[#a7a14b] px-7 py-4 text-[18px] font-semibold text-white hover:bg-[#969042] opacity-0 animate-fadeUp"
                style={{ animationDelay: "0.85s" }}
              >
                Contact Us Today!
                <ArrowUpRight size={22} />
              </button>
            </div>

            {/* bottom stats */}
            <div className="mt-16 max-w-[500px] opacity-0 animate-fadeUp" style={{ animationDelay: "1s" }}>
              <div className="flex items-center">
                <div className="flex">
                  <img className="h-12 w-12 rounded-full border-2 border-white -ml-0" src="https://i.pravatar.cc/100?img=1" />
                  <img className="h-12 w-12 rounded-full border-2 border-white -ml-3" src="https://i.pravatar.cc/100?img=2" />
                  <img className="h-12 w-12 rounded-full border-2 border-white -ml-3" src="https://i.pravatar.cc/100?img=3" />
                  <div className="h-12 w-12 rounded-full bg-[#a7a14b] text-white flex items-center justify-center text-sm font-semibold -ml-3">
                    15K+
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-[#ddd] pt-6">
                <h3 className="text-[22px] font-semibold text-[#111]">
                  Units Delivered
                </h3>
                <p className="mt-4 text-[17px] text-[#3a3f46] leading-[1.8]">
                  Successfully completed homes providing comfort and modern
                  living to hundreds of families.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-[720px] rounded-[26px] bg-[#e3e3de] px-8 py-10">

              <h3 className="text-[34px] font-medium text-[#111]">
                Contact Us
              </h3>

              <div className="mt-6 border-t border-[#cfcfc9]" />

              <form className="mt-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="First Name:" />
                  <Input label="Last Name:" />
                  <Input label="Email Address:" />
                  <Input label="Phone Number:" />
                </div>

                <div>
                  <label className="block mb-3 font-semibold">Message:</label>
                  <textarea className="w-full h-[150px] rounded-[14px] bg-[#f8f8f6] px-5 py-4 outline-none" />
                </div>

                <button className="bg-[#a7a14b] text-white px-7 py-4 rounded-[10px] flex items-center gap-2">
                  Send Message <ArrowUpRight size={20} />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* animations */}

      </div>
    </section>
  );
}

function Input({ label }) {
  return (
    <div>
      <label className="block mb-3 font-semibold text-[#111]">{label}</label>
      <input
        className="w-full h-[70px] rounded-[14px] bg-[#f8f8f6] px-5 outline-none"
        placeholder={`Enter ${label}`}
      />
    </div>
  );
}