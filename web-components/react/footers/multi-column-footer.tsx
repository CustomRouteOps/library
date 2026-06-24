// MultiColumnFooter - Full-featured multi-column footer with newsletter signup
// Source: https://21st.dev/community/components/shadcnblockscom/footer-2/default
// Author: shadcnblocks (@shadcnblockscom)
// Deps: tailwindcss, lucide-react
// Tags: footer, multi-column, newsletter, social, links, marketing
// Description: A comprehensive 4-column footer with: brand/logo column with
// tagline and social media links, and three link group columns (Product,
// Resources, Company). Includes a bottom bar with copyright notice and a
// newsletter email signup form. Fully responsive.

import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

const navigation = [
  {
        title: "Product",
        links: [
          { name: "Features", href: "#" },
          { name: "Pricing", href: "#" },
          { name: "Changelog", href: "#" },
          { name: "Integrations", href: "#" },
          { name: "API Docs", href: "#" },
              ],
  },
  {
        title: "Resources",
        links: [
          { name: "Documentation", href: "#" },
          { name: "Blog", href: "#" },
          { name: "Community", href: "#" },
          { name: "Status", href: "#" },
          { name: "Support", href: "#" },
              ],
  },
  {
        title: "Company",
        links: [
          { name: "About Us", href: "#" },
          { name: "Careers", href: "#" },
          { name: "Partners", href: "#" },
          { name: "Privacy Policy", href: "#" },
          { name: "Terms of Service", href: "#" },
              ],
  },
  ];

const social = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  ];

export default function MultiColumnFooter() {
    return (
          <footer className="border-t border-border bg-background">
                <div className="container mx-auto px-4 py-16">
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
                          {/* Brand column */}
                                  <div className="lg:col-span-2">
                                              <div className="mb-4 flex items-center gap-2">
                                                            <div className="h-8 w-8 rounded-lg bg-primary" />
                                                            <span className="text-xl font-bold">Acme Inc</span>span>
                                              </div>div>
                                              <p className="mb-6 max-w-xs text-sm text-muted-foreground">
                                                            Building the next generation of developer tools. Ship faster, build
                                                            better, scale infinitely.
                                              </p>p>
                                    {/* Social links */}
                                              <div className="flex items-center gap-3">
                                                {social.map(({ name, icon: Icon, href }) => (
                            <a
                                                key={name}
                                                href={href}
                                                aria-label={name}
                                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                                              >
                                              <Icon className="h-4 w-4" />
                            </a>a>
                          ))}
                                              </div>div>
                                  </div>div>
                        
                          {/* Navigation columns */}
                          {navigation.map((section) => (
                        <div key={section.title}>
                                      <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest">
                                        {section.title}
                                      </h3>h3>
                                      <ul className="space-y-3">
                                        {section.links.map((link) => (
                                            <li key={link.name}>
                                                                <a
                                                                                        href={link.href}
                                                                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                                                                      >
                                                                  {link.name}
                                                                </a>a>
                                            </li>li>
                                          ))}
                                      </ul>ul>
                        </div>div>
                      ))}
                        </div>div>
                
                  {/* Newsletter */}
                        <div className="mt-12 border-t border-border pt-8">
                                  <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                                              <div>
                                                            <h3 className="font-semibold">Stay up to date</h3>h3>
                                                            <p className="mt-1 text-sm text-muted-foreground">
                                                                            Get the latest news and updates delivered to your inbox.
                                                            </p>p>
                                              </div>div>
                                              <form className="flex w-full max-w-sm gap-2">
                                                            <input
                                                                              type="email"
                                                                              placeholder="Enter your email"
                                                                              className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary"
                                                                            />
                                                            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                                                                            Subscribe
                                                            </button>button>
                                              </form>form>
                                  </div>div>
                        </div>div>
                
                  {/* Bottom bar */}
                        <div className="mt-8 border-t border-border pt-8 text-center">
                                  <p className="text-sm text-muted-foreground">
                                              &copy; {new Date().getFullYear()} Acme Inc. All rights reserved.
                                  </p>p>
                        </div>div>
                </div>div>
          </footer>footer>
        );
}
// Footer - Multi-column responsive footer with social links and navigation
// Source: https://21st.dev/community/components/s/footer
// Author: Community Component
// Deps: tailwindcss, lucide-react
// Tags: footer, navigation, social, columns, responsive
// Description: Complete site footer with logo/tagline column, social icon links,
// four navigation columns (Product, Company, Resources, Legal), and copyright bar.

import { Github, Twitter, Linkedin, Youtube, Globe } from "lucide-react";

const cols = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap", "Beta"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Resources", links: ["Documentation", "API", "Guides", "Support"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
  ];
const socials = [
  { icon: Github, label: "GitHub" }, { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" }, { icon: Youtube, label: "YouTube" },
  ];

export function Footer() {
    return (
          <footer className="border-t border-border bg-background">
                <div className="mx-auto max-w-7xl px-6 py-16">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
                                  <div className="col-span-2 flex flex-col gap-4">
                                              <div className="flex items-center gap-2">
                                                            <Globe className="h-6 w-6 text-primary" />
                                                            <span className="text-base font-bold">Acme Co.</span>span>
                                              </div>div>
                                              <p className="text-sm text-muted-foreground max-w-xs">
                                                            Building beautiful React components that help teams ship faster.
                                              </p>p>
                                              <div className="flex gap-2 mt-2">
                                                {socials.map(({ icon: Icon, label }) => (
                            <a key={label} href="#" aria-label={label}
                                                className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
                                              <Icon className="h-4 w-4" />
                            </a>a>
                          ))}
                                              </div>div>
                                  </div>div>
                          {cols.map((col) => (
                        <div key={col.title}>
                                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{col.title}</p>p>
                                      <ul className="space-y-2.5">
                                        {col.links.map((link) => (
                                            <li key={link}>
                                                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>a>
                                            </li>li>
                                          ))}
                                      </ul>ul>
                        </div>div>
                      ))}
                        </div>div>
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
                                  <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Acme Co. All rights reserved.</p>p>
                                  <div className="flex gap-4">
                                    {["Privacy", "Terms", "Sitemap"].map((item) => (
                          <a key={item} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{item}</a>a>
                        ))}
                                  </div>div>
                        </div>div>
                </div>div>
          </footer>footer>
        );
}
</footer>
