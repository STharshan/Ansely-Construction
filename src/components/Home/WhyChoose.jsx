import React from "react";
import { ShieldCheck, HardHat, PencilRuler, Trophy } from "lucide-react";

const points = [
  {
    title: "UK-Based, Fully Accountable",
    description:
      "Benefit from European standards and clear contracts. Based in the UK, we offer full accountability and total peace of mind for your investment.",
    icon: ShieldCheck,
  },
  {
    title: "End-to-End Build Management",
    description:
      "From land sourcing to final handover, we manage every detail. You'll never have to coordinate across time zones or chase local contractors yourself.",
    icon: HardHat,
  },
  {
    title: "Bespoke Design, Built Around You",
    description:
      "Every project is designed from scratch to match your vision and budget. No generic templates, just high-quality architecture tailored to your unique lifestyle.",
    icon: PencilRuler,
  },
  {
    title: "100+ Builds. Proven Track Record.",
    description:
      "With over 100 completed homes and hotels across Sri Lanka, we have the local expertise to deliver projects to the highest international standards.",
    icon: Trophy,
  },
];

export default function WhyChoose() {
  return (
    <section id="whyus" className="bg-[var(--color-panel)] px-4 py-8 md:px-6 md:py-10">
      <div
        className="relative overflow-hidden rounded-[28px] bg-[var(--color-ink)] px-5 pb-0 sm:px-8 md:px-12 lg:px-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), radial-gradient(circle at 50% 10%, rgba(156,156,85,0.24), rgba(0,0,0,0.94) 34%, rgba(0,0,0,1) 72%)",
          backgroundSize: "78px 78px, 78px 78px, cover",
        }}
      >
        {/* Added py-16 to container to ensure spacing around the centered content */}
        <div className="mx-auto max-w-[1360px] py-16">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-[var(--color-brand)]" />
              Why Choose Us
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[64px]">
              Why Families and Investors <span className="accent-font italic">Choose</span> Euro Builders
            </h2>
          </div>

          {/* Changed items-end to items-center */}
          <div className="mt-14 grid items-center gap-8 lg:mt-16 lg:grid-cols-[320px_1fr_320px] lg:gap-8">
            <div className="grid gap-6">
              {points.slice(0, 2).map((item) => (
                <FeatureCard key={item.title} item={item} />
              ))}
            </div>

            {/* Image container now centers vertically between card rows */}
            <div className="relative mx-auto flex w-full max-w-[600px] items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
                alt="Custom home built in Sri Lanka by Euro Builders"
                loading="lazy" 
                className="w-full object-contain rounded-xl"
              />
            </div>

            <div className="grid gap-6">
              {points.slice(2, 4).map((item) => (
                <FeatureCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="rounded-[24px] border border-white/15 bg-white/5 px-7 pb-8 pt-7 text-white backdrop-blur-md lg:min-h-[300px]">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)] text-[var(--color-ink)]">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-[28px]">
        {item.title}
      </h3>
      <p className="mt-4 text-[15px] leading-relaxed text-white/80">{item.description}</p>
    </article>
  );
}