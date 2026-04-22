import React from "react";
import { Check, Phone } from "lucide-react";

const apartments = [
  {
    id: 1,
    title: "Skyline Residency",
    description: "Working professionals & small family this apartment offer smart.",
    image: "https://html.awaikenthemes.com/antila/images/apartment-image-1-prime.jpg",
    features: ["Power Backup for Essentials", "Modern kitchen layout"],
  },
  {
    id: 2,
    title: "Greenview Homes",
    description: "Working professionals & small family this apartment offer smart.",
    image: "https://html.awaikenthemes.com/antila/images/apartment-image-1-prime.jpg",
    features: ["Power Backup for Essentials", "Modern kitchen layout"],
  },
  {
    id: 3,
    title: "Prime Living Towers",
    description: "Working professionals & small family this apartment offer smart.",
    image: "https://html.awaikenthemes.com/antila/images/apartment-image-1-prime.jpg",
    features: ["Power Backup for Essentials", "Modern kitchen layout"],
  },
];

const CompletedProjects = () => {
  return (
    <section className="bg-[var(--color-surface)] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--color-brand)]"></span>
            Our Apartments
          </div>

          <h2 className="px-0 text-4xl font-semibold text-[var(--color-ink)] md:text-6xl 2xl:px-32">
            Discover apartments crafted for comfortable urban living
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {apartments.map((item) => (
            <div key={item.id} className="group relative h-[600px] overflow-hidden rounded-3xl">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative flex h-full items-end p-6 text-white">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                  <p className="mb-5 text-white/90">{item.description}</p>

                  <div className="mb-5 border-t border-white/20"></div>

                  <ul className="space-y-3">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="rounded-full bg-[var(--color-brand)] p-1 text-black">
                          <Check size={14} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 text-center">
          <div className="flex -space-x-2">
            <img
              src="images/author-1.jpg"
              alt="author"
              className="h-10 w-10 rounded-full border-2 border-white"
            />
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[var(--color-brand)]">
              <Phone size={16} />
            </div>
          </div>

          <p className="text-lg">
            Let's make something great work together.{" "}
            <a href="/contact" className="font-semibold text-[var(--color-brand)] underline">
              Get Free Quote.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
