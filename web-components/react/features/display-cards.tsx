// DisplayCards - Stacked interactive card display with hover effects
// Source: https://21st.dev/community/components/s/display-cards
// Author: Community Component
// Deps: tailwindcss, lucide-react
// Tags: cards, display, stack, hover, interactive
// Description: A visually striking stacked card layout where cards fan out
// on hover, great for showcasing features, portfolios, or content previews.

import { cn } from "@/lib/utils";

interface DisplayCardProps {
    className?: string;
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    date?: string;
    iconClassName?: string;
    titleClassName?: string;
}

function DisplayCard({
    className,
    icon,
    title = "Featured",
    description = "Discover amazing content",
    date = "Just now",
    iconClassName = "text-blue-300",
    titleClassName = "text-blue-500",
}: DisplayCardProps) {
    return (
          <div
                  className={cn(
                            "relative flex h-36 w-[26rem] select-none flex-col justify-between rounded-xl border border-border/40 bg-card/80 px-4 py-3 shadow-md backdrop-blur-sm transition-all duration-700 hover:shadow-lg",
                            className
                          )}
                >
                <div className="flex items-center gap-2">
                        <span className={cn("text-lg", iconClassName)}>{icon}</span>span>
                        <p className={cn("text-sm font-medium", titleClassName)}>{title}</p>p>
                </div>div>
                <p className="whitespace-nowrap text-lg font-medium text-foreground">{description}</p>p>
                <p className="text-sm text-muted-foreground">{date}</p>p>
          </div>div>
        );
}

interface DisplayCardsProps {
    cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
    const defaultCards: DisplayCardProps[] = [
      {
              icon: "✦",
              title: "Featured",
              description: "Beautifully crafted components",
              date: "Today",
              iconClassName: "text-yellow-400",
              titleClassName: "text-yellow-500",
              className: "hover:-translate-y-10 translate-x-0 hover:rotate-0 rotate-6",
      },
      {
              icon: "★",
              title: "Popular",
              description: "Most loved by developers",
              date: "This week",
              iconClassName: "text-pink-400",
              titleClassName: "text-pink-500",
              className: "hover:-translate-y-6 translate-x-4 hover:rotate-0 -rotate-3",
      },
      {
              icon: "▲",
              title: "New",
              description: "Fresh off the press",
              date: "Just now",
              iconClassName: "text-blue-400",
              titleClassName: "text-blue-500",
              className: "hover:-translate-y-2 translate-x-8",
      },
        ];
  
    const displayCards = cards ?? defaultCards;
  
    return (
          <div className="relative flex h-64 w-[26rem] items-center justify-center">
                <div className="relative">
                  {displayCards.map((cardProps, index) => (
                      <div
                                    key={index}
                                    className="absolute transition-all duration-500"
                                    style={{ zIndex: displayCards.length - index }}
                                  >
                                  <DisplayCard {...cardProps} />
                      </div>div>
                    ))}
                </div>div>
          </div>div>
        );
}
</div>
