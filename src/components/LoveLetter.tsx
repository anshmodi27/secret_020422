
"use client";

import React from 'react';

const STATIC_LETTER = `My Dearest Love,

Four years have passed, yet it feels like only yesterday that our journey began. Every moment with you is a gift, every breath a song. You are the echo in my silence and the warmth in my nights. 

We have shared coffee under the stars, walked through rainy city nights, and built a world out of nothing but our shared laughter. Thank you for choosing me every day, for growing with me, and for filling my life with a light I never knew I was missing.

Here's to us, to the 1,460 days we've cherished, and to the infinite days ahead. You are my forever.

With all my heart,
Always Yours`;

export function LoveLetter() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-lg mx-auto">
        <div className="glass-card p-10 rounded-3xl glow-pink relative z-10 border-primary/20">
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
          
          <h2 className="font-headline text-3xl mb-8 text-white text-center text-glow-pink">Echoes of My Heart</h2>
          
          <div className="space-y-6">
            <div className="font-cursive text-2xl leading-relaxed text-white/90 whitespace-pre-wrap animate-fade-in italic">
              {STATIC_LETTER}
            </div>
          </div>

          <div className="mt-12 flex justify-center opacity-30">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
