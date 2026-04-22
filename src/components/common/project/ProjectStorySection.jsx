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
    <section className="bg-white px-5 pb-24 pt-16 text-[#12100b] sm:px-8 sm:pt-20 lg:px-20 lg:pb-32 lg:pt-24">
      <div className="mx-auto grid max-w-[1680px] gap-14 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.78fr)] lg:gap-18">
        <div className="space-y-16">
          <ProjectReveal className="max-w-[60rem]">
            <h1 className="font-geist max-w-[680px] text-[50px] font-semibold uppercase leading-[44px] tracking-[-1px] text-[#13120b] sm:text-[72px] sm:leading-[63.36px] lg:text-[80px] lg:leading-[70.4px]">
              {hero.title}
            </h1>
            <p className="font-geist mt-7 max-w-[46rem] text-[18px] font-normal leading-[25.2px] text-[#5e6073]">
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
              <div className="font-geist mt-6 max-w-[52rem] space-y-4 text-[18px] font-normal leading-[25.2px] text-[#5e6073]">
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
              <div className="font-geist mt-6 max-w-[52rem] space-y-4 text-[18px] font-normal leading-[25.2px] text-[#5e6073]">
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

        <ProjectReveal delay={140}>
          <ProjectDetailsRail
            details={details}
            consultation={consultation}
          />
        </ProjectReveal>
      </div>
    </section>
  );
}
