// TestimonialsColumns - Animated scrolling testimonial columns
// Source: https://21st.dev/community/components/efferd/testimonials-columns-1/default
// Author: efferd (@efferd)
// Deps: tailwindcss, framer-motion
// Tags: testimonials, columns, animation, scroll, infinite, social-proof
// Description: Three animated columns of testimonial cards that scroll infinitely
// in alternating directions (up, down, up). Creates a dynamic, eye-catching
// social proof section. Each column scrolls at a slightly different speed
// for a parallax-like effect.

"use client";

import { useEffect, useRef } from "react";

interface TestimonialItem {
    name: string;
    role: string;
    text: string;
    rating?: number;
}

const testimonialData: TestimonialItem[] = [
  { name: "Alice M.", role: "CTO at TechFlow", text: "Absolutely game-changing. Our dev speed tripled.", rating: 5 },
  { name: "Bob K.", role: "Lead Engineer", text: "The best component library I have ever used. Period.", rating: 5 },
  { name: "Clara S.", role: "Product Designer", text: "Finally, components that match Figma designs perfectly!", rating: 5 },
  { name: "David L.", role: "Startup Founder", text: "Launched MVP in record time thanks to these components.", rating: 5 },
  { name: "Eve P.", role: "Frontend Dev", text: "Clean code, great TypeScript support. Love it.", rating: 5 },
  { name: "Frank T.", role: "UI Engineer", text: "The animations are so smooth. Users keep complimenting our UI.", rating: 5 },
  { name: "Grace H.", role: "Developer Advocate", text: "I recommend this to every dev I mentor. Outstanding.", rating: 5 },
  { name: "Hank R.", role: "Freelancer", text: "Cut my project time by 40%. These components are gold.", rating: 5 },
  { name: "Iris W.", role: "Tech Lead", text: "Our whole team adopted it in one sprint. Zero friction.", rating: 5 },
  ];

function TestimonialCard({ item }: { item: TestimonialItem }) {
    return (
          <div className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-3 shadow-sm">
                <div className="flex items-center gap-1">
                  {Array.from({ length: item.rating ?? 5 }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>span>
                    ))}
                </div>div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>p>
                <div>
                        <p className="font-semibold text-sm">{item.name}</p>p>
                        <p className="text-xs text-muted-foreground">{item.role}</p>p>
                </div>div>
          </div>div>
        );
}

function ScrollingColumn({
    items,
    direction = "up",
    speed = 30,
}: {
    items: TestimonialItem[];
    direction?: "up" | "down";
    speed?: number;
}) {
    const columnRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
          const el = columnRef.current;
          if (!el) return;
      
          let animationId: number;
          let position = direction === "down" ? -(el.scrollHeight / 2) : 0;
      
          const animate = () => {
                  if (!el) return;
                  position += direction === "up" ? -0.5 : 0.5;
                  const halfHeight = el.scrollHeight / 2;
                  if (direction === "up" && position <= -halfHeight) position = 0;
                  if (direction === "down" && position >= 0) position = -halfHeight;
                  el.style.transform = `translateY(${position}px)`;
                  animationId = requestAnimationFrame(animate);
          };
      
          animationId = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(animationId);
    }, [direction, speed]);
  
    const doubled = [...items, ...items];
  
    return (
          <div className="overflow-hidden h-[600px] relative">
                <div ref={columnRef} className="flex flex-col gap-4">
                  {doubled.map((item, i) => (
                      <TestimonialCard key={i} item={item} />
                    ))}
                </div>div>
          </div>div>
        );
}

export default function TestimonialsColumns() {
    const col1 = testimonialData.slice(0, 3);
    const col2 = testimonialData.slice(3, 6);
    const col3 = testimonialData.slice(6, 9);
  
    return (
          <section className="py-24 px-4 overflow-hidden">
                <div className="mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                                  <h2 className="text-4xl font-bold mb-4">What our users say</h2>h2>
                                  <p className="text-muted-foreground text-lg">
                                              Thousands of developers trust our components every day.
                                  </p>p>
                        </div>div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                  <ScrollingColumn items={col1} direction="up" />
                                  <ScrollingColumn items={col2} direction="down" />
                                  <ScrollingColumn items={col3} direction="up" />
                        </div>div>
                </div>div>
          </section>section>
        );
}
</div>
