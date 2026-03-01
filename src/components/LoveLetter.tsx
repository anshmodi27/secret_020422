"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';

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
    }, 30); // Adjust speed here

    return () => clearInterval(typingInterval);
  }, [isTypingStarted]);

  return (
    <section id="love-letter" className="py-24 px-6 relative overflow-hidden bg-black/20">
      <div className="max-w-2xl mx-auto" ref={containerRef}>
        {/* Email/Letter Design */}
        <div className="bg-[#fdfcf0] text-gray-800 p-8 md:p-12 rounded-lg shadow-2xl border-t-[20px] border-primary relative">
          {/* Letter Stamp/Header */}
          <div className="flex justify-between items-start mb-8 border-b border-gray-200 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary font-pixel text-[10px]">
                <Mail size={16} />
                <span>TO: MY FOREVER</span>
              </div>
              <p className="text-xs text-gray-400 font-body">Subject: 4 Beautiful Years</p>
            </div>
            <div className="w-12 h-16 bg-primary/10 border-2 border-dashed border-primary/30 flex items-center justify-center rotate-3 rounded-sm">
              <span className="font-pixel text-[8px] text-primary/50">LOVE</span>
            </div>
          </div>

          {/* Letter Content */}
          <div className="font-cursive text-xl md:text-2xl leading-relaxed whitespace-pre-wrap min-h-[400px]">
            {displayedText}
            <span className="inline-block w-2 h-5 bg-primary ml-1 animate-cursor-blink" />
          </div>

          {/* Decorative lines to simulate paper */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] bg-[linear-gradient(transparent_95%,_#000_95%)] bg-[length:100%_2rem]" />
        </div>

        {/* Shadow/Envelope depth effect */}
        <div className="mt-4 flex justify-center opacity-20">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
      </div>
    </section>
  );
}