import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Agent", path: "/agents" },
  { label: "Why Choose Us", path: "/#whyus" },
  { label: "Contact Us", path: "/#contact" },
];

function LogoMark() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)]">
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
          ? "relative border-b border-[var(--color-border)] bg-[var(--color-panel)] text-[var(--color-ink-soft)] shadow-sm"
          : "absolute text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 md:px-10 lg:px-8">
        <div className="flex items-center justify-between gap-4 pb-8">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <LogoMark />
            <div className="text-2xl font-semibold tracking-[-0.03em]">
              Euro
              <span className="font-['Cormorant_Garamond'] italic font-medium">
                Builders
              </span>
              <span className="text-[var(--color-brand)]">.</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden items-center gap-8 text-[15px] font-medium lg:flex xl:gap-10">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 transition hover:text-[var(--color-brand)] ${
                    isSolid
                      ? "text-[color:rgba(31,31,27,0.9)]"
                      : "text-white/95"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* CTA */}
            <Link
              to="/#contact"
              className="group hidden items-center gap-2 rounded-lg bg-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-hover)] md:inline-flex"
            >
              Get a Free Consultation
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md lg:hidden ${
                isSolid
                  ? "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink-soft)]"
                  : "border-white/15 bg-white/10"
              }`}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div
            className={`mt-4 rounded-[28px] border p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:hidden ${
              isSolid
                ? "border-[var(--color-border)] bg-[var(--color-panel)]"
                : "border-white/10 bg-[rgba(20,25,31,0.95)]"
            }`}
          >
            <ul className="flex flex-col gap-3 text-base font-medium">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl border px-5 py-3.5 ${
                      isSolid
                        ? "border-[var(--color-border)] text-[var(--color-ink-soft)]"
                        : "border-white/10 text-white/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/#contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-brand)] px-5 py-4 text-sm font-semibold text-white"
            >
              Get a Free Consultation
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}