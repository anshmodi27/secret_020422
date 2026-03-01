"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const FULL_LETTER_TEXT = `My Dearest Love,

Four years have passed, yet it feels like only yesterday that our journey began. Every moment with you is a gift, every breath a song. You are the echo in my silence and the warmth in my nights. 

We have shared coffee under the stars, walked through rainy city nights, and built a world out of nothing but our shared laughter. Thank you for choosing me every day, for growing with me, and for filling my life with a light I never knew I was missing.

Here's to us, to the 1,460 days we've cherished, and to the infinite days ahead. You are my forever.

With all my heart,
Always Yours`;

export function LoveLetter() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingStarted, setIsTypingStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsTypingStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isTypingStarted) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < FULL_LETTER_TEXT.length) {
        setDisplayedText(FULL_LETTER_TEXT.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [isTypingStarted]);

  return (
    <section id="love-letter" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-2xl mx-auto" ref={containerRef}>
        {/* Transparent Glass Letter Design */}
        <div className="glass-card p-8 md:p-12 rounded-3xl shadow-2xl border-t-4 border-primary/50 relative glow-pink overflow-hidden group">
          
          {/* Decorative Corner Heart */}
          <div className="absolute -top-4 -right-4 bg-primary/20 p-8 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
          
          {/* Letter Header */}
          <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-6 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary font-pixel text-[10px] tracking-widest">
                <Mail size={16} className="animate-pulse" />
                <span>TO: MY FOREVER</span>
              </div>
              <p className="text-xs text-muted-foreground font-body italic">Subject: 4 Beautiful Years Together</p>
            </div>
            <div className="w-12 h-16 bg-white/5 border border-dashed border-primary/40 flex items-center justify-center rotate-6 rounded-lg backdrop-blur-sm">
              <Heart className="text-primary/40 fill-primary/20 w-6 h-6" />
            </div>
          </div>

          {/* Letter Content */}
          <div className="font-cursive text-xl md:text-2xl leading-relaxed whitespace-pre-wrap min-h-[400px] text-white/90 relative z-10 text-glow-pink">
            {displayedText}
            <span className="inline-block w-2 h-6 bg-primary ml-1 animate-cursor-blink shadow-[0_0_10px_rgba(229,133,186,1)]" />
          </div>

          {/* Subtle decorative lines for a refined "stationery" look */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05] bg-[linear-gradient(transparent_97%,_#fff_97%)] bg-[length:100%_2.5rem]" />
          
          {/* Bottom Gradient Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Ambient reflection below the card */}
        <div className="mt-8 flex justify-center opacity-30 animate-pulse">
          <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
