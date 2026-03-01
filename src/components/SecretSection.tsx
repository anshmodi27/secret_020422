
"use client";

import React, { useState, useEffect } from 'react';
import { Lock, Sparkles, Camera } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function SecretSection() {
  const [code, setCode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  const manifestationImage = PlaceHolderImages.find(img => img.id === 'manifestation')?.imageUrl || 'https://picsum.photos/seed/wedding/800/800';

  const handleUnlock = () => {
    if (code === "2227") {
      setIsUnlocked(true);
      // Brief delay to trigger the transition effect after unlocking the UI
      setTimeout(() => {
        setIsRevealing(true);
      }, 100);
    }
  };

  return (
    <section id="secret" className="py-32 px-6 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-md w-full space-y-12 text-center z-10">
        {!isUnlocked ? (
          <div className="glass-card p-10 rounded-3xl glow-pink border-primary/20 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Lock className="text-primary w-8 h-8 animate-pulse" />
              </div>
            </div>
            <h2 className="font-pixel text-xl text-white mb-4">SECRET</h2>
            <p className="font-body text-muted-foreground italic mb-8">Enter the coordinates of our future...</p>
            
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="bg-white/5 border-primary/30 text-center font-pixel text-lg tracking-[0.5em] focus:ring-primary h-12"
                maxLength={4}
              />
              <Button 
                onClick={handleUnlock}
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-pixel text-[10px] h-12 px-6"
              >
                GO
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center animate-fade-in">
            {/* Polaroid Frame */}
            <div className={cn(
              "bg-white p-4 pb-16 shadow-2xl transition-all duration-[4000ms] ease-out relative",
              isRevealing ? "scale-100 opacity-100 rotate-2" : "scale-95 opacity-0 rotate-0"
            )}>
              <div className="relative w-72 h-72 bg-[#1a1a1a] overflow-hidden">
                {/* The "Developing" Image */}
                <Image
                  src={manifestationImage}
                  alt="Our Wish"
                  fill
                  className={cn(
                    "object-cover transition-all duration-[6000ms] ease-in-out",
                    isRevealing ? "opacity-100 blur-0 grayscale-0 brightness-100" : "opacity-0 blur-xl grayscale brightness-50"
                  )}
                  data-ai-hint="wedding manifestation"
                />
                
                {/* Flash/Haze Overlay */}
                <div className={cn(
                  "absolute inset-0 bg-white/20 transition-opacity duration-[3000ms]",
                  isRevealing ? "opacity-0" : "opacity-100"
                )} />
              </div>
              
              {/* Polaroid Handwritten Note */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="font-cursive text-3xl text-slate-800 tracking-tight">
                  A wish for us...
                </p>
              </div>

              <Sparkles className="absolute -top-4 -right-4 text-gold w-8 h-8 animate-pulse" />
            </div>

            <div className="mt-12 space-y-4">
              <h3 className="font-pixel text-lg text-white text-glow-gold uppercase tracking-widest">
                MANIFESTATION
              </h3>
              <p className="font-body text-muted-foreground italic max-w-xs mx-auto text-lg">
                "Visualizing our forever, one heartbeat at a time."
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
    </section>
  );
}
