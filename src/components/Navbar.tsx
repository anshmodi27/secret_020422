
"use client";

import React from 'react';
import { Heart } from 'lucide-react';
import { BackgroundMusic } from './BackgroundMusic';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Heart className="text-primary fill-primary w-5 h-5 animate-pulse" />
      </div>
      
      <div className="font-pixel text-[10px] md:text-sm font-bold tracking-tight text-white/90">
        4 YEARS OF US
      </div>
      
      <div className="flex items-center">
        <BackgroundMusic />
      </div>
    </nav>
  );
}
