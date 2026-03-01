
"use client";

import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-24 px-6 text-center relative overflow-hidden bg-gradient-to-t from-black/40 to-transparent">
      <div className="space-y-6">
        <div className="flex justify-center items-center gap-2">
          <div className="w-12 h-px bg-primary/30" />
          <Heart className="text-primary fill-primary w-6 h-6 animate-pulse shadow-pink-500" />
          <div className="w-12 h-px bg-primary/30" />
        </div>
        
        <p className="font-headline text-2xl text-white/80 max-w-xs mx-auto italic">
          "Still choosing you. Every single day."
        </p>
        
        <div className="pt-12 space-y-2">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Forever & Always
          </p>
          <p className="text-[10px] text-muted-foreground/30">
            Echoes of Us &bull; 2022 - Forever
          </p>
        </div>
      </div>
    </footer>
  );
}
