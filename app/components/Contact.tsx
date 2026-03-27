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
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 section-divider"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#7B4EA0] font-bold">// GET IN TOUCH</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl mb-4 font-bold" style={{ color: 'var(--text-primary)' }}>
            Contact <span className="text-[#7B4EA0] glow-purple">Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
            Have a question about our inventory? Want to sell your collection?
            Need a repair quote? Drop us a message and we&apos;ll get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div
            className="border-l-4 border-l-[#7B4EA0] p-6 sm:p-8"
            style={{
              background: 'var(--bg-card)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">⚔️</div>
                <h3 className="font-pixel text-sm text-[#3A9A70] glow-green mb-3 font-bold">
                  Message Received!
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
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
                    className="w-full border-2 focus:border-[#7B4EA0] px-4 py-3 outline-none transition-colors text-sm"
                    style={{
                      background: 'var(--input-bg)',
                      borderColor: 'var(--input-border)',
                      color: 'var(--text-primary)',
                    }}
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
                    className="w-full border-2 focus:border-[#7B4EA0] px-4 py-3 outline-none transition-colors text-sm"
                    style={{
                      background: 'var(--input-bg)',
                      borderColor: 'var(--input-border)',
                      color: 'var(--text-primary)',
                    }}
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
                    className="w-full border-2 focus:border-[#7B4EA0] px-4 py-3 outline-none transition-colors text-sm"
                    style={{
                      background: 'var(--input-bg)',
                      borderColor: 'var(--input-border)',
                      color: 'var(--text-primary)',
                    }}
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
                    className="w-full border-2 focus:border-[#7B4EA0] px-4 py-3 outline-none transition-colors text-sm resize-none"
                    style={{
                      background: 'var(--input-bg)',
                      borderColor: 'var(--input-border)',
                      color: 'var(--text-primary)',
                    }}
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
            <div
              className="border-l-4 border-l-[#7B4EA0] p-6"
              style={{
                background: 'var(--bg-card)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
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
                    <span style={{ color: 'var(--text-secondary)' }}>{day}</span>
                    <span className={closed ? "text-red-500 font-semibold" : "font-semibold"} style={!closed ? { color: 'var(--text-primary)' } : {}}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div
              className="border-l-4 border-l-[#48D8D0] p-6"
              style={{
                background: 'var(--bg-card)',
                boxShadow: '0 4px 20px rgba(72,216,208,0.18)',
              }}
            >
              <h3 className="font-pixel text-xs text-[#2AA8A2] mb-4 font-bold">⚡ Quick Actions</h3>
              <div className="space-y-3">
                <a href="tel:+13606202354" className="flex items-center gap-3 hover:text-[#2AA8A2] transition-colors text-sm group" style={{ color: 'var(--text-secondary)' }}>
                  <span className="text-[#48D8D0] group-hover:scale-110 transition-transform">📞</span>
                  (360) 620-2354
                </a>
                <a href="mailto:contact.dreamquest@gmail.com" className="flex items-center gap-3 hover:text-[#2AA8A2] transition-colors text-sm group" style={{ color: 'var(--text-secondary)' }}>
                  <span className="text-[#48D8D0] group-hover:scale-110 transition-transform">📧</span>
                  contact.dreamquest@gmail.com
                </a>
                <div className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="text-[#48D8D0]">📍</span>
                  <span>19425 7th Ave. NE Suite 117<br />Poulsbo, WA</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div
              className="border-l-4 border-l-[#50C890] p-6"
              style={{
                background: 'var(--bg-card)',
                boxShadow: '0 4px 20px rgba(80,200,144,0.18)',
              }}
            >
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
                    className="flex items-center gap-2 border px-3 py-2 text-xs transition-colors hover:border-[#50C890]"
                    style={{
                      background: 'var(--input-bg)',
                      borderColor: 'rgba(80,200,144,0.4)',
                    }}
                  >
                    <span>{social.icon}</span>
                    <div>
                      <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>{social.name}</div>
                      <div className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>{social.handle}</div>
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
