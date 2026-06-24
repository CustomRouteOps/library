// SparklesText - Text with animated sparkle particles effect
// Source: https://21st.dev/community/components/magicui/sparkles-text/default
// Author: magicui (@magicui)
// Deps: tailwindcss, framer-motion
// Tags: text, sparkles, animation, particles, magic, highlight
// Description: A text component that renders animated star/sparkle particles
// around the text. The sparkles appear and disappear with random positions,
// sizes, and colors, creating a magical shimmering effect. Perfect for
// highlighting key phrases or creating eye-catching headings.

"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Sparkle {
    id: number;
    x: string;
    y: string;
    color: string;
    delay: number;
    scale: number;
    lifespan: number;
}

const SPARKLE_COLORS = ["#FFE44D", "#FF6B9D", "#A78BFA", "#60A5FA", "#34D399"];

function generateSparkle(id: number): Sparkle {
    return {
          id,
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
          delay: Math.random() * 0.5,
          scale: 0.4 + Math.random() * 0.8,
          lifespan: 500 + Math.random() * 1000,
    };
}

function SparkleIcon({ color, scale }: { color: string; scale: number }) {
    return (
          <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill={color}
                  style={{ transform: `scale(${scale})` }}
                >
                <path d="M8 0 C8 0 8.5 5.5 10 7 C11.5 8.5 16 8 16 8 C16 8 11.5 8.5 10 10 C8.5 11.5 8 16 8 16 C8 16 7.5 11.5 6 10 C4.5 8.5 0 8 0 8 C0 8 4.5 7.5 6 7 C7.5 6.5 8 0 8 0 Z" />
          </svg>svg>
        );
}

interface SparklesTextProps {
    text: string;
    className?: string;
    sparklesCount?: number;
}

export default function SparklesText({
    text,
    className,
    sparklesCount = 8,
}: SparklesTextProps) {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);
    const idRef = useRef(0);
  
    useEffect(() => {
          const addSparkle = () => {
                  const sparkle = generateSparkle(idRef.current++);
                  setSparkles((prev) => [...prev.slice(-sparklesCount + 1), sparkle]);
            
                  setTimeout(() => {
                            setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
                  }, sparkle.lifespan);
          };
      
          addSparkle();
          const interval = setInterval(addSparkle, 400);
          return () => clearInterval(interval);
    }, [sparklesCount]);
  
    return (
          <span className={cn("relative inline-block", className)}>
            {sparkles.map((sparkle) => (
                    <span
                                key={sparkle.id}
                                className="absolute pointer-events-none animate-ping"
                                style={{
                                              left: sparkle.x,
                                              top: sparkle.y,
                                              animationDuration: `${sparkle.lifespan}ms`,
                                              animationDelay: `${sparkle.delay}s`,
                                }}
                              >
                              <SparkleIcon color={sparkle.color} scale={sparkle.scale} />
                    </span>span>
                  ))}
                <span className="relative z-10 font-bold">{text}</span>span>
          </span>span>
        );
}

// Demo usage:
export function SparklesTextDemo() {
    return (
          <div className="flex min-h-[200px] items-center justify-center">
                <h1 className="text-4xl font-bold">
                        Build{" "}
                        <SparklesText text="magical" className="text-purple-500" />
                  {" "}interfaces
                </h1>h1>
          </div>div>
        );
}
</svg>
