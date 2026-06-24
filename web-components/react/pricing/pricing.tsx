// Pricing - Three-tier pricing section with annual/monthly toggle
// Source: https://21st.dev/community/components/s/pricing-section
// Author: Community Component
// Deps: tailwindcss, lucide-react
// Tags: pricing, plans, toggle, billing, cards, tiers

"use client";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  { name: "Starter", monthly: 0, annual: 0, cta: "Get started free", popular: false,
       features: [
         { text: "5 projects", ok: true }, { text: "10GB storage", ok: true },
         { text: "Basic analytics", ok: true }, { text: "Email support", ok: true },
         { text: "Custom domains", ok: false }, { text: "API access", ok: false },
             ],
  },
  { name: "Pro", monthly: 49, annual: 39, cta: "Start free trial", popular: true,
       features: [
         { text: "Unlimited projects", ok: true }, { text: "100GB storage", ok: true },
         { text: "Advanced analytics", ok: true }, { text: "Priority support", ok: true },
         { text: "Custom domains", ok: true }, { text: "API access", ok: true },
             ],
  },
  { name: "Enterprise", monthly: 149, annual: 119, cta: "Contact sales", popular: false,
       features: [
         { text: "Unlimited projects", ok: true }, { text: "1TB storage", ok: true },
         { text: "Custom analytics", ok: true }, { text: "24/7 support", ok: true },
         { text: "Custom domains", ok: true }, { text: "API access", ok: true },
             ],
  },
  ];

export function Pricing() {
    const [annual, setAnnual] = useState(false);
    return (
          <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-14">
                                  <h2 className="text-4xl font-bold mb-3">Simple pricing</h2>h2>
                                  <p className="text-muted-foreground mb-6">No hidden fees. Cancel anytime.</p>p>
                                  <div className="inline-flex bg-muted p-1 rounded-full gap-1">
                                    {["Monthly", "Annual"].map((label, i) => (
                          <button key={label} onClick={() => setAnnual(!!i)}
                                            className={cn("px-5 py-2 rounded-full text-sm font-medium transition-all",
                                                                            annual === !!i ? "bg-background shadow" : "text-muted-foreground")}>
                            {label}{i ? <span className="ml-1.5 text-xs text-green-600 font-semibold">-20%</span>span> : null}
                          </button>button>
                        ))}
                                  </div>div>
                        </div>div>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                          {plans.map((p) => (
                        <div key={p.name} className={cn("rounded-2xl border p-8 flex flex-col gap-5 transition-all",
                                                                      p.popular ? "border-primary bg-primary text-primary-foreground md:scale-105 shadow-2xl" : "border-border bg-card")}>
                                      <div>
                                                      <div className="font-bold text-lg">{p.name}</div>div>
                                                      <div className={cn("text-5xl font-black mt-2")}>${annual ? p.annual : p.monthly}
                                                                        <span className={cn("text-sm font-normal ml-1", p.popular ? "text-primary-foreground/70" : "text-muted-foreground")}>/mo</span>span>
                                                      </div>div>
                                      </div>div>
                                      <ul className="flex flex-col gap-2.5">
                                        {p.features.map((f, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm">
                                              {f.ok ? <Check className="w-4 h-4 shrink-0" /> : <X className="w-4 h-4 shrink-0 opacity-30" />}
                                                                <span className={cn(!f.ok && "opacity-40")}>{f.text}</span>span>
                                            </li>li>
                                          ))}
                                      </ul>ul>
                                      <button className={cn("mt-auto w-full py-3 rounded-xl font-semibold text-sm transition-all",
                                                                            p.popular ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-primary-foreground hover:bg-primary/90")}>
                                        {p.cta}
                                      </button>button>
                        </div>div>
                      ))}
                        </div>div>
                </div>div>
          </section>section>
        );
}
</section>
