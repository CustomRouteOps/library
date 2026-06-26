// FaqAccordionDark - Dark FAQ with animated height expand and rotating + icon
// Source: https://fincash.demos.tailgrids.com
// Screenshot: ../screenshots/fincash-home.png
// Deps: tailwindcss, framer-motion, lucide-react
// Tags: faq, dark, accordion, fintech, lime, animated
// Animations: answer panel expands/collapses with AnimatePresence height animation.
// + icon rotates 45° to become × when open. Items stagger in on scroll.
// Left heading slides in from the left on viewport entry.

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

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
          <motion.div
            className="lg:w-4/12"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 0.68, 0, 1.2] }}
          >
            <h2 className="text-3xl lg:text-5xl mb-4 font-medium text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-neutral-400">
              Quick answers to common questions about using the app securely and confidently.
            </p>
          </motion.div>

          <div className="lg:w-7/12 lg:ml-auto">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                className="border-b border-neutral-800"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
              >
                <button
                  className="flex justify-between items-center w-full group text-left py-6"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <h3 className={`text-lg font-medium transition-colors ${open === i ? "text-[#D6FF66]" : "text-white group-hover:text-[#D6FF66]"}`}>
                    {item.q}
                  </h3>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className={`ml-4 shrink-0 transition-colors ${open === i ? "text-[#D6FF66]" : "text-white group-hover:text-[#D6FF66]"}`}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 0.68, 0, 1.2] }}
                      className="overflow-hidden"
                    >
                      <p className="text-neutral-400 text-base leading-relaxed pb-6">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
