import { Check, Globe, Layers3, ScanSearch } from "lucide-react";

const topImage =
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80";
const bottomImage =
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80";

const features = [
    "World class amenity comfortable living",
    "Excellent investment & resale potential",
];

const cards = [
    {
        icon: ScanSearch,
        title: "Our Mission",
        description:
            "Our mission is develop thoughtful plan homes that combine modern design quality construction",
    },
    {
        icon: Globe,
        title: "Our Vision",
        description:
            "Our vision is to become a trusted name in residential living by setting new standard in design",
    },
];

function StatCard({ dark = false, count, title, icon: Icon }) {
    return (
        <div
            className={
                dark
                    ? "rounded-[28px] bg-[#1b1b1b] px-7 py-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:px-9 sm:py-10"
                    : "rounded-[28px] bg-white px-7 py-8 text-[#1d1d1d] shadow-[0_18px_40px_rgba(16,24,40,0.06)] sm:px-9 sm:py-10"
            }
        >
            <div
                className={
                    dark
                        ? "flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#1d1d1d]"
                        : "flex h-20 w-20 items-center justify-center rounded-full bg-[#a9a454] text-white"
                }
            >
                <Icon size={36} strokeWidth={1.7} />
            </div>

            <div className="mt-5 flex items-end gap-2">
                <span className="text-6xl font-semibold leading-none tracking-[-0.08em]">
                    {count}
                </span>
                {dark && <span className="mb-2 h-4 w-4 rounded-full bg-[#a9a454]" />}
            </div>

            <p className="mt-5 max-w-[230px] text-[1.05rem] font-medium leading-[1.45] sm:text-[1.2rem]">
                {title}
            </p>
        </div>
    );
}

export default function About() {
    return (
        <section className="bg-[#f3f1eb] px-3 py-12 sm:px-4 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[1680px]">
                <div className="grid gap-10 xl:grid-cols-[830px_minmax(0,1fr)] xl:gap-16">
                    <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
                        <div className="space-y-8">
                            <div className="overflow-hidden rounded-[28px]">
                                <img
                                    src={topImage}
                                    alt="Curved luxury architecture"
                                    className="h-[520px] w-full object-cover sm:h-[620px] xl:h-[740px]"
                                />
                            </div>

                            <StatCard
                                count="15+"
                                title="Modern Lifestyle Amenities"
                                icon={Layers3}
                            />
                        </div>

                        <div className="space-y-8 pt-0 md:pt-10 xl:pt-0">
                            <StatCard
                                dark
                                count="10+"
                                title="Years of Real Estate Experience"
                                icon={Layers3}
                            />

                            <div className="overflow-hidden rounded-[28px]">
                                <img
                                    src={bottomImage}
                                    alt="Modern apartment tower"
                                    className="h-[520px] w-full object-cover sm:h-[620px] xl:h-[742px]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center pt-2 xl:pt-0">
                        <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#d7d2c7] bg-transparent px-6 py-3 text-lg font-medium text-[#1c1c1c]">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#a9a454]" />
                            About Us
                        </div>

                        <h2 className="mt-8 max-w-[860px] text-[3rem] font-semibold leading-[1.02] tracking-[-0.07em] text-[#1a1a1a] sm:text-[4rem] lg:text-[5rem] xl:text-[5.2rem]">
                            Creating thoughtfully designed homes for you
                        </h2>

                        <p className="mt-8 max-w-[920px] text-xl leading-[1.75] text-[#4c4c4c]">
                            We are dedicated to creating thoughtfully designed living spaces
                            that blend modern architecture, comfort, and functionality.
                        </p>

                        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-10">
                            {features.map((feature) => (
                                <div key={feature} className="flex items-center gap-4">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#a9a454] text-white">
                                        <Check size={18} strokeWidth={3} />
                                    </span>
                                    <span className="text-[1.15rem] leading-8 text-[#505050]">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 h-px w-full bg-[#ddd7cc]" />

                        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:gap-10">
                            {cards.map((card) => {
                                const Icon = card.icon;

                                return (
                                    <article
                                        key={card.title}
                                        className="rounded-[28px] bg-white px-7 py-10 text-center shadow-[0_18px_40px_rgba(16,24,40,0.05)] sm:px-10 sm:py-12"
                                    >
                                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#a9a454] text-white">
                                            <Icon size={34} strokeWidth={1.8} />
                                        </div>

                                        <h3 className="mt-8 text-[2rem] font-semibold tracking-[-0.04em] text-[#1c1c1c]">
                                            {card.title}
                                        </h3>

                                        <p className="mx-auto mt-5 max-w-[390px] text-[1.05rem] leading-[1.8] text-[#555555] sm:text-[1.1rem]">
                                            {card.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
