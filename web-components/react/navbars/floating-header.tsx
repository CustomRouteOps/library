// Floating Header - Sticky navigation bar with glass design
// Source: https://21st.dev/community/components/efferd/floating-header/default
// Author: Efferd (@efferd)
// Deps: lucide-react
// Tags: Navigation Menus, Landing Page
// Description: Sleek sticky nav that stays visible while scrolling.
// Rounded glass-like design, mobile-friendly drawer menu, smooth hover effects.
// Perfect for landing pages, SaaS apps, or blogs.

import { FloatingHeader } from "@/components/ui/floating-header";
import { cn } from '@/lib/utils';

export default function DemoOne() {
    return (
          <div className="relative w-full px-4">
                <FloatingHeader />
                <div className="min-h-screen py-10" />
                <div
                          aria-hidden="true"
                          className={cn(
                                      'absolute inset-0 -z-10 size-full',
                                      'bg-[radial-gradient(color-mix(in_oklab,--theme(--color-foreground/.5)30%,transparent)_2px,transparent_2px)]',
                                      'bg-[size:12px_12px]',
                                    )}
                        />
          </div>div>
        );
}</div>
