
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
      {/* Central Blinking Heart with organic glow */}
      <div className="relative mb-12 flex items-center justify-center">
        {/* Layered glows to avoid square artifacts */}
        <div className="absolute w-32 h-32 bg-primary/20 rounded-full blur-[40px] animate-pulse" />
        <div className="absolute w-16 h-16 bg-primary/40 rounded-full blur-[20px] animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        <Heart 
          className="text-primary fill-primary w-24 h-24 animate-pulse relative z-10 drop-shadow-[0_0_15px_rgba(229,133,186,0.6)]" 
          strokeWidth={1}
        />
      </div>
      
      {/* Romantic Loading Message */}
      <div className="space-y-6 text-center px-6 relative z-10">
        <h2 className="font-pixel text-xs md:text-sm text-white text-glow-pink tracking-[0.5em] animate-fade-in uppercase">
          HOLD YOUR BREATH
        </h2>
        <p 
          className="font-cursive text-2xl md:text-3xl text-muted-foreground/80 italic animate-fade-in" 
          style={{ animationDelay: '1s' }}
        >
          Something special is coming...
        </p>
      </div>

      {/* Elegant Progress Line */}
      <div className="absolute bottom-24 w-64 h-[1px] bg-white/5 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-typing origin-left" 
          style={{ animationDuration: '3.5s' }}
        />
      </div>

      {/* Ambient background blur for depth */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
