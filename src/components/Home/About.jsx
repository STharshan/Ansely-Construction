import { Check, Globe, Layers3, ScanSearch, Home } from "lucide-react";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const topImage = "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80";
const bottomImage = "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80";

const features = [
    "UK-based, Sri Lanka delivered",
    "Built to European standards, end-to-end",
];

const cards = [
    {
        icon: ScanSearch,
        title: "Our Mission",
        description: "To make building in Sri Lanka simple, transparent and stress-free - managed from the UK so you always know exactly where your build stands.",
    },
    {
        icon: Globe,
        title: "Our Vision",
        description: "To become the most trusted UK-based construction company delivering in Sri Lanka - where every build reflects the vision behind it.",
    },
];

function StatCard({ dark = false, count, title, icon: Icon }) {
    const targetNumber = parseInt(count);
    const suffix = count.replace(/[0-9]/g, "");
    const [displayCount, setDisplayCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = targetNumber;
        if (start === end) return;
        const totalDuration = 2000;
        const incrementTime = totalDuration / end;

        const timer = setInterval(() => {
            start += 1;
            setDisplayCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [targetNumber]);

    return (
        <div
            data-aos="zoom-in"
            className={
                dark
                    ? "group rounded-[28px] bg-[#1b1b1b] px-7 py-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex items-start gap-6 transition-all duration-300"
                    : "group rounded-[28px] bg-white px-7 py-8 text-[#1d1d1d] shadow-[0_18px_40px_rgba(16,24,40,0.06)] flex items-start gap-6 transition-all duration-300"
            }
        >
            <div className={
                dark
                    ? "flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#a9a454] text-white transition-all duration-300 ease-in-out group-hover:bg-white group-hover:text-[#1b1b1b]"
                    : "flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#a9a454] text-white transition-all duration-300 ease-in-out group-hover:bg-black group-hover:text-white"
            }>
                <Icon size={32} strokeWidth={1.7} />
            </div>

            <div className="flex flex-col">
                <span className="text-6xl font-semibold leading-none tracking-[-0.08em]">
                    {/* Wrapped in span for animation control */}
                    <span className="counter">{displayCount}</span>
                    {suffix}
                </span>
                <p className="mt-4 max-w-[200px] text-[1.1rem] font-medium leading-[1.3] sm:text-[1.25rem]">
                    {title}
                </p>
            </div>
        </div>
    );
}

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <section className="bg-[#f3f1eb] py-12 lg:py-16">
            <div className="mx-auto max-w-7xl p-4 lg:p-0">
                <div className="grid gap-10 xl:grid-cols-[650px_minmax(0,1fr)]">
                    
                    {/* Left Column: Visuals & Stats */}
                    <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
                        <div className="space-y-8">
                            <div data-aos="fade-up" className="overflow-hidden rounded-[28px]">
                                <img src={topImage} alt="Curved luxury architecture" className="h-[400px] w-full object-cover" />
                            </div>
                            <StatCard count="15+" title="Years in Construction" icon={Layers3} />
                            <StatCard count="100+" title="Builds Completed Across Sri Lanka" icon={Home} />
                        </div>

                        <div className="space-y-8 pt-0 md:pt-10 xl:pt-0">
                            <StatCard dark count="15+" title="Years in Real Estate" icon={Layers3} />
                            <div data-aos="fade-up" data-aos-delay="200" className="overflow-hidden rounded-[28px]">
                                <img src={bottomImage} alt="Modern apartment tower" className="h-[520px] w-full object-cover sm:h-[645px]" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col justify-center pt-2 xl:pt-0">
                        {/* Eyebrow Tag as Span */}
                        <span 
                            data-aos="fade-right"
                            className="inline-flex w-fit items-center gap-3 rounded-full border border-[#d7d2c7] bg-transparent px-4 mt-10 py-1 text-lg font-medium text-[#1c1c1c]"
                        >
                            <span className="h-2.5 w-2.5 rounded-full bg-[#a9a454]" />
                            About Us
                        </span>

                        <h2
                            data-aos="fade-right"
                            data-aos-delay="100"
                            className="mt-5 max-w-[860px] text-[3rem] font-semibold leading-[1.18] tracking-[-0.07em] text-[#1a1a1a] sm:text-[3.5rem]"
                        >
                            We Build <span className="accent-font italic">Homes</span> People Are Proud to Live In
                        </h2>

                        {/* Subline as P tag */}
                        <p
                            data-aos="fade-right"
                            data-aos-delay="200"
                            className="mt-5 max-w-[920px] leading-[1.6] text-[#4c4c4c] text-lg"
                        >
                            Euro Builders is a UK-based construction company delivering high-quality builds across Sri Lanka. From private homes and mansions to hotels, shops and commercial buildings - we manage every step from the UK, to European standards, on the ground in Sri Lanka.
                        </p>

                        {/* Tick Points as UL/LI */}
                        <ul className="mt-12 grid gap-1 md:grid-cols-[1fr_1.2fr] list-none p-0">
                            {features.map((feature, i) => (
                                <li
                                    key={feature}
                                    data-aos="fade-up"
                                    data-aos-delay={i * 100}
                                    className="flex items-center gap-2"
                                >
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#a9a454] text-white">
                                        <Check size={10} strokeWidth={3} />
                                    </span>
                                    <span className="text-sm leading-8 text-[#505050] font-semibold">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 h-px w-full bg-[#ddd7cc]" />

                        {/* Mission/Vision cards as Sibling Divs with fixed heights */}
                        <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:gap-10">
                            {cards.map((card, i) => {
                                const Icon = card.icon;
                                return (
                                    <div
                                        key={card.title}
                                        data-aos="flip-up"
                                        data-aos-delay={i * 150}
                                        className="rounded-[28px] group bg-white px-7 py-8 text-center shadow-[0_18px_40px_rgba(16,24,40,0.05)] min-h-[280px] flex flex-col items-center"
                                    >
                                        <div className="mx-auto flex h-12 w-12 items-center group-hover:bg-black transition-all duration-300 ease-in-out justify-center rounded-full bg-[#a9a454] text-white">
                                            <Icon size={24} strokeWidth={1.8} />
                                        </div>
                                        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#1c1c1c]">
                                            {card.title}
                                        </h3>
                                        <p className="mt-2 text-[1.05rem] leading-[1.5] text-[#555555] sm:text-[1rem]">
                                            {card.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}