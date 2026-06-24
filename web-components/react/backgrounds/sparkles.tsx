test// Sparkles - Configurable particle sparkle background
// Source: https://21st.dev/aceternity/sparkles
// Author: Aceternity UI (@aceternity)
// Deps: framer-motion, @tsparticles/slim, @tsparticles/react

"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesDemo() {
    return (
          <div className="h-[40rem] relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
                <div className="w-full absolute inset-0 h-screen">
                        <SparklesCore
                                    id="tsparticles"
                                    background="transparent"
                                    minSize={0.6}
                                    maxSize={1.4}
                                    particleDensity={100}
                                    className="w-full h-full"
                                    particleColor="#FFFFFF"
                                    speed={1}
                                  />
                </div>div>
                <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                        Build faster
                </h1>h1>
          </div>div>
        );
}</div>
