// FincashDarkFooter - Dark footer with lime-tinted surface and multi-column links
// Source: https://fincash.demos.tailgrids.com
// Screenshot: ../screenshots/fincash-home.png
// Deps: tailwindcss
// Tags: footer, dark, fintech, lime, multi-column
// Description: Footer on a neutral-900 base with an inner rounded card that has a
// subtle lime background tint (bg-[#D2FB64]/5). Left column: logo, tagline, social
// links (X, Instagram, LinkedIn). Right: 3 link columns (Product, Company, Support).
// Bottom bar: copyright + policy links. Fully responsive.

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
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 justify-between">

            {/* Brand */}
            <div className="max-w-md lg:max-w-xs xl:max-w-sm">
              <a href="/" className="mb-4 block text-xl font-semibold text-white">
                Fincash
              </a>
              <p className="text-sm text-neutral-400">
                A modern fintech app designed to make payments, money management,
                and financial tracking simple, secure, and accessible.
              </p>
              <div className="flex gap-5 xl:gap-8 mt-10">
                <SocialLink label="X (Twitter)" />
                <SocialLink label="Instagram" />
                <SocialLink label="LinkedIn" />
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16">
              {columns.map((col) => (
                <div key={col.heading}>
                  <h4 className="text-white font-semibold text-sm mb-5">
                    {col.heading}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-neutral-400 hover:text-white transition"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Fincash. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-sm text-neutral-500 hover:text-white transition"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="flex gap-2.5 transition hover:text-white items-center font-medium text-neutral-400 text-sm"
    >
      <div className="w-4 h-4 bg-neutral-600 rounded-sm" />
      <span className="xl:block hidden">{label}</span>
    </a>
  );
}
