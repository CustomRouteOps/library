// FincashDarkFooter - Dark footer with staggered column entrance + link hover nudge
// Source: https://fincash.demos.tailgrids.com
// Screenshot: ../screenshots/fincash-home.png
// Deps: tailwindcss, framer-motion
// Tags: footer, dark, fintech, lime, animated, stagger
// Animations: brand block and each link column stagger in with useInView.
// Individual footer links nudge right 3px on hover for a subtle directional cue.

"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const colVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.68, 0, 1.2] } },
};

const columns = [
  {
    heading: "Product",
    links: ["Features", "Pricing", "Security", "Changelog"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    heading: "Support",
    links: ["Help Center", "Contact", "Privacy Policy", "Terms"],
  },
];

export default function FincashDarkFooter() {
  return (
    <footer className="bg-neutral-900 p-5 overflow-hidden">
      <div className="bg-[#D2FB64]/5 rounded-2xl px-6 xl:px-12 pb-6 pt-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col lg:flex-row gap-10 xl:gap-20 justify-between"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={colVariant} className="max-w-md lg:max-w-xs xl:max-w-sm">
              <a href="/" className="mb-4 block text-xl font-semibold text-[#D6FF66]">Fincash</a>
              <p className="text-sm text-neutral-400">
                A modern fintech app designed to make payments, money management,
                and financial tracking simple, secure, and accessible.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16">
              {columns.map((col) => (
                <motion.div key={col.heading} variants={colVariant}>
                  <h4 className="text-white font-semibold text-sm mb-5">{col.heading}</h4>
                  <ul className="flex flex-col gap-3">
                    {col.links.map((link) => (
                      <li key={link}>
                        <motion.a
                          href="#"
                          className="text-sm text-neutral-400 hover:text-white transition inline-block"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.15 }}
                        >
                          {link}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Fincash. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((l) => (
                <a key={l} href="#" className="text-sm text-neutral-500 hover:text-white transition">
                  {l}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
