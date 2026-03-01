
"use client";

import React, { useState, useEffect } from 'react';
import { generateLoveLetter } from '@/ai/flows/generate-love-letter';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react';

export function LoveLetter() {
  const [letter, setLetter] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showTyping, setShowTyping] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const response = await generateLoveLetter({
        partnerName: "My Dearest",
        keyMoments: ["Our first beach sunset", "The rainy night in the city", "The way we laugh at nothing"],
        customInstructions: "Make it deeply soulful, mention our 4 years together, and express hope for a lifetime."
      });
      setLetter(response.letterContent);
      setShowTyping(true);
    } catch (error) {
      console.error("Failed to generate love letter", error);
    } finally {
      setIsGenerating(false);
    }
  };

  // Pre-generate on mount or provide a fallback
  useEffect(() => {
    setLetter("My Dearest Love,\n\nFour years have passed, yet it feels like only yesterday that our journey began. Every moment with you is a gift, every breath a song. You are the echo in my silence and the warmth in my nights...");
    setShowTyping(true);
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-lg mx-auto">
        <div className="glass-card p-8 rounded-3xl glow-pink relative z-10">
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
          
          <h2 className="font-headline text-3xl mb-8 text-white text-center">Echoes of My Heart</h2>
          
          <div className="space-y-6">
            <div className={`font-cursive text-2xl leading-relaxed text-white/90 whitespace-pre-wrap ${showTyping ? 'animate-fade-in' : ''}`}>
              {letter}
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button 
              onClick={handleGenerate}
              disabled={isGenerating}
              variant="outline"
              className="rounded-full border-primary/50 text-primary hover:bg-primary/10"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Write Another
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
