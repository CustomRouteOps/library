/ Meteors - Animated meteor shower background for cards and containers
// Source: https://21st.dev/aceternity/meteors
// Author: Aceternity UI (@aceternity)
// Deps: @/components/ui/meteors
// Tags: Card, Backgrounds, Testimonials

import React from "react";
import { Meteors } from "@/components/ui/meteors";

export function MeteorsDemo() {
    return (
          <div className="w-full relative max-w-xs">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                        <h1 className="font-bold text-xl text-white mb-4 relative z-50">Meteors Background Effect</h1>h1>
                        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                                  Animated meteors streaming across the background of a card container.
                        </p>p>
                        <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">Explore</button>button>
                        <Meteors number={20} />
                </div>div>
          </div>div>
        );
}</div>
