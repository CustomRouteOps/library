// FincashDarkHero - Full-width dark hero with lime accent word and app store CTAs
// Source: https://fincash.demos.tailgrids.com
// Screenshot: ../screenshots/fincash-home.png
// Deps: tailwindcss
// Tags: hero, dark, fintech, lime, app-store, landing
// Description: Black-background centered hero section. Large headline with a
// single lime-colored accent word. Supporting subtitle in neutral-400. Two
// app-store badge buttons below, followed by a hero app screenshot that fades
// out via a bottom gradient mask. Classic fintech mobile-app landing layout.

export default function FincashDarkHero() {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="lg:max-w-5xl lg:px-5 mx-auto text-center pt-20 pb-16 lg:pb-22">

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl mb-4 font-medium lg:leading-tight">
            Manage Your Money Unlock Your{" "}
            <span className="text-[#D6FF66]">Financial</span> Confidence
          </h1>

          <p className="text-base sm:text-lg leading-7 text-neutral-400 max-w-2xl mx-auto mt-4 mb-10">
            The all-in-one app that tracks spending, automates saving, and
            provides insights to grow your wealth with clarity.
          </p>

          <div className="flex gap-4 items-center justify-center mb-16">
            <a href="#" className="inline-block hover:opacity-80 transition-opacity">
              <AppStoreBadge />
            </a>
            <a href="#" className="inline-block hover:opacity-80 transition-opacity">
              <PlayStoreBadge />
            </a>
          </div>

          {/* Hero image with gradient fade */}
          <div className="relative">
            <div
              className="absolute bottom-0 left-0 right-0 h-40 z-10"
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_100%)",
              }}
            />
            <img
              className="w-full rounded-t-2xl"
              alt="App dashboard preview"
              src="https://fincash.demos.tailgrids.com/images/hero/hero-image.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AppStoreBadge() {
  return (
    <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-2.5 hover:border-neutral-600 transition">
      <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
        <path
          d="M16.4758 12.7468C16.4621 10.5611 17.5079 8.91357 19.6131 7.70605C18.4287 5.99727 16.6286 5.05469 14.2545 4.87305C12.0097 4.69727 9.55859 6.15137 8.65625 6.15137C7.70117 6.15137 5.52344 4.93359 3.82031 4.93359C0.308594 4.99219 -3.8147e-06 7.77344 -3.8147e-06 7.77344C-3.8147e-06 7.77344 -0.984375 14.3848 5.0957 21.0332C7.06055 23.1387 8.75781 24 10.8789 24C12.9824 24 13.7109 22.7871 16.2422 22.7871C18.7734 22.7871 19.3418 24 21.6387 24C23.7598 24 25.3945 22.9766 27.3594 20.8711C30.5273 17.3867 31.8262 12.2734 31.8125 12.0078C31.7891 11.9609 16.4895 12.0547 16.4758 12.7468Z"
          fill="white"
        />
      </svg>
      <div className="text-left">
        <p className="text-[10px] text-neutral-400 leading-none">Download on the</p>
        <p className="text-sm font-semibold text-white leading-tight">App Store</p>
      </div>
    </div>
  );
}

function PlayStoreBadge() {
  return (
    <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-2.5 hover:border-neutral-600 transition">
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
        <path d="M0.428223 0.617188L11.3682 11.5572L0.428223 22.4972C0.165039 22.2617 0 21.9199 0 21.5371V1.57715C0 1.19434 0.165039 0.852539 0.428223 0.617188Z" fill="#32BBFF"/>
        <path d="M14.9863 8.09277L11.3682 11.5576L14.9863 15.0225L19.4902 12.5166C20.6885 11.8506 20.6885 11.2646 19.4902 10.5986L14.9863 8.09277Z" fill="#FFD400"/>
        <path d="M0.428223 22.4971C0.776367 22.8252 1.28906 22.9014 1.81934 22.625L14.9863 15.0225L11.3682 11.5576L0.428223 22.4971Z" fill="#FF3333"/>
        <path d="M1.81934 0.489746L14.9863 8.09229L11.3682 11.5572L0.428223 0.617676C0.776367 0.289551 1.28906 0.213379 1.81934 0.489746Z" fill="#00E676"/>
      </svg>
      <div className="text-left">
        <p className="text-[10px] text-neutral-400 leading-none">Get it on</p>
        <p className="text-sm font-semibold text-white leading-tight">Google Play</p>
      </div>
    </div>
  );
}
