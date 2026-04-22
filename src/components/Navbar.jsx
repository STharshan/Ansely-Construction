import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", hasDropdown: true },
  { label: "Our Process" }, // Renamed for construction context
  { label: "Projects" },
  { label: "Land Sourcing" },
  { label: "Pages", hasDropdown: true },
  { label: "Contact Us" },
];

function LogoMark() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b2b15c]">
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

export default function Navbar({ variant = "transparent" }) {
  const [open, setOpen] = useState(false);
  const isSolid = variant === "solid";

  return (
    <header
      className={`inset-x-0 top-0 z-30 p-6 font-['DM_Sans',_sans-serif] ${
        isSolid
          ? "relative border-b border-[#e8dfd5] bg-white text-[#2d2019] shadow-sm"
          : "absolute text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 md:px-10 lg:px-8">
        <div className="flex items-center justify-between gap-4 pb-8">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="text-2xl font-semibold tracking-[-0.03em]">
              Euro<span className="font-['Cormorant_Garamond'] italic font-medium">Builders</span>
              <span className="text-[#b2b15c]">.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 text-[15px] font-medium lg:flex xl:gap-10">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={`flex cursor-pointer items-center gap-1 transition hover:text-[#b2b15c] ${
                  isSolid ? "text-[#2d2019]/90" : "text-white/95"
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown size={14} strokeWidth={2.5} />}
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Nav CTA - sticky button linking to contact */}
            <a 
              href="#contact"
              rel="noopener"
              className="hidden items-center gap-2 rounded-lg bg-[#b2b15c] px-5 py-3 text-sm font-semibold text-[#f7f6ed] transition hover:bg-[#c4c370] md:inline-flex group"
            >
              Get a Free Consultation
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={() => setOpen((value) => !value)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md lg:hidden ${
                isSolid ? "border-[#d8c8bb] bg-[#f7f3ee] text-[#2d2019]" : "border-white/15 bg-white/10"
              }`}
              aria-label="Toggle navigation menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className={`mt-4 rounded-[28px] border p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:hidden ${
              isSolid
                ? "border-[#e8dfd5] bg-white"
                : "border-white/10 bg-[rgba(20,25,31,0.95)]"
            }`}
          >
            <ul className="flex flex-col gap-3 text-base font-medium">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className={`flex items-center justify-between rounded-2xl border px-5 py-3.5 ${
                    isSolid ? "border-[#e8dfd5] text-[#2d2019]" : "border-white/10 text-white/90"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown size={16} strokeWidth={2.3} />}
                </li>
              ))}
            </ul>

            <a 
              href="#contact"
              rel="noopener"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#b2b15c] px-5 py-4 text-sm font-semibold text-[#f7f6ed]"
            >
              Get a Free Consultation
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}