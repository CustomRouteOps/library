// FincashDarkPricing - Dark 3-tier pricing with monthly/annual toggle and lime popular card
// Source: https://fincash.demos.tailgrids.com/pricing
// Screenshot: ../screenshots/fincash-pricing.png
// Deps: tailwindcss
// Tags: pricing, dark, fintech, lime, toggle, tiers
// Description: Three-column pricing section on a black background. Monthly/annual
// toggle pill at top (annual shows -20% badge). The popular "Starter" card has a
// lime (#D6FF66) background with dark text; flanking cards are dark neutral-900
// with white text. Check-mark feature list per tier. Responsive: stacks on mobile.

"use client";
import { useState } from "react";
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

  return (
    <section className="bg-black py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-5xl font-medium text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-neutral-400 text-base mb-8">
            Choose a plan that fits your financial needs. Upgrade or cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-neutral-900 border border-neutral-800 rounded-full p-1">
            {["Monthly", "Annually"].map((label, i) => (
              <button
                key={label}
                onClick={() => setAnnual(!!i)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  annual === !!i
                    ? "bg-[#D6FF66] text-neutral-950"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {label}
                {i === 1 && (
                  <span className="ml-1.5 text-xs font-semibold">-20%</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-8 flex flex-col gap-5 transition-all ${
                p.popular
                  ? "bg-[#D6FF66] border-[#D6FF66] md:scale-105 shadow-2xl"
                  : "bg-neutral-900 border-neutral-800"
              }`}
            >
              <div>
                <p
                  className={`text-sm font-medium mb-1 ${
                    p.popular ? "text-neutral-700" : "text-neutral-400"
                  }`}
                >
                  {p.subtitle}
                </p>
                <div
                  className={`font-semibold text-lg ${
                    p.popular ? "text-neutral-950" : "text-white"
                  }`}
                >
                  {p.name}
                </div>
                <div
                  className={`text-5xl font-bold mt-2 ${
                    p.popular ? "text-neutral-950" : "text-white"
                  }`}
                >
                  ${annual ? p.annual : p.monthly}
                  <span
                    className={`text-sm font-normal ml-1 ${
                      p.popular ? "text-neutral-700" : "text-neutral-400"
                    }`}
                  >
                    /month
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2 text-sm ${
                      p.popular ? "text-neutral-900" : "text-neutral-300"
                    }`}
                  >
                    <Check className="w-4 h-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-auto w-full py-3 rounded-full font-semibold text-sm text-center transition-all ${
                  p.popular
                    ? "bg-neutral-950 text-[#D6FF66] hover:bg-neutral-800"
                    : "bg-[#D6FF66] text-neutral-950 hover:bg-[#D6FF66]/90"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
