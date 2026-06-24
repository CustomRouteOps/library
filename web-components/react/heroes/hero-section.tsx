// HeroSection5 - Centered hero with gradient headline and CTA buttons
// Source: https://21st.dev/community/components/tailark/hero-section-5/default
// Author: tailark (@tailark)
// Deps: tailwindcss, lucide-react
// Tags: hero, landing, gradient, cta, centered, headline, marketing
// Description: A centered hero section with a bold gradient headline, supporting
// subtitle text, and two call-to-action buttons (primary + secondary). Includes
// a decorative badge/pill above the headline, and optional gradient background.
// Classic high-converting layout for SaaS and product landing pages.

import { ArrowRight, Star } from "lucide-react";

export default function HeroSection5() {
    return (
          <section className="relative overflow-hidden py-24 md:py-32">
            {/* Background gradient */}
                <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
                </div>div>
          
                <div className="container mx-auto px-4 text-center">
                  {/* Badge */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
                                  <Star className="h-3.5 w-3.5 text-yellow-500" />
                                  <span>Trusted by 10,000+ developers worldwide</span>span>
                        </div>div>
                
                  {/* Headline */}
                        <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                                  Build your next project{" "}
                                  <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                              10x faster
                                  </span>span>
                        </h1>h1>
                
                  {/* Subtitle */}
                        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
                                  A collection of beautiful, production-ready React components that help
                                  you ship stunning UIs without the hassle of building from scratch.
                        </p>p>
                
                  {/* CTA Buttons */}
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                  <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                                              Get started for free
                                              <ArrowRight className="h-4 w-4" />
                                  </button>button>
                                  <button className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold transition-colors hover:bg-muted">
                                              View components
                                  </button>button>
                        </div>div>
                
                  {/* Social proof numbers */}
                        <div className="mt-16 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
                          {[
            { value: "200+", label: "Components" },
            { value: "10k+", label: "Developers" },
            { value: "99%", label: "Satisfaction" },
                      ].map((stat) => (
                                    <div key={stat.label} className="text-center">
                                                  <p className="text-4xl font-bold">{stat.value}</p>p>
                                                  <p className="text-sm text-muted-foreground">{stat.label}</p>p>
                                    </div>div>
                                  ))}
                        </div>div>
                </div>div>
          </section>section>
        );
}
</section>
