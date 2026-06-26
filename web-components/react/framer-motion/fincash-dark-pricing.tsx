// FincashDarkPricing - Dark pricing with animated toggle pill + staggered card entrance
// Source: https://fincash.demos.tailgrids.com/pricing
// Screenshot: ../screenshots/fincash-pricing.png
// Deps: tailwindcss, framer-motion, lucide-react
// Tags: pricing, dark, fintech, lime, toggle, animated, layoutId
// Animations: toggle pill uses layoutId for a smooth sliding indicator.
// Price swaps with AnimatePresence fade-up/down. Cards stagger in on scroll.
// Cards lift slightly on hover. Buttons spring-scale on tap.

"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    subtitle: "For basic usage",
    monthly: 0,
    annual: 0,
    cta: "Started Free",
    popular: false,
    features: [
      "Wallet access",
      "Send & receive money",
      "Transaction history",
      "Card Management",
      "Basic security",
    ],
  },
  {
    name: "Starter",
    subtitle: "For individuals",
    monthly: 9,
    annual: 7,
    cta: "Get Started",
    popular: true,
    features: [
      "Everything in Free",
      "Spending insights",
      "Unlimited transfers",
      "Priority support",
      "Advanced security",
    ],
  },
  {
    name: "Pro",
    subtitle: "For power users",
    monthly: 29,
    annual: 23,
    cta: "Get Started",
    popular: false,
    features: [
      "Everything in Starter",
      "Multi-currency wallet",
      "API access",
      "Custom analytics",
      "Dedicated support",
    ],
  },
];

export default function FincashDarkPricing() {
  const [annual, setAnnual] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-black py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 0.68, 0, 1.2] }}
        >
          <h2 className="text-3xl lg:text-5xl font-medium text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-neutral-400 text-base mb-8">
            Choose a plan that fits your financial needs. Upgrade or cancel anytime.
          </p>

          <div className="inline-flex items-center bg-neutral-900 border border-neutral-800 rounded-full p-1">
            {["Monthly", "Annually"].map((label, i) => (
              <motion.button
                key={label}
                onClick={() => setAnnual(!!i)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium z-10 transition-colors ${
                  annual === !!i ? "text-neutral-950" : "text-neutral-400 hover:text-white"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {annual === !!i && (
                  <motion.span
                    layoutId="pricing-toggle"
                    className="absolute inset-0 bg-[#D6FF66] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {label}
                {i === 1 && <span className="ml-1.5 text-xs font-semibold">-20%</span>}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 0.68, 0, 1.2] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`rounded-2xl border p-8 flex flex-col gap-5 ${
                p.popular
                  ? "bg-[#D6FF66] border-[#D6FF66] md:scale-105 shadow-2xl"
                  : "bg-neutral-900 border-neutral-800"
              }`}
            >
              <div>
                <p className={`text-sm font-medium mb-1 ${p.popular ? "text-neutral-700" : "text-neutral-400"}`}>
                  {p.subtitle}
                </p>
                <div className={`font-semibold text-lg ${p.popular ? "text-neutral-950" : "text-white"}`}>
                  {p.name}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={annual ? "a" : "m"}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className={`text-5xl font-bold mt-2 ${p.popular ? "text-neutral-950" : "text-white"}`}
                  >
                    ${annual ? p.annual : p.monthly}
                    <span className={`text-sm font-normal ml-1 ${p.popular ? "text-neutral-700" : "text-neutral-400"}`}>
                      /month
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <ul className="flex flex-col gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${p.popular ? "text-neutral-900" : "text-neutral-300"}`}>
                    <Check className="w-4 h-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`mt-auto w-full py-3 rounded-full font-semibold text-sm text-center ${
                  p.popular
                    ? "bg-neutral-950 text-[#D6FF66] hover:bg-neutral-800"
                    : "bg-[#D6FF66] text-neutral-950 hover:bg-[#D6FF66]/90"
                }`}
              >
                {p.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
