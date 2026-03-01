
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToJourney = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="z-10 animate-fade-in space-y-6">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-white text-glow-pink">
          4 Years, <br />
          <span className="text-primary">Infinite Love ❤️</span>
        </h1>
        <p className="font-body text-xl md:text-2xl italic text-muted-foreground max-w-md mx-auto">
          "From the first hello to forever…"
        </p>
        
        <div className="pt-8">
          <Button 
            onClick={scrollToJourney}
            className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg glow-pink transition-all transform hover:scale-105"
          >
            Our Journey
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50">
        <ChevronDown size={32} />
      </div>

      {/* Subtle floating elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
    </section>
  );
}
