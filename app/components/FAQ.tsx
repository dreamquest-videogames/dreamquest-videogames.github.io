"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do you buy games?",
    a: "Yup! We'll take a look at any video game related things you bring in! We offer cash, but you'll get more for store credit.",
  },
  {
    q: "Do trade-ins or repairs require an appointment?",
    a: "Nope! Trades are handled like any other transaction, first come first serve. Swing by any time during normal business hours. For larger lots, please be sure to come in at least an hour before closing. You can always call first to see how busy we are.",
  },
  {
    q: "Can I use Dream Quest as a safe place for an online marketplace meetup?",
    a: "Absolutely! Even if we're not the ones buying, we can help provide a safe place to meet up with someone for a game trade or sale online. We can help authenticate and test the items for you, and you can rest easy knowing there's security on-site and cameras just in case anything sketchy goes down.",
  },
  {
    q: "What kind of things are you interested in buying?",
    a: "Most anything video game or video game related. We will look over and appraise your trade based on current market value, condition, completion, and demand. Prices and values fluctuate constantly, so a trade appraisal is only valid for that day, and numbers cannot be given over the phone or promised ahead of time.",
  },
  {
    q: "What do you mean you'll only buy it for X? It's selling for Y online!",
    a: "We've gotta keep the lights on. It takes a lot to keep a brick and mortar store running, so if we offered top sales dollar on an item, we would have zero profit from it. As with any reseller business, we have overhead. Trade values are based on lots of different factors, too. Yes, you'll always get more selling on your own, but we want to keep our prices fair for everyone and will work with you to find a fair trade value.",
  },
  {
    q: "Can you vulcanize my tires while I wait?",
    a: "No.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 section-divider" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-pixel text-[10px] text-[#7B4EA0] font-bold">// GOT QUESTIONS?</span>
          <h2 className="font-pixel text-xl sm:text-2xl mt-4 font-bold" style={{ color: "var(--text-primary)" }}>
            FAQ
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-l-4 border-l-[#7B4EA0] cursor-pointer"
              style={{
                background: "var(--bg-card)",
                boxShadow: "var(--card-shadow)",
              }}
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <div className="flex items-center justify-between p-5">
                <span className="font-semibold text-sm pr-4" style={{ color: "var(--text-primary)" }}>
                  {faq.q}
                </span>
                <span className="text-[#7B4EA0] text-lg font-bold flex-shrink-0">
                  {open === idx ? "−" : "+"}
                </span>
              </div>
              {open === idx && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
