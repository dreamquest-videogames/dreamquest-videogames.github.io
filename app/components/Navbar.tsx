"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#inventory", label: "Inventory" },
    { href: "#collectibles", label: "Collectibles" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E14]/95 backdrop-blur-sm border-b border-[#7B4EA0]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-sm overflow-hidden border border-[#7B4EA0]/60 group-hover:border-[#7B4EA0] transition-all duration-300">
              <Image
                src="/logo.jpg"
                alt="Dream Quest Video Games"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-pixel text-xs text-[#7B4EA0] glow-purple hidden sm:block">
                Dream Quest
              </span>
              <span className="font-pixel text-[8px] text-[#48D8D0] hidden sm:block">
                Video Games
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-[#48D8D0] transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-2 font-pixel text-[10px] text-white bg-[#7B4EA0] hover:bg-[#9B6FD0] border border-[#7B4EA0] btn-glow rounded-none transition-all duration-200 pixel-corners"
            >
              Sell Your Games
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#7B4EA0]/30 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-[#48D8D0] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center px-4 py-2 font-pixel text-[10px] text-white bg-[#7B4EA0] border border-[#7B4EA0] rounded-none mt-2"
            >
              Sell Your Games
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
