"use client";

import React, { useState, useEffect } from 'react';
import { Lock, Sparkles, Loader2, Camera } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { generateWeddingPhoto } from '@/ai/flows/generate-wedding-photo';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function SecretSection() {
  const [code, setCode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleUnlock = async () => {
    if (code === "2227") {
      setIsUnlocked(true);
      setIsGenerating(true);
      try {
        const result = await generateWeddingPhoto();
        setImageUrl(result.imageUrl);
        // Delay reveal to trigger the polaroid animation
        setTimeout(() => setIsRevealed(true), 500);
      } catch (error) {
        console.error("Generation failed:", error);
      } finally {
        setIsGenerating(false);
      }
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
                className="bg-white/5 border-primary/30 text-center font-pixel text-lg tracking-[0.5em] focus:ring-primary"
                maxLength={4}
              />
              <Button 
                onClick={handleUnlock}
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-pixel text-[10px]"
              >
                GO
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            {isGenerating ? (
              <div className="flex flex-col items-center gap-4 py-20">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <p className="font-pixel text-[10px] text-primary animate-pulse">MANIFESTING...</p>
              </div>
            ) : imageUrl && (
              <div className="flex flex-col items-center">
                {/* Polaroid Frame */}
                <div className={cn(
                  "bg-white p-4 pb-16 shadow-2xl transition-all duration-[3000ms] ease-out relative group",
                  isRevealed ? "scale-100 opacity-100 rotate-2" : "scale-90 opacity-0 rotate-0"
                )}>
                  <div className="relative w-72 h-72 bg-black overflow-hidden">
                    {/* The Developing Image */}
                    <Image
                      src={imageUrl}
                      alt="Manifestation"
                      fill
                      className={cn(
                        "object-cover transition-all duration-[5000ms] ease-in-out",
                        isRevealed ? "opacity-100 grayscale-0 blur-0" : "opacity-0 grayscale blur-xl"
                      )}
                    />
                    {/* Flash Overlay */}
                    <div className={cn(
                      "absolute inset-0 bg-white transition-opacity duration-1000 pointer-events-none",
                      isRevealed ? "opacity-0" : "opacity-100"
                    )} />
                  </div>
                  
                  {/* Polaroid Note */}
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="font-cursive text-2xl text-slate-800 tracking-tight">
                      A wish for us...
                    </p>
                  </div>

                  <Sparkles className="absolute -top-4 -right-4 text-gold w-8 h-8 animate-pulse" />
                </div>

                <div className="mt-12 space-y-4">
                  <h3 className="font-pixel text-lg text-white text-glow-gold">MANIFESTATION</h3>
                  <p className="font-body text-muted-foreground italic max-w-xs mx-auto">
                    "Visualizing our forever, one heartbeat at a time."
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
    </section>
  );
}
