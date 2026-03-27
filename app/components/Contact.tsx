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
    // Placeholder — would integrate with a form service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080810]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#7B2FBE]">// GET IN TOUCH</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-white mb-4">
            Contact <span className="text-[#7B2FBE] glow-purple">Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question about our inventory? Want to sell your collection?
            Need a repair quote? Drop us a message and we&apos;ll get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="pixel-border bg-[#0D0D1A]/80 p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">⚔️</div>
                <h3 className="font-pixel text-sm text-[#4CAF50] glow-green mb-3">
                  Message Received!
                </h3>
                <p className="text-gray-300 text-sm">
                  Valerie has your message. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-pixel text-[9px] text-[#7B2FBE] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#080810] border border-[#7B2FBE]/30 focus:border-[#7B2FBE] text-white px-4 py-3 outline-none transition-colors text-sm"
                    placeholder="Player One"
                  />
                </div>
                <div>
                  <label className="block font-pixel text-[9px] text-[#7B2FBE] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#080810] border border-[#7B2FBE]/30 focus:border-[#7B2FBE] text-white px-4 py-3 outline-none transition-colors text-sm"
                    placeholder="player@example.com"
                  />
                </div>
                <div>
                  <label className="block font-pixel text-[9px] text-[#7B2FBE] mb-2">
                    I Want To...
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#080810] border border-[#7B2FBE]/30 focus:border-[#7B2FBE] text-white px-4 py-3 outline-none transition-colors text-sm"
                  >
                    <option value="buy">Buy Games / Check Availability</option>
                    <option value="sell">Sell My Games / Trade-In</option>
                    <option value="repair">Console Repair Quote</option>
                    <option value="disc">Disc Resurfacing</option>
                    <option value="collectible">Anime Figure / Collectible</option>
                    <option value="other">Other Question</option>
                  </select>
                </div>
                <div>
                  <label className="block font-pixel text-[9px] text-[#7B2FBE] mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#080810] border border-[#7B2FBE]/30 focus:border-[#7B2FBE] text-white px-4 py-3 outline-none transition-colors text-sm resize-none"
                    placeholder="Tell us what you're looking for, what you want to sell, or what needs repair..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-pixel text-xs text-white bg-[#7B2FBE] hover:bg-[#9B4FD8] border-2 border-[#7B2FBE] btn-glow transition-all duration-200 pixel-corners"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="space-y-6">
            {/* Hours */}
            <div className="border border-[#7B2FBE]/30 bg-[#0D0D1A] p-6">
              <h3 className="font-pixel text-xs text-[#7B2FBE] mb-4">🕐 Store Hours</h3>
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
                  <div key={day} className="flex justify-between text-gray-300">
                    <span>{day}</span>
                    <span className={closed ? "text-red-400" : "text-white"}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="border border-[#00BCD4]/30 bg-[#0D0D1A] p-6">
              <h3 className="font-pixel text-xs text-[#00BCD4] mb-4">⚡ Quick Actions</h3>
              <div className="space-y-3">
                <a href="tel:+13606202354" className="flex items-center gap-3 text-gray-300 hover:text-[#00BCD4] transition-colors text-sm group">
                  <span className="text-[#00BCD4] group-hover:scale-110 transition-transform">📞</span>
                  (360) 620-2354
                </a>
                <a href="mailto:contact.dreamquest@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-[#00BCD4] transition-colors text-sm group">
                  <span className="text-[#00BCD4] group-hover:scale-110 transition-transform">📧</span>
                  contact.dreamquest@gmail.com
                </a>
                <div className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-[#00BCD4]">📍</span>
                  <span>19425 7th Ave. NE Suite 117<br />Poulsbo, WA</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="border border-[#4CAF50]/30 bg-[#0D0D1A] p-6">
              <h3 className="font-pixel text-xs text-[#4CAF50] mb-4">🌐 Follow Us</h3>
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
                    className="flex items-center gap-2 bg-[#080810] border border-[#4CAF50]/20 hover:border-[#4CAF50]/60 px-3 py-2 text-xs transition-colors"
                  >
                    <span>{social.icon}</span>
                    <div>
                      <div className="text-white font-medium">{social.name}</div>
                      <div className="text-gray-500 text-[10px]">{social.handle}</div>
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
