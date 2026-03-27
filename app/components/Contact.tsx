"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "buy",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] section-divider">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#7B4EA0] font-bold">// GET IN TOUCH</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-[#1A1020] mb-4 font-bold">
            Contact <span className="text-[#7B4EA0] glow-purple">Us</span>
          </h2>
          <p className="text-[#4A4458] max-w-2xl mx-auto text-base">
            Have a question about our inventory? Want to sell your collection?
            Need a repair quote? Drop us a message and we&apos;ll get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white border-l-4 border-l-[#7B4EA0] shadow-[0_4px_20px_rgba(123,78,160,0.15)] p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">⚔️</div>
                <h3 className="font-pixel text-sm text-[#3A9A70] glow-green mb-3 font-bold">
                  Message Received!
                </h3>
                <p className="text-[#4A4458] text-sm">
                  Valerie has your message. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-pixel text-[9px] text-[#7B4EA0] mb-2 font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F8F5FC] border-2 border-[#7B4EA0]/30 focus:border-[#7B4EA0] text-[#1A1020] placeholder-[#9B8FAA] px-4 py-3 outline-none transition-colors text-sm"
                    placeholder="Player One"
                  />
                </div>
                <div>
                  <label className="block font-pixel text-[9px] text-[#7B4EA0] mb-2 font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F8F5FC] border-2 border-[#7B4EA0]/30 focus:border-[#7B4EA0] text-[#1A1020] placeholder-[#9B8FAA] px-4 py-3 outline-none transition-colors text-sm"
                    placeholder="player@example.com"
                  />
                </div>
                <div>
                  <label className="block font-pixel text-[9px] text-[#7B4EA0] mb-2 font-bold">
                    I Want To...
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#F8F5FC] border-2 border-[#7B4EA0]/30 focus:border-[#7B4EA0] text-[#1A1020] px-4 py-3 outline-none transition-colors text-sm"
                  >
                    <option value="buy">Buy Games / Check Availability</option>
                    <option value="sell">Sell My Games / Trade-In</option>
                    <option value="repair">Console Repair Quote</option>
                    <option value="disc">Disc Resurfacing</option>
                    <option value="other">Other Question</option>
                  </select>
                </div>
                <div>
                  <label className="block font-pixel text-[9px] text-[#7B4EA0] mb-2 font-bold">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F8F5FC] border-2 border-[#7B4EA0]/30 focus:border-[#7B4EA0] text-[#1A1020] placeholder-[#9B8FAA] px-4 py-3 outline-none transition-colors text-sm resize-none"
                    placeholder="Tell us what you're looking for, what you want to sell, or what needs repair..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-pixel text-xs text-white bg-[#7B4EA0] hover:bg-[#9B6FD0] border-2 border-[#7B4EA0] btn-glow transition-all duration-200 pixel-corners"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="space-y-6">
            {/* Hours */}
            <div className="bg-white border-l-4 border-l-[#7B4EA0] shadow-[0_4px_20px_rgba(123,78,160,0.15)] p-6">
              <h3 className="font-pixel text-xs text-[#7B4EA0] mb-4 font-bold">🕐 Store Hours</h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday", hours: "11:00 AM – 7:00 PM" },
                  { day: "Tuesday", hours: "11:00 AM – 7:00 PM" },
                  { day: "Wednesday", hours: "Closed", closed: true },
                  { day: "Thursday", hours: "11:00 AM – 7:00 PM" },
                  { day: "Friday", hours: "11:00 AM – 7:00 PM" },
                  { day: "Saturday", hours: "11:00 AM – 7:00 PM" },
                  { day: "Sunday", hours: "11:00 AM – 7:00 PM" },
                ].map(({ day, hours, closed }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-[#4A4458]">{day}</span>
                    <span className={closed ? "text-red-500 font-semibold" : "text-[#1A1020] font-semibold"}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="bg-white border-l-4 border-l-[#48D8D0] shadow-[0_4px_20px_rgba(72,216,208,0.18)] p-6">
              <h3 className="font-pixel text-xs text-[#2AA8A2] mb-4 font-bold">⚡ Quick Actions</h3>
              <div className="space-y-3">
                <a href="tel:+13606202354" className="flex items-center gap-3 text-[#4A4458] hover:text-[#2AA8A2] transition-colors text-sm group">
                  <span className="text-[#48D8D0] group-hover:scale-110 transition-transform">📞</span>
                  (360) 620-2354
                </a>
                <a href="mailto:contact.dreamquest@gmail.com" className="flex items-center gap-3 text-[#4A4458] hover:text-[#2AA8A2] transition-colors text-sm group">
                  <span className="text-[#48D8D0] group-hover:scale-110 transition-transform">📧</span>
                  contact.dreamquest@gmail.com
                </a>
                <div className="flex items-start gap-3 text-[#4A4458] text-sm">
                  <span className="text-[#48D8D0]">📍</span>
                  <span>19425 7th Ave. NE Suite 117<br />Poulsbo, WA</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white border-l-4 border-l-[#50C890] shadow-[0_4px_20px_rgba(80,200,144,0.18)] p-6">
              <h3 className="font-pixel text-xs text-[#3A9A70] mb-4 font-bold">🌐 Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Instagram", handle: "@dreamquestgames", icon: "📸", url: "https://www.instagram.com/dreamquestgames/" },
                  { name: "Facebook", handle: "dreamquestpoulsbo", icon: "📘", url: "https://www.facebook.com/dreamquestpoulsbo/" },
                  { name: "Bluesky", handle: "@dreamquestgames.bsky.social", icon: "🦋", url: "https://bsky.app/profile/dreamquestgames.bsky.social" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#F8F5FC] border border-[#50C890]/40 hover:border-[#50C890] px-3 py-2 text-xs transition-colors"
                  >
                    <span>{social.icon}</span>
                    <div>
                      <div className="text-[#1A1020] font-semibold">{social.name}</div>
                      <div className="text-[#4A4458] text-[10px]">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
