import ProjectReveal from "./ProjectReveal";

export default function ProjectHero({ hero }) {
  return (
    <section className="bg-[#fbfaf7] px-5 pb-4 pt-14 text-[#12100b] sm:px-8 lg:px-10 lg:pt-20">
      <div className="mx-auto max-w-[1680px]">
        <ProjectReveal className="max-w-[54rem]">
          <h1 className="max-w-[12ch] text-[2.8rem] font-semibold uppercase leading-[0.92] tracking-[-0.07em] sm:text-[3.8rem] lg:text-[5rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[36rem] text-[1rem] leading-7 text-[#6a7087] sm:text-[1.05rem]">
            {hero.description}
          </p>
        </ProjectReveal>
        <ProjectReveal delay={120} className="mt-8">
          <div className="overflow-hidden rounded-[1.25rem]">
            <img
              src={hero.image}
              alt={hero.title}
              className="h-[22rem] w-full object-cover sm:h-[30rem] lg:h-[36rem]"
            />
          </div>
        </ProjectReveal>
      </div>
    </section>
  );
}
