"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import content from "../../public/content.json";

// Build open/close schedule from content.json hours
// "Closed" entries map to null; others parse "HH:MM AM/PM" → 24h integers
function parseHour(timeStr: string): number {
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return 0;
  let h = parseInt(match[1], 10);
  const m = parseInt(match[2], 10);
  const meridiem = match[3].toUpperCase();
  if (meridiem === "PM" && h !== 12) h += 12;
  if (meridiem === "AM" && h === 12) h = 0;
  return h + m / 60;
}

// content.json hours are Mon–Sun (index 0 = Monday in our array).
// JS getDay(): 0=Sun,1=Mon,...,6=Sat — remap to our array index.
const DAY_ORDER = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function isStoreOpen(): boolean {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  const dayName = DAY_ORDER[now.getDay()];
  const entry = content.hours.find((h) => h.day === dayName);
  if (!entry || entry.time === "Closed") return false;
  // Expect format like "11:00 AM – 7:00 PM"
  const parts = entry.time.split("–").map((s) => s.trim());
  if (parts.length < 2) return false;
  const open = parseHour(parts[0]);
  const close = parseHour(parts[1]);
  const timeNow = now.getHours() + now.getMinutes() / 60;
  return timeNow >= open && timeNow < close;
}

export default function Hero() {
  const [open, setOpen] = useState<boolean | null>(null);
  const h = content.hero;

  useEffect(() => {
    setOpen(isStoreOpen());
    const timer = setInterval(() => setOpen(isStoreOpen()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Bold gradient band at top */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#7B4EA0] via-[#48D8D0] to-[#50C890] flex-shrink-0" />

      {/* Hero body */}
      <div className="relative flex-1 flex items-center justify-center hero-grid scanlines pt-16">
        {/* Background glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B4EA0]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#48D8D0]/12 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text content */}
            <div className="flex-1 text-center lg:text-left">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 mb-6 border-2 rounded-none transition-all duration-500 ${
                  open === null
                    ? "border-gray-300 bg-gray-100"
                    : open
                    ? "border-[#48D8D0] bg-[#48D8D0]/12"
                    : "border-gray-400 bg-gray-100"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    open === null ? "bg-gray-400" : open ? "bg-[#50C890] animate-pulse" : "bg-gray-400"
                  }`}
                />
                <span
                  className={`font-pixel text-[8px] font-bold ${
                    open === null ? "text-gray-400" : open ? "text-[#2AA8A2]" : "text-gray-500"
                  }`}
                >
                  {open === null ? "Loading..." : open ? h.badge : h.badgeClosed}
                </span>
              </div>

              <h1 className="font-pixel text-2xl sm:text-3xl lg:text-4xl leading-relaxed mb-6">
                <span style={{ color: "var(--text-primary)" }}>{h.headline1}</span>
                <br />
                <span className="text-[#7B4EA0] glow-purple">{h.headline2}</span>
              </h1>

              <p className="font-pixel text-sm sm:text-base text-[#2AA8A2] glow-teal mb-4">
                {h.tagline}
              </p>

              <p className="text-lg leading-relaxed mb-4 max-w-xl" style={{ color: "var(--text-secondary)" }}>
                {h.description}
              </p>

              <p className="text-[#3A9A70] font-semibold mb-8">{h.mascotLine}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-10 py-4 font-pixel text-xs text-white bg-[#7B4EA0] hover:bg-[#9B6FD0] border-2 border-[#7B4EA0] btn-glow transition-all duration-200 pixel-corners"
                >
                  {h.ctaPrimary}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-10 py-4 font-pixel text-xs bg-transparent hover:bg-[#48D8D0]/15 border-2 border-[#48D8D0] btn-glow-teal transition-all duration-200 pixel-corners"
                  style={{ color: "var(--text-primary)" }}
                >
                  {h.ctaSecondary}
                </a>
              </div>

              <div
                className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {h.trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <span className="text-[#50C890] font-bold text-base">✓</span>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo / Mascot display */}
            <div className="flex-shrink-0 relative">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 pixel-border rounded-none">
                <Image
                  src="/logo.jpg"
                  alt={`${content.mascot} — ${content.businessName} mascot`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[#7B4EA0] px-3 py-1.5 font-pixel text-[8px] text-white pixel-corners shadow-lg shadow-purple-300/60">
                {h.badgeRetro}
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#48D8D0] px-3 py-1.5 font-pixel text-[8px] text-[#1A1020] pixel-corners shadow-lg shadow-cyan-300/60">
                {h.badgeModern}
              </div>
              {/* Mascot label */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="font-pixel text-[8px] text-[#50C890] glow-green">{h.mascotLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#7B4EA0] via-[#48D8D0] to-[#50C890] flex-shrink-0" />
    </section>
  );
}
