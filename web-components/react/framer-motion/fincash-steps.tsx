// FincashSteps - Scroll-triggered steps with spring-popping lime badges
// Source: https://fincash.demos.tailgrids.com
// Screenshot: ../screenshots/fincash-home.png
// Deps: tailwindcss, framer-motion
// Tags: steps, dark, fintech, how-it-works, lime, animated, spring
// Animations: each step card fades up in sequence; the lime badge pops in with
// a spring overshoot (scale 0→1) after the card arrives, giving it a tactile feel.

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Create Your Account",
    description:
      "Sign up in minutes with a simple onboarding process and secure verification.",
  },
  {
    number: "2",
    title: "Set Up Your Wallet",
    description:
      "Add your details, connect payment methods, and customize your preferences.",
  },
  {
    number: "3",
    title: "Start Using the App",
    description:
      "Send money, scan to pay, manage cards, and track your spending instantly.",
  },
];

export default function FincashSteps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-black py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 0.68, 0, 1.2] }}
        >
          <h2 className="text-3xl lg:text-5xl font-medium mb-4 text-white">
            Your Everyday Finance, Simplified
          </h2>
          <p className="text-neutral-400 text-base">
            From account creation to daily use, get started quickly and manage
            your finances with confidence.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.article
              key={s.number}
              className="px-5 sm:px-10"
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 0.68, 0, 1.2] }}
            >
              <motion.div
                className="flex items-center justify-center w-11 h-11 mb-11 rounded-xl border border-[#D6FF66] bg-[rgba(214,255,102,0.8)]"
                style={{ boxShadow: "0 6px 25px rgba(214,255,102,0.4)" }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.14 + 0.18 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-[9px] bg-[#D6FF66]">
                  <span
                    className="text-3xl font-semibold bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(180deg,#000 0%,rgba(214,255,102,0.5) 100%)" }}
                  >
                    {s.number}
                  </span>
                </div>
              </motion.div>

              <h3 className="text-base font-medium text-white mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-400">{s.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
