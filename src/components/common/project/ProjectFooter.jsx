import ProjectReveal from "./ProjectReveal";

function FormLine({ label }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold uppercase tracking-[-0.03em] text-white/85">
        {label}
      </span>
      <div className="mt-4 h-12 border-b border-white/20" />
    </label>
  );
}

export default function ProjectFooter({ footer }) {
  return (
    <footer className="bg-[#15130d] px-5 pb-10 pt-20 text-white sm:px-8 lg:px-10 lg:pt-24">
      <div className="mx-auto max-w-[1680px]">
        <ProjectReveal>
          <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
            <div>
              <p className="text-[2.5rem] font-semibold uppercase leading-[0.92] tracking-[-0.07em] text-white sm:text-[3.2rem] lg:text-[4.2rem]">
                {footer.eyebrow}
              </p>
              <button className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-full bg-white px-7 text-[0.9rem] font-semibold uppercase text-[#15130d] transition hover:bg-[#f2ede5]">
                <span className="h-4 w-4 rounded-full bg-[#15130d]" />
                {footer.ctaLabel}
              </button>
            </div>

            <div className="lg:pt-6">
              <h2 className="max-w-4xl text-[2.8rem] font-semibold uppercase leading-[0.95] tracking-[-0.07em] text-white sm:text-[3.6rem] lg:text-[4.8rem]">
                {footer.title}
              </h2>
            </div>
          </div>
        </ProjectReveal>

        <ProjectReveal delay={120}>
          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <h3 className="max-w-3xl text-[2.25rem] font-semibold uppercase leading-[0.96] tracking-[-0.06em] sm:text-[3rem] lg:text-[3.75rem]">
              {footer.statement}
            </h3>
            <div className="space-y-2 text-right text-[1rem] font-semibold leading-8">
              <p>{footer.location}</p>
              <p>{footer.phone}</p>
              <p>{footer.email}</p>
            </div>
          </div>
        </ProjectReveal>

        <ProjectReveal delay={180}>
          <div className="mt-16 grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[220px_200px_minmax(0,1fr)]">
            <div className="space-y-3 text-[0.95rem] font-semibold uppercase leading-8">
              {footer.navLinks.map((item) => (
                <a key={item} href="#" className="block text-white/95 transition hover:text-white/65">
                  {item}
                </a>
              ))}
            </div>

            <div className="space-y-3 text-[0.95rem] font-semibold uppercase leading-8">
              {footer.socialLinks.map((item) => (
                <a key={item} href="#" className="block text-white/95 transition hover:text-white/65">
                  {item}
                </a>
              ))}
            </div>

            <form className="grid gap-8 lg:grid-cols-2">
              <FormLine label={footer.form.firstName} />
              <FormLine label={footer.form.lastName} />
              <FormLine label={footer.form.phone} />
              <FormLine label={footer.form.email} />
              <div className="lg:col-span-2">
                <FormLine label={footer.form.message} />
              </div>
              <div className="lg:col-span-2">
                <button
                  type="button"
                  className="inline-flex min-h-14 items-center gap-3 rounded-full bg-white px-7 text-[0.9rem] font-semibold uppercase text-[#15130d]"
                >
                  <span className="h-4 w-4 rounded-full bg-[#15130d]" />
                  {footer.form.submitLabel}
                </button>
              </div>
            </form>
          </div>
        </ProjectReveal>

        <div className="flex flex-col gap-4 pt-10 text-[1rem] text-white/80 lg:flex-row lg:items-center lg:justify-between">
          <p>{footer.legal}</p>
          <p>{footer.credits}</p>
        </div>
      </div>
    </footer>
  );
}
