// FincashSteps - Numbered how-it-works steps with glowing lime badges
// Source: https://fincash.demos.tailgrids.com
// Screenshot: ../screenshots/fincash-home.png
// Deps: tailwindcss
// Tags: steps, dark, fintech, how-it-works, lime, onboarding
// Description: 3-column "how it works" section on a dark background. Each step
// has a square lime badge (with a green box-shadow glow) showing the step
// number as a gradient-masked digit, followed by a short title and description.
// Responsive: stacks to 1 column on mobile, 3 on lg.

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
  return (
    <section className="bg-black py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-medium mb-4 text-white">
            Your Everyday Finance, Simplified
          </h2>
          <p className="text-neutral-400 text-base">
            From account creation to daily use, get started quickly and manage
            your finances with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3">
          {steps.map((s) => (
            <article key={s.number} className="px-5 sm:px-10">
              {/* Lime step badge */}
              <div
                className="flex items-center justify-center w-11 h-11 mb-11 rounded-xl border border-[#D6FF66] bg-[rgba(214,255,102,0.8)]"
                style={{ boxShadow: "0 6px 25px rgba(214,255,102,0.4)" }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-[9px] bg-[#D6FF66]">
                  <span
                    className="text-3xl font-semibold bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg,#000 0%,rgba(214,255,102,0.5) 100%)",
                    }}
                  >
                    {s.number}
                  </span>
                </div>
              </div>

              <h3 className="text-base font-medium text-white mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-400">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
