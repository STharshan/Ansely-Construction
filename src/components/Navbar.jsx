import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">
          Antila<span className="text-lime-400">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white text-sm">
          <li>Home</li>
          <li>About Us</li>
          <li>Amenities</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact Us</li>
        </ul>

        {/* CTA */}
        <button className="hidden md:flex items-center gap-2 bg-lime-400 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-lime-300 transition">
          Contact Now <ArrowUpRight size={16} />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 pb-6 text-white">
          <ul className="flex flex-col gap-4">
            <li>Home</li>
            <li>About Us</li>
            <li>Amenities</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact Us</li>
          </ul>

          <button className="mt-4 w-full flex items-center justify-center gap-2 bg-lime-400 text-black px-5 py-2 rounded-full text-sm font-medium">
            Contact Now <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}