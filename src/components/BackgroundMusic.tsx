"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Music, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Path to the local mp3 file in the /public folder
  const musicUrl = "/background-music.mp3"; 
  const fallbackUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  useEffect(() => {
    const startAudio = () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true);
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // Remove listeners once playing starts
            removeListeners();
          })
          .catch(e => {
            console.log("Autoplay blocked, waiting for more interaction.");
            // Keep listeners if play failed
            setHasInteracted(false);
          });
      }
    };

    const removeListeners = () => {
      window.removeEventListener('click', startAudio);
      window.removeEventListener('scroll', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('mousedown', startAudio);
    };

    // Add multiple interaction listeners for mobile and desktop
    window.addEventListener('click', startAudio);
    window.addEventListener('scroll', startAudio);
    window.addEventListener('touchstart', startAudio);
    window.addEventListener('mousedown', startAudio);

    // Initial attempt (might be blocked by browser)
    const timeout = setTimeout(startAudio, 1000);

    return () => {
      removeListeners();
      clearTimeout(timeout);
    };
  }, [hasInteracted]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.error("Playback failed", err));
      }
    }
  };

  return (
    <TooltipProvider>
      <div className="flex items-center">
        <audio 
          ref={audioRef} 
          src={musicUrl} 
          loop 
          onError={(e) => {
            // If the local file doesn't exist yet, use the fallback
            const target = e.target as HTMLAudioElement;
            if (target.src.includes(musicUrl)) {
              console.log("Local audio not found, using fallback.");
              target.src = fallbackUrl;
            }
          }}
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMusic}
              className="text-white hover:bg-white/10 transition-all rounded-full h-10 w-10 relative group"
            >
              {isPlaying ? (
                <>
                  <Music className="h-5 w-5 text-primary animate-pulse" />
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                </>
              ) : (
                <Music2 className="h-5 w-5 opacity-40 group-hover:opacity-100" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" className="font-pixel text-[8px] bg-background border-primary/20">
            {isPlaying ? "PAUSE MUSIC" : "PLAY MUSIC"}
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
