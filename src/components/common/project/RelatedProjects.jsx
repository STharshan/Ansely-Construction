import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectReveal from "./ProjectReveal";

export default function RelatedProjects({ relatedProjects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalProjects = relatedProjects.items.length;

  const goPrevious = () => {
    setActiveIndex((current) => (current - 1 + totalProjects) % totalProjects);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % totalProjects);
  };

  return (
    <section className="overflow-hidden bg-[#fbfaf7] px-5 py-24 text-[#12100b] sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1680px]">
        <ProjectReveal className="text-center">
          <p className="text-[1rem] uppercase tracking-[-0.03em] text-[#1a1812]">
            {relatedProjects.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-[2.5rem] font-semibold uppercase leading-[0.96] tracking-[-0.07em] sm:text-[3.4rem] lg:text-[4.4rem]">
            {relatedProjects.title}
          </h2>
        </ProjectReveal>

        <div className="mt-12 flex items-center justify-end gap-4">
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Show previous project"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1b1710] text-[#1b1710] transition hover:bg-[#1b1710] hover:text-white"
          >
            <ArrowLeft size={26} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Show next project"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1b1710] text-[#1b1710] transition hover:bg-[#1b1710] hover:text-white"
          >
            <ArrowRight size={26} strokeWidth={1.5} />
          </button>
        </div>

        <ProjectReveal delay={100}>
          <div className="mt-8 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {relatedProjects.items.map((project) => (
                <article
                  key={project.title}
                  className="grid w-full shrink-0 gap-8 lg:grid-cols-[280px_minmax(0,1fr)_180px] lg:items-start"
                >
                  <div className="space-y-5 pt-2">
                    <h3 className="text-[1.7rem] font-medium uppercase tracking-[-0.05em]">
                      {project.title}
                    </h3>
                    <div className="text-[0.95rem] text-[#6a7087]">
                      {project.location} - {project.year}
                    </div>
                    <p className="max-w-sm text-[0.98rem] leading-7 text-[#6a7087]">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative min-h-[24rem] sm:min-h-[32rem]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[22rem] w-[78%] rounded-[1rem] object-cover sm:h-[32rem]"
                    />
                    <img
                      src={project.accentImage}
                      alt={`${project.title} alternate view`}
                      className="absolute bottom-0 right-0 h-[14rem] w-[58%] rounded-[1rem] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:h-[20rem]"
                    />
                  </div>

                  <div className="flex items-end lg:min-h-[32rem]">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-3 text-[0.95rem] font-medium uppercase text-[#ef5934]"
                    >
                      <span className="h-4 w-4 rounded-full bg-[#ef5934]/25 ring-4 ring-[#ef5934]/10">
                        <span className="block h-full w-full rounded-full bg-[#ef5934]" />
                      </span>
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </ProjectReveal>
      </div>
    </section>
  );
}
