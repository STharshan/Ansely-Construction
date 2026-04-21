import { Send } from "lucide-react";

const footerLinks = ["Home", "About Us", "Amenities", "Blogs", "Contact Us"];

function LogoMark() {
    return (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a8a556]">
            <div className="relative h-7 w-6 text-white">
                <span className="absolute inset-y-0 left-0 w-[3px] rounded-full bg-current" />
                <span className="absolute bottom-0 left-[9px] h-full w-[3px] rounded-full bg-current" />
                <span className="absolute bottom-0 right-0 h-[85%] w-[3px] rounded-full bg-current" />
                <span className="absolute left-[2px] top-[4px] h-[3px] w-[16px] rotate-[-38deg] rounded-full bg-current" />
                <span className="absolute right-[1px] top-[9px] h-[3px] w-[12px] rotate-[35deg] rounded-full bg-current" />
            </div>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="bg-[#efede7] px-3 py-3 md:px-5">
            <section className="relative overflow-hidden rounded-[24px] bg-[#171717] text-white sm:rounded-[28px]">
                <div className="absolute inset-0 opacity-100">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:51px_51px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_42%)]" />
                    <div className="absolute left-[76px] top-[60px] h-[104px] w-[150px] bg-white/[0.02]" />
                    <div className="absolute left-[352px] top-[63px] h-[103px] w-[153px] bg-white/[0.02]" />
                    <div className="absolute left-[504px] top-[112px] h-[102px] w-[101px] bg-white/[0.02]" />
                    <div className="absolute right-[368px] top-[62px] h-[103px] w-[151px] bg-white/[0.02]" />
                    <div className="absolute right-[108px] top-[115px] h-[104px] w-[101px] bg-white/[0.02]" />
                    <div className="absolute bottom-[79px] left-[48px] h-[104px] w-[102px] bg-white/[0.02]" />
                    <div className="absolute bottom-[28px] left-[152px] h-[102px] w-[101px] bg-white/[0.02]" />
                    <div className="absolute bottom-[30px] right-[310px] h-[102px] w-[100px] bg-white/[0.02]" />
                </div>

                <div className="relative z-10 px-6 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-[84px] lg:py-[80px]">
                    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-[760px]">
                            <h2 className="max-w-[820px] text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.1rem]">
                                Let&apos;s find your ideal home together
                            </h2>
                            <p className="mt-5 max-w-[560px] text-base leading-7 text-white/90 font-semibold">
                                We&apos;re here to guide you every step of the way, helping you
                                discover a home.
                            </p>
                        </div>

                        <button className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#a8a556] text-sm sm:text-lg font-semibold uppercase tracking-[-0.03em] text-white transition hover:bg-[#bbb766] sm:h-[132px] sm:w-[132px] lg:mt-[6px] lg:h-[110px] lg:w-[110px]">
                            LET&apos;S TALK
                        </button>
                    </div>

                    <div className="mt-12 border-t border-white/10 pt-12 lg:mt-[52px] lg:pt-[54px]">
                        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_1.1fr_1fr_1.3fr] xl:gap-0">
                            <div className="xl:pr-10">
                                <div className="flex items-center gap-3">
                                    <LogoMark />
                                    <div className="text-[2.05rem] font-semibold tracking-[-0.05em]">
                                        Antila<span className="text-[#a8a556]">.</span>
                                    </div>
                                </div>
                            </div>

                            <div className=" xl:px-7">
                                <h3 className="text-[1.05rem] font-semibold text-white">
                                    Address:
                                </h3>
                                <p className="mt-6 max-w-[430px] text-base leading-6 font-semibold text-white/90">
                                    123 Lorem Street, Ipsum City, Dolor State, 456789
                                </p>
                            </div>

                            <div className="xl:border-l xl:border-white/10 xl:px-4">
                                <h3 className="text-[1.05rem] font-semibold text-white">
                                    Get in Touch:
                                </h3>
                                <div className="mt-6 space-y-2 text-base leading-6 font-semibold text-white/90">
                                    <p>Phone: +91 12345 67890</p>
                                    <p>E-mail: info@domain.com</p>
                                </div>
                            </div>

                            <div className="xl:border-l xl:border-white/10 xl:pl-7">
                                <h3 className="text-[1.05rem] font-semibold text-white">
                                    Subscribe Newsletter&apos;s:
                                </h3>

                                <div className="mt-7 flex max-w-[396px] items-center rounded-xl bg-[#2f2f2f] p-1">
                                    <input
                                        type="email"
                                        placeholder="Enter Your E-mail *"
                                        className="h-[52px] flex-1 bg-transparent font-semibold px-4 text-base text-white outline-none placeholder:text-white/75"
                                    />
                                    <button
                                        type="button"
                                        className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-[#a8a556] text-white transition hover:bg-[#bbb766]"
                                        aria-label="Send newsletter email"
                                    >
                                        <Send size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-white/10 pt-8">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <nav className="flex flex-wrap gap-x-8 gap-y-4">
                                {footerLinks.map((link) => (
                                    <a
                                        key={link}
                                        href="/"
                                        className="text-lg font-semibold text-white transition hover:text-[#a8a556]"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </nav>

                            <p className="text-base text-white/95 lg:text-right font-semibold">
                                Copyright &copy; 2026 All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
