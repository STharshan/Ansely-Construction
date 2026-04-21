import ProjectReveal from "./ProjectReveal";

export default function ProjectHero({ hero }) {
  return (
    <section className="bg-[#fbfaf7] px-5 pb-6 pt-16 text-[#12100b] sm:px-8 lg:px-10 lg:pb-8 lg:pt-20">
      <div className="mx-auto max-w-[1680px]">
        <ProjectReveal className="max-w-[60rem]">
          <h1 className="max-w-[11ch] text-[3rem] font-semibold uppercase leading-[0.9] tracking-[-0.08em] sm:text-[4.2rem] lg:text-[5.75rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[42rem] text-[1rem] leading-7 text-[#6a7087] sm:text-[1.08rem]">
            {hero.description}
          </p>
        </ProjectReveal>
      </div>
    </section>
  );
}
