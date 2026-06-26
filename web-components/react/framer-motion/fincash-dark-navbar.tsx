// FincashDarkNavbar - Sticky dark navbar with staggered entrance + lime CTA
// Source: https://fincash.demos.tailgrids.com
// Screenshot: ../screenshots/fincash-home.png
// Deps: tailwindcss, framer-motion, lucide-react
// Tags: navbar, dark, sticky, fintech, lime, animated
// Animations: logo slides in from left, links stagger down, CTA slides from right.
// Mobile menu animates open with a fade-slide.

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const linkVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 0.68, 0, 1.2] } },
};

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function FincashDarkNavbar() {
  const [open, setOpen] = useState(false);
  const active = "/";

  return (
    <header className="py-4 sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className="text-xl font-semibold text-[#D6FF66]"
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            Fincash
          </motion.a>

          <motion.nav
            className="hidden md:flex"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {links.map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                variants={linkVariant}
                className={`inline-block text-sm px-3 py-3 font-medium transition ${
                  l.href === active ? "text-[#D6FF66]" : "text-white hover:text-[#D6FF66]"
                }`}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.nav>

          <motion.a
            href="#"
            className="hidden md:inline-flex bg-[#D6FF66] text-sm text-neutral-950 items-center justify-center font-medium rounded-full py-3 px-5"
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Download Now
          </motion.a>

          <button
            className="md:hidden text-white p-2 rounded-md hover:text-white/70 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              className="md:hidden pt-4 pb-2 flex flex-col gap-1"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className={`block text-sm px-3 py-2.5 font-medium rounded-lg transition ${
                    l.href === active
                      ? "text-[#D6FF66] bg-[#D6FF66]/10"
                      : "text-white hover:text-[#D6FF66] hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a href="#" className="mt-2 bg-[#D6FF66] text-sm text-neutral-950 text-center font-medium rounded-full py-3 px-5">
                Download Now
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
