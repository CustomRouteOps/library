// FaqAccordionDark - Dark accordion FAQ with lime hover accent
// Source: https://fincash.demos.tailgrids.com
// Screenshot: ../screenshots/fincash-home.png
// Deps: tailwindcss
// Tags: faq, dark, accordion, fintech, lime
// Description: Two-column layout on desktop: heading + subtitle on the left (4/12),
// accordion list on the right (7/12). Each accordion item sits above a
// neutral-800 border, title turns lime on hover, and a + / - icon toggles.
// Stacks vertically on mobile.

"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is my money secure?",
    a: "Your funds are protected with bank-level 256-bit encryption, two-factor authentication, and real-time fraud monitoring. We're fully licensed and insured.",
  },
  {
    q: "How fast are money transfers?",
    a: "Transfers between Fincash users are instant. Bank transfers typically complete within 1–2 business days depending on your financial institution.",
  },
  {
    q: "Can I use the app internationally?",
    a: "Yes. The app supports multi-currency wallets and international transfers to 50+ countries with competitive exchange rates.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel anytime from your account settings. Your access continues until the end of the billing period — no hidden fees.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept all major credit and debit cards, bank account transfers (ACH), and Apple Pay / Google Pay for quick top-ups.",
  },
];

export default function FaqAccordionDark() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-black py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col gap-10 lg:flex-row justify-between">
          <div className="lg:w-4/12">
            <h2 className="text-3xl lg:text-5xl mb-4 font-medium text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-neutral-400">
              Quick answers to common questions about using the app securely
              and confidently.
            </p>
          </div>

          <div className="lg:w-7/12 lg:ml-auto">
            {faqs.map((item, i) => (
              <div key={i} className="py-6 border-b border-neutral-800">
                <button
                  className="flex justify-between items-center w-full group text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <h3 className="text-lg font-medium text-white transition-all group-hover:text-[#D6FF66]">
                    {item.q}
                  </h3>
                  <span className="text-white group-hover:text-[#D6FF66] transition-all ml-4 shrink-0">
                    {open === i ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>
                {open === i && (
                  <p className="mt-3 text-neutral-400 text-base leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
