import ProjectReveal from "./ProjectReveal";

export default function ProjectHero({ hero }) {
  return (
    <section className="bg-white px-5 pb-6 pt-16 text-[#12100b] sm:px-8 lg:px-20 lg:pb-8 lg:pt-32">
      <div className="mx-auto max-w-[1680px]">
        <ProjectReveal className="max-w-[60rem]">
          <h1 className="font-geist max-w-[680px] text-[50px] font-semibold uppercase leading-[44px] tracking-[-1px] text-[#13120b] sm:text-[72px] sm:leading-[63.36px] lg:text-[80px] lg:leading-[70.4px]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[42rem] text-[18px] leading-7 text-[#6a7087] sm:text-[18px]">
            {hero.description}
          </p>
        </ProjectReveal>
      </div>
    </section>
  );
}
