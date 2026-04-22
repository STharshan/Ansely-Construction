import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
    {
        name: "Alex Morgan",
        role: "Founder & Design Director",
        image:
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Sofia Reyes",
        role: "Head of Modular Engineering",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Daniel Fischer",
        role: "Construction & Installation Lead",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    },
];

export default function OurTeam() {
    return (
        <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-[1360px]">
                <div className="mx-auto max-w-[700px] text-center">
                    <p className="text-xs font-semibold uppercase  text-[#222222] sm:text-base">
                        Our Team
                    </p>

                    <h2 className="mt-4 text-[2.2rem] font-semibold uppercase leading-[1] text-[#111111] sm:text-[2.8rem]">
                        Expert Team For Practical Spaces.
                    </h2>

                    <a
                        href="/team"
                        className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#17140f] px-6 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-white transition hover:bg-[#2b2418] sm:mt-8"
                    >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/25">
                            <span className="h-2 w-2 rounded-full bg-[#f5d87a]" />
                        </span>
                        Meet All Team
                    </a>
                </div>

                <div className="mt-12 max-w-6xl mx-auto grid gap-6 md:grid-cols-2 xl:mt-14 xl:grid-cols-3">
                    {teamMembers.map((member) => (
                        <article key={member.name} className="group">
                            <div className="overflow-hidden bg-[#f2efe9]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[480px] lg:h-[540px]"
                                />
                            </div>

                            <div className="flex items-start justify-between gap-4 pt-4">
                                <div>
                                    <h3 className="text-[1.15rem] font-semibold tracking-[-0.03em] text-[#151515] sm:text-[1.25rem]">
                                        {member.name}
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 font-semibold text-[#727272] sm:text-[0.95rem]">
                                        {member.role}
                                    </p>
                                </div>

                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`${member.name} LinkedIn profile`}
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#17140f] text-white transition hover:bg-[#2b2418]"
                                >
                                    <FaLinkedinIn size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
