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
  return (
    <section className="bg-white px-5 pb-24 pt-8 text-[#12100b] sm:px-8 lg:px-20 lg:pb-32 lg:pt-10">
      <div className="mx-auto grid max-w-[1680px] gap-14 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.78fr)] lg:gap-18">
        <div className="space-y-16">
          <ProjectReveal>
            <div className="overflow-hidden ">
              <img
                src={hero.image}
                alt={hero.title}
                className="h-[200px] w-full object-cover sm:h-[400px] lg:h-[400px]"
              />
            </div>
          </ProjectReveal>

          <ProjectReveal>
            <section>
              <h2 className="text-[2.1rem] font-semibold uppercase leading-[0.95] tracking-[-0.06em] sm:text-[2.8rem] lg:text-[3.25rem]">
                {overview.label}
              </h2>
              <div className="mt-6 max-w-[52rem] space-y-4 text-[1rem] leading-7 text-[#6a7087] sm:text-[1.05rem]">
                {overview.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          </ProjectReveal>

          <ProjectReveal delay={100}>
            <section>
              <h2 className="text-[2.1rem] font-semibold uppercase leading-[0.95] tracking-[-0.06em] sm:text-[2.8rem] lg:text-[3.25rem]">
                {designApproach.label}
              </h2>
              <div className="mt-6 max-w-[52rem] space-y-4 text-[1rem] leading-7 text-[#6a7087] sm:text-[1.05rem]">
                {designApproach.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {gallery.map((image) => (
                  <div key={image.src} className="overflow-hidden rounded-[1rem]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-[16rem] w-full object-cover sm:h-[18rem] lg:h-[20rem]"
                    />
                  </div>
                ))}
              </div>
            </section>
          </ProjectReveal>
        </div>

        <ProjectReveal delay={140} className="lg:pt-8">
          <ProjectDetailsRail
            details={details}
            consultation={consultation}
          />
        </ProjectReveal>
      </div>
    </section>
  );
}
