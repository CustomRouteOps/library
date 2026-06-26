// FincashStats - Scroll-triggered staggered stat row
// Source: https://fincash.demos.tailgrids.com
// Screenshot: ../screenshots/fincash-home.png
// Deps: tailwindcss, framer-motion
// Tags: stats, dark, metrics, fintech, animated, scroll-triggered
// Animations: heading fades up on scroll; each stat column staggers in with
// useInView so numbers only animate when they enter the viewport.

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};
const itemVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.68, 0, 1.2] } },
};

const stats = [
  { value: "$2.4B+", label: "Assets Securely Managed" },
  { value: "1.2M+", label: "Trusted by users" },
  { value: "4.9", label: "App Store rating", star: true },
];

export default function FincashStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-black py-10 lg:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 0.68, 0, 1.2] }}
        >
          <h2 className="text-3xl lg:text-5xl font-medium text-white text-center">
            Our Journey in Numbers: Growth, Trust, and Impact
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 gap-10 lg:gap-0 sm:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((s, i) => (
            <motion.article
              key={s.label}
              variants={itemVariant}
              className={`px-10 text-center ${i === 1 ? "border-x border-white/20" : ""}`}
            >
              <h3 className="font-medium mb-3 text-white text-4xl lg:text-6xl flex items-center justify-center gap-3">
                {s.star && (
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                    <path d="M24 5.7C24.685 5.7 25.311 6.089 25.615 6.702L30.557 16.716L41.608 18.321C42.285 18.42 42.849 18.898 43.061 19.549C43.272 20.2 43.094 20.914 42.604 21.392L34.606 29.185L36.495 40.194C36.611 40.869 36.334 41.552 35.781 41.955C35.227 42.357 34.491 42.411 33.885 42.093L24 36.895L14.116 42.093C13.509 42.411 12.774 42.357 12.22 41.955C11.667 41.552 11.387 40.869 11.502 40.194L13.389 29.185L5.394 21.392C4.905 20.914 4.729 20.199 4.94 19.549C5.152 18.898 5.715 18.42 6.393 18.321L17.441 16.716L22.386 6.702C22.69 6.089 23.316 5.7 24 5.7Z" fill="#FACC15" />
                  </svg>
                )}
                {s.value}
              </h3>
              <p className="text-xl text-neutral-400">{s.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
