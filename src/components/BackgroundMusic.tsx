
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Music, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // A romantic placeholder music track
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; 

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (audioRef.current) {
          audioRef.current.play().catch(e => console.log("Autoplay prevented:", e));
          setIsMuted(false);
        }
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop />
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        className="text-white hover:bg-white/10 transition-colors"
      >
        {isMuted ? <Music2 className="h-5 w-5 opacity-50" /> : <Music className="h-5 w-5 text-primary" />}
      </Button>
    </>
  );
}
