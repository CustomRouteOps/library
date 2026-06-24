// Music Player Card - Interactive music player with glassmorphism effect
// Source: https://21st.dev/community/components/ravikatiyar/music-player-card/default
// Author: Ravi Katiyar (@ravikatiyar)
// Deps: lucide-react
// Tags: Card
// Description: Visually polished interactive music player card with glassmorphism,
// animated progress bar, and theme-adaptive styling.

import * as React from "react";
import { MusicPlayerCard } from "@/components/ui/music-player-card";

const DURATION_IN_SECONDS = 185; // 3 minutes 5 seconds

export default function MusicPlayerDemo() {
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
    const [isLiked, setIsLiked] = React.useState<boolean>(false);
    const [currentProgress, setCurrentProgress] = React.useState<number>(52);

  React.useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
                interval = setInterval(() => {
                          setCurrentProgress((prev) => {
                                      if (prev >= DURATION_IN_SECONDS) {
                                                    setIsPlaying(false);
                                                    return 0;
                                      }
                                      return prev + 1;
                          });
                }, 1000);
        }
        return () => clearInterval(interval);
  }, [isPlaying]);

  return (
        <div className="flex h-screen w-full items-center justify-center bg-background p-4">
              <MusicPlayerCard
                        artistName="Terence Howard"
                        artistHandle="@terenceh"
                        avatarSrc="https://i.pravatar.cc/150?u=terence"
                        albumArtSrc="https://plus.unsplash.com/premium_photo-1705351823638-54bcc44babe3?w=900"
                        songDuration={DURATION_IN_SECONDS}
                        currentProgress={currentProgress}
                        isPlaying={isPlaying}
                        isLiked={isLiked}
                        onPlayPauseClick={() => setIsPlaying((prev) => !prev)}
                        onLikeClick={() => setIsLiked((prev) => !prev)}
                        onNextClick={() => setCurrentProgress(0)}
                        onPrevClick={() => setCurrentProgress(0)}
                        onShareClick={() => console.log("Share clicked")}
                      />
        </div>div>
      );
}</div>
