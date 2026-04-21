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
    <section className="bg-[#f7f7f5] py-20">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm mb-6">
            <span className="w-2 h-2 bg-[#a6a04a] rounded-full"></span>
            Our Apartments
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold 2xl:px-32 px-0">
            Discover apartments crafted for comfortable urban living
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((item) => (
            <div key={item.id} className="relative rounded-3xl overflow-hidden group h-[600px]">

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex items-end p-6 text-white">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="mb-5 text-white/90">{item.description}</p>

                  <div className="border-t border-white/20 mb-5"></div>

                  <ul className="space-y-3">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="bg-[#a6a04a] rounded-full p-1 text-black">
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

        {/* Bottom CTA */}
        <div className="mt-14 flex items-center justify-center gap-4 flex-wrap text-center">
          <div className="flex -space-x-2">
            <img
              src="images/author-1.jpg"
              alt="author"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="w-10 h-10 rounded-full bg-[#a6a04a] flex items-center justify-center border-2 border-white">
              <Phone size={16} />
            </div>
          </div>

          <p className="text-lg">
            Let’s make something great work together.{" "}
            <a href="/contact" className="text-[#a6a04a] font-semibold underline">
              Get Free Quote.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default CompletedProjects;