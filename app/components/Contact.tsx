"use client";
import { useState } from "react";
import content from "../../public/content.json";

export default function Contact() {
  const c = content.contact;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: content.contact.form.subjects[0]?.value ?? "buy",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Dream Quest] ${c.form.subjects.find(s => s.value === formData.subject)?.label ?? formData.subject}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${content.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 section-divider"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-pixel text-[10px] text-[#7B4EA0] font-bold">{c.sectionLabel}</span>
          </div>
          <h2
            className="font-pixel text-xl sm:text-2xl mb-4 font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Contact <span className="text-[#7B4EA0] glow-purple">Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--text-secondary)" }}>
            {c.subheading}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div
            className="border-l-4 border-l-[#7B4EA0] p-6 sm:p-8"
            style={{
              background: "var(--bg-card)",
              boxShadow: "var(--card-shadow)",
            }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">{c.form.successIcon}</div>
                <h3 className="font-pixel text-sm text-[#3A9A70] glow-green mb-3 font-bold">
                  {c.form.successHeading}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {c.form.successMessage}
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
                      background: "var(--input-bg)",
                      borderColor: "var(--input-border)",
                      color: "var(--text-primary)",
                    }}
                    placeholder={c.form.namePlaceholder}
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
                      background: "var(--input-bg)",
                      borderColor: "var(--input-border)",
                      color: "var(--text-primary)",
                    }}
                    placeholder={c.form.emailPlaceholder}
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
                      background: "var(--input-bg)",
                      borderColor: "var(--input-border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {c.form.subjects.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
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
                      background: "var(--input-bg)",
                      borderColor: "var(--input-border)",
                      color: "var(--text-primary)",
                    }}
                    placeholder={c.form.messagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-pixel text-xs text-white bg-[#7B4EA0] hover:bg-[#9B6FD0] border-2 border-[#7B4EA0] btn-glow transition-all duration-200 pixel-corners"
                >
                  {c.form.submitLabel}
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
                background: "var(--bg-card)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <h3 className="font-pixel text-xs text-[#7B4EA0] mb-4 font-bold">{c.hoursLabel}</h3>
              <div className="space-y-2 text-sm">
                {content.hours.map(({ day, time }) => {
                  const closed = time === "Closed";
                  return (
                    <div key={day} className="flex justify-between">
                      <span style={{ color: "var(--text-secondary)" }}>{day}</span>
                      <span
                        className={closed ? "text-red-500 font-semibold" : "font-semibold"}
                        style={!closed ? { color: "var(--text-primary)" } : {}}
                      >
                        {time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick actions */}
            <div
              className="border-l-4 border-l-[#48D8D0] p-6"
              style={{
                background: "var(--bg-card)",
                boxShadow: "0 4px 20px rgba(72,216,208,0.18)",
              }}
            >
              <h3 className="font-pixel text-xs text-[#2AA8A2] mb-4 font-bold">{c.quickActionsLabel}</h3>
              <div className="space-y-3">
                <a
                  href={`tel:${content.phoneLink}`}
                  className="flex items-center gap-3 hover:text-[#2AA8A2] transition-colors text-sm group"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span className="text-[#48D8D0] group-hover:scale-110 transition-transform">📞</span>
                  {content.phone}
                </a>
                <a
                  href={`mailto:${content.email}`}
                  className="flex items-center gap-3 hover:text-[#2AA8A2] transition-colors text-sm group"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span className="text-[#48D8D0] group-hover:scale-110 transition-transform">📧</span>
                  {content.email}
                </a>
                <div className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span className="text-[#48D8D0]">📍</span>
                  <span>
                    {content.address.street}
                    <br />
                    {content.address.city}, {content.address.state}
                  </span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div
              className="border-l-4 border-l-[#50C890] p-6"
              style={{
                background: "var(--bg-card)",
                boxShadow: "0 4px 20px rgba(80,200,144,0.18)",
              }}
            >
              <h3 className="font-pixel text-xs text-[#3A9A70] mb-4 font-bold">{c.socialsLabel}</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Instagram", handle: content.social.instagram.handle, icon: "📸", url: content.social.instagram.url },
                  { name: "Facebook",  handle: content.social.facebook.handle,  icon: "📘", url: content.social.facebook.url  },
                  { name: "Bluesky",   handle: content.social.bluesky.handle,   icon: "🦋", url: content.social.bluesky.url   },
                ].filter((s) => s.url).map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border px-3 py-2 text-xs transition-colors hover:border-[#50C890]"
                    style={{
                      background: "var(--input-bg)",
                      borderColor: "rgba(80,200,144,0.4)",
                    }}
                  >
                    <span>{social.icon}</span>
                    <div>
                      <div className="font-semibold" style={{ color: "var(--text-primary)" }}>
                        {social.name}
                      </div>
                      <div className="text-[10px]" style={{ color: "var(--text-secondary)" }}>
                        {social.handle}
                      </div>
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
