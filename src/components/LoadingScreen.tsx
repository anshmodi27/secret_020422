
"use client";

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Show loading for a short duration to create anticipation
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      // Wait for the fade-out animation to finish before removing from DOM
      setTimeout(() => setIsVisible(false), 1000);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-all duration-1000 ease-in-out",
        isFadingOut ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"
      )}
    >
      {/* Central Blinking Heart */}
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <Heart 
          className="text-primary fill-primary w-20 h-20 animate-pulse relative z-10 glow-pink" 
          strokeWidth={1.5}
        />
      </div>
      
      {/* Romantic Loading Message */}
      <div className="space-y-6 text-center px-6">
        <h2 className="font-pixel text-[10px] md:text-sm text-white text-glow-pink tracking-[0.4em] animate-pulse">
          HOLD YOUR BREATH
        </h2>
        <p className="font-body text-muted-foreground italic text-base md:text-lg animate-fade-in" style={{ animationDelay: '0.8s' }}>
          "Something special is coming..."
        </p>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-20 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent animate-typing origin-left" 
          style={{ animationDuration: '3s' }}
        />
      </div>

      {/* Ambient background blur */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
    </div>
  );
}
