"use client";
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/dreamquestgames/", icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    )},
    { name: "Facebook", url: "https://www.facebook.com/dreamquestpoulsbo/", icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    )},
    { name: "Bluesky", url: "https://bsky.app/profile/dreamquestgames.bsky.social", icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/></svg>
    )},
  ];

  const ThemeToggleButton = () => (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 text-[#7B4EA0] hover:text-[#48D8D0] transition-colors duration-200"
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{
        background: 'var(--bg-nav)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
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
                className="text-sm font-medium hover:text-[#7B4EA0] transition-colors duration-200"
                style={{ color: 'var(--text-nav)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Socials + Theme Toggle */}
          <div className="flex items-center gap-4">
            {/* Social icons — desktop only */}
            <div className="hidden md:flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-[#7B4EA0] hover:text-[#48D8D0] transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            {/* Theme toggle — desktop */}
            <div className="hidden md:block">
              <ThemeToggleButton />
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-2 font-pixel text-[10px] text-white bg-[#7B4EA0] hover:bg-[#9B6FD0] border border-[#7B4EA0] btn-glow rounded-none transition-all duration-200 pixel-corners"
            >
              Sell Your Games
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:text-[#1A1020] transition-colors"
              style={{ color: 'var(--text-nav)' }}
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
          <div
            className="md:hidden py-4 space-y-3"
            style={{
              borderTop: '1px solid var(--border-color)',
              background: 'var(--bg-nav)',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm hover:text-[#7B4EA0] transition-colors py-1"
                style={{ color: 'var(--text-nav)' }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center px-4 py-2 font-pixel text-[10px] text-white bg-[#7B4EA0] border border-[#7B4EA0] rounded-none"
              >
                Sell Your Games
              </a>
              <ThemeToggleButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
