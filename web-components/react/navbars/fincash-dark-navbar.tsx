// FincashDarkNavbar - Sticky dark navbar with lime CTA button
// Source: https://fincash.demos.tailgrids.com
// Screenshot: ../screenshots/fincash-home.png
// Deps: tailwindcss
// Tags: navbar, dark, sticky, fintech, lime, cta
// Description: Sticky top navbar on a transparent/dark background. Logo left,
// centered links that highlight in lime on active/hover, and a lime pill CTA
// button ("Download Now") on the right. Collapses to a hamburger on mobile.

"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
          <a href="/" className="text-xl font-semibold text-white">Fincash</a>

          <nav className="hidden md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`inline-block text-sm px-3 py-3 font-medium transition ${
                  l.href === active ? "text-[#D6FF66]" : "text-white hover:text-[#D6FF66]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#"
              className="bg-[#D6FF66] text-sm text-neutral-950 inline-flex items-center justify-center font-medium rounded-full py-3 px-5 hover:bg-[#D6FF66]/90 transition-all duration-200"
            >
              Download Now
            </a>
          </div>

          <button
            className="md:hidden text-white p-2 rounded-md hover:text-white/70 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-1">
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
            <a
              href="#"
              className="mt-2 bg-[#D6FF66] text-sm text-neutral-950 text-center font-medium rounded-full py-3 px-5 hover:bg-[#D6FF66]/90 transition-all"
            >
              Download Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
