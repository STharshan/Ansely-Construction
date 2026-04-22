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
      "From land sourcing to final handover, we manage every detail. You’ll never have to coordinate across time zones or chase local contractors yourself.",
    icon: HardHat,
  },
  {
    title: "Bespoke Design, Built Around You",
    description:
      "Every project is designed from scratch to match your vision and budget. No generic templates—just high-quality architecture tailored to your unique lifestyle.",
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
    <section className="bg-white px-4 py-8 md:px-6 md:py-10">
      <div
        className="relative overflow-hidden rounded-[28px] bg-[#101113] px-5 pb-0 pt-12 sm:px-8 md:px-12 md:pt-16 lg:px-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), radial-gradient(circle at 50% 10%, rgba(255,255,255,0.22), rgba(16,17,19,0.95) 34%, #101113 72%)",
          backgroundSize: "78px 78px, 78px 78px, cover",
        }}
      >
        <div className="mx-auto max-w-[1360px] p-6">
          <div className="text-center">
            {/* Eyebrow tag as a styled span */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-[#a6a04a]" />
              Why Choose Us
            </span>
            
            {/* Main heading with accent font span */}
            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[64px]">
              Why Families and Investors <span className="accent-font italic">Choose</span> Euro Builders
            </h2>
          </div>

          <div className="mt-14 grid items-end gap-8 lg:mt-16 lg:grid-cols-[320px_1fr_320px] lg:gap-8">
            {/* Left Column */}
            <div className="grid gap-6">
              {points.slice(0, 2).map((item) => (
                <FeatureCard key={item.title} item={item} />
              ))}
            </div>

            {/* Centre Image */}
            <div className="relative mx-auto flex w-full max-w-[600px] items-end justify-center">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
                alt="Custom home built in Sri Lanka by Euro Builders"
                className="w-full object-contain"
              />
            </div>

            {/* Right Column */}
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
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#a6a04a] text-[#151515]">
        <Icon size={24} />
      </div>
      {/* Card title H3 */}
      <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-[28px]">
        {item.title}
      </h3>
      {/* Card description P - text-white/80 for WCAG AA contrast on dark backgrounds */}
      <p className="mt-4 text-[15px] leading-relaxed text-white/80">
        {item.description}
      </p>
    </article>
  );
}