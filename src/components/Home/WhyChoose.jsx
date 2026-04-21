import React from "react";
import { Cog, Globe2, MapPin, Sparkles } from "lucide-react";

const points = [
  {
    title: "Prime Location Advantage",
    description:
      "Each apartment is designed to maximize space and natural light.",
    icon: MapPin,
  },
  {
    title: "Construction Perfected",
    description:
      "Each apartment is designed to maximize space and natural light.",
    icon: Sparkles,
  },
  {
    title: "Carefully Planned Home",
    description:
      "Each apartment is designed to maximize space and natural light.",
    icon: Cog,
  },
  {
    title: "Modern Lifestyle Amenity",
    description:
      "Each apartment is designed to maximize space and natural light.",
    icon: Globe2,
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
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90">
              <span className="h-2 w-2 rounded-full bg-[#a6a04a]" />
              Why Choose Us
            </div>
            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[68px]">
              Why our property combines location and lifestyle
            </h2>
          </div>

          <div className="mt-14 grid items-end gap-8 lg:mt-16 lg:grid-cols-[300px_minmax(520px,640px)_300px] lg:gap-8">
            <div className="grid gap-6">
              {points.slice(0, 2).map((item) => (
                <FeatureCard key={item.title} item={item} />
              ))}
            </div>

            <div className="relative mx-auto flex w-full max-w-[640px] items-end justify-center ]">
              <img
                src="https://html.awaikenthemes.com/antila/images/why-choose-image-prime.png"
                alt="Modern apartment building"
                className="w-full object-contain"
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
    <article className="rounded-[24px] border border-white/10 bg-white/12 px-7 pb-7 pt-6 text-white backdrop-blur-[1px] lg:min-h-[280px]">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#a6a04a] text-[#151515]">
        <Icon size={22} />
      </div>
      <h3 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[32px] lg:text-[46px]">
        {item.title}
      </h3>
      <p className="mt-5 text-[15px] leading-[1.55] text-white/85 sm:text-lg">
        {item.description}
      </p>
    </article>
  );
}
