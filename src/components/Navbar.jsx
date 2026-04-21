import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", hasDropdown: true },
  { label: "About Us" },
  { label: "Amenities" },
  { label: "Blog" },
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white p-6">
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 md:px-10 lg:px-8">
        <div className="flex items-center justify-between gap-4 pb-8">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="text-2xl font-semibold tracking-[-0.03em]">
              Antila<span className="text-[#b2b15c]">.</span>
            </div>
          </div>

          <ul className="hidden items-center gap-8 text-[15px] font-medium lg:flex xl:gap-10">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="flex cursor-pointer items-center gap-1 text-white/95 transition hover:text-[#d6d17a]"
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown size={15} strokeWidth={2.3} />}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 rounded-lg bg-[#b2b15c] px-5 py-3 text-sm font-semibold text-[#f7f6ed] transition hover:bg-[#c4c370] md:inline-flex">
              Contact Now
              <ArrowUpRight size={17} />
            </button>

            <button
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-4 rounded-[28px] border border-white/10 bg-[rgba(20,25,31,0.9)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col gap-4 text-base font-medium">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-white/90"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown size={16} strokeWidth={2.3} />}
                </li>
              ))}
            </ul>

            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#b2b15c] px-5 py-4 text-sm font-semibold text-[#f7f6ed]">
              Contact Now
              <ArrowUpRight size={16} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
