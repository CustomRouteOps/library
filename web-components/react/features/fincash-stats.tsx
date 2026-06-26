// FincashStats - Dark stat row with 3-4 large number highlights
// Source: https://fincash.demos.tailgrids.com
// Screenshot: ../screenshots/fincash-home.png
// Deps: tailwindcss
// Tags: stats, dark, metrics, fintech, numbers
// Description: Horizontal stats bar on a dark background. 3–4 columns, each
// with a large bold number and a short descriptor label in neutral-400.
// Dividers between columns via border-x border-white/20. Responsive: stacks
// vertically on mobile, 4-column grid on xl.

const stats = [
  { value: "$2.4B+", label: "Assets Securely Managed" },
  { value: "1.2M+", label: "Trusted by users" },
  { value: "4.9", label: "App Store rating", star: true },
];

export default function FincashStats() {
  return (
    <section className="bg-black py-10 lg:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mx-auto max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-5xl font-medium text-white text-center">
            Our Journey in Numbers: Growth, Trust, and Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:gap-0 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((s, i) => (
            <article
              key={s.label}
              className={`px-10 text-center ${
                i === 1
                  ? "border-x border-white/20"
                  : ""
              }`}
            >
              <h3 className="font-medium mb-3 text-white text-4xl lg:text-6xl flex items-center justify-center gap-3">
                {s.star && (
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M24 5.7C24.685 5.7 25.311 6.089 25.615 6.702L30.557 16.716L41.608 18.321C42.285 18.42 42.849 18.898 43.061 19.549C43.272 20.2 43.094 20.914 42.604 21.392L34.606 29.185L36.495 40.194C36.611 40.869 36.334 41.552 35.781 41.955C35.227 42.357 34.491 42.411 33.885 42.093L24 36.895L14.116 42.093C13.509 42.411 12.774 42.357 12.22 41.955C11.667 41.552 11.387 40.869 11.502 40.194L13.389 29.185L5.394 21.392C4.905 20.914 4.729 20.199 4.94 19.549C5.152 18.898 5.715 18.42 6.393 18.321L17.441 16.716L22.386 6.702C22.69 6.089 23.316 5.7 24 5.7Z"
                      fill="#FACC15"
                    />
                  </svg>
                )}
                {s.value}
              </h3>
              <p className="text-xl text-neutral-400">{s.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
