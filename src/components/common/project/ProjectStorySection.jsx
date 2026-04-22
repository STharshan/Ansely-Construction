import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import ProjectReveal from "./ProjectReveal";
import ProjectDetailsRail from "./ProjectDetailsRail";

export default function ProjectStorySection({
  hero,
  overview,
  designApproach,
  gallery,
  details,
  consultation,
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const activeImage = activeImageIndex === null ? null : gallery[activeImageIndex];

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showPreviousImage = () => {
    setActiveImageIndex((current) => (current - 1 + gallery.length) % gallery.length);
  };

  const showNextImage = () => {
    setActiveImageIndex((current) => (current + 1) % gallery.length);
  };

  return (
    <section className="bg-white px-5 pb-20 pt-14 text-[#12100b] sm:px-8 sm:pt-16 lg:px-20 lg:pb-28 lg:pt-20">
      <div className="mx-auto grid max-w-[1680px] gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.78fr)] lg:gap-12">
        <div className="space-y-10 lg:space-y-12">
          <ProjectReveal className="max-w-[60rem]">
            <h1 className="font-geist max-w-[680px] text-[50px] font-semibold uppercase leading-[44px] tracking-[-1px] text-[#13120b] sm:text-[72px] sm:leading-[63.36px] lg:text-[80px] lg:leading-[70.4px]">
              {hero.title}
            </h1>
            <p className="font-geist mt-5 max-w-[46rem] text-[18px] font-normal leading-[25.2px] text-[#5e6073]">
              {hero.description}
            </p>
          </ProjectReveal>

          <ProjectReveal>
            <div className="overflow-hidden ">
              <img
                src={hero.image}
                alt={hero.title}
                className="h-[220px] w-full object-cover sm:h-[400px] lg:h-[420px]"
              />
            </div>
          </ProjectReveal>

          <ProjectReveal>
            <section>
              <h2 className="font-geist text-[42px] font-semibold uppercase leading-[50.4px] tracking-[-1px] text-[#13120b] sm:text-[46px] sm:leading-[55.2px] lg:text-[48px] lg:leading-[57.6px]">
                {overview.label}
              </h2>
              <div className="font-geist mt-4 max-w-[52rem] space-y-3 text-[18px] font-normal leading-[25.2px] text-[#5e6073]">
                {overview.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          </ProjectReveal>

          <ProjectReveal delay={100}>
            <section>
              <h2 className="font-geist text-[42px] font-semibold uppercase leading-[50.4px] tracking-[-1px] text-[#13120b] sm:text-[46px] sm:leading-[55.2px] lg:text-[48px] lg:leading-[57.6px]">
                {designApproach.label}
              </h2>
              <div className="font-geist mt-4 max-w-[52rem] space-y-3 text-[18px] font-normal leading-[25.2px] text-[#5e6073]">
                {designApproach.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {gallery.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className="group overflow-hidden rounded-[1rem] bg-[#13120b] text-left focus:outline-none focus:ring-2 focus:ring-[#13120b] focus:ring-offset-4"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-[16rem] w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-80 sm:h-[18rem] lg:h-[20rem]"
                    />
                  </button>
                ))}
              </div>
            </section>
          </ProjectReveal>
        </div>

        <ProjectReveal delay={140}>
          <ProjectDetailsRail
            details={details}
            consultation={consultation}
          />
        </ProjectReveal>
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-50 bg-[#101010]/95 px-4 py-4 text-white sm:px-8">
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute right-6 top-6 z-20 inline-flex h-11 w-11 items-center justify-center text-white transition hover:text-white/70"
          >
            <X size={34} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            onClick={showPreviousImage}
            aria-label="Show previous image"
            className="absolute left-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center text-white/70 transition hover:text-white md:inline-flex"
          >
            <ChevronLeft size={54} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={showNextImage}
            aria-label="Show next image"
            className="absolute right-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center text-white/70 transition hover:text-white md:inline-flex"
          >
            <ChevronRight size={54} strokeWidth={1.5} />
          </button>

          <div className="flex h-full flex-col items-center justify-center gap-5">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[78vh] w-full max-w-[1300px] object-contain"
            />

            <div className="flex max-w-full items-center gap-3 overflow-x-auto px-2">
              {gallery.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Show image ${index + 1}`}
                  className={`h-16 w-24 shrink-0 overflow-hidden border transition sm:h-20 sm:w-28 ${
                    index === activeImageIndex
                      ? "border-white opacity-100"
                      : "border-transparent opacity-55 hover:opacity-85"
                  }`}
                >
                  <img src={image.src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
