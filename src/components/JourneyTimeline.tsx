"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart } from 'lucide-react';

const milestones = [
  {
    id: 'first-meet',
    title: 'FIRST MEET',
    date: 'Summer 2020',
    description: 'The moment our worlds collided.',
    image: PlaceHolderImages.find(img => img.id === 'first-meet')?.imageUrl || 'https://picsum.photos/seed/first-meet/600/800',
  },
  {
    id: 'first-date',
    title: 'FIRST DATE',
    date: 'Autumn 2020',
    description: 'Coffee turned into dinner.',
    image: PlaceHolderImages.find(img => img.id === 'first-date')?.imageUrl || 'https://picsum.photos/seed/first-date/600/800',
  },
  {
    id: 'first-trip',
    title: 'FIRST TRIP',
    date: 'Winter 2021',
    description: 'Exploring new horizons together.',
    image: PlaceHolderImages.find(img => img.id === 'first-trip')?.imageUrl || 'https://picsum.photos/seed/first-trip/600/800',
  },
  {
    id: 'best-memories',
    title: 'MEMORIES',
    date: 'Years 1-3',
    description: 'The laughter and the growth.',
    image: PlaceHolderImages.find(img => img.id === 'best-memories')?.imageUrl || 'https://picsum.photos/seed/memories/600/800',
  },
  {
    id: 'today',
    title: 'TODAY',
    date: '4 Years',
    description: 'Always choosing you.',
    image: PlaceHolderImages.find(img => img.id === 'today')?.imageUrl || 'https://picsum.photos/seed/anniversary/600/800',
  },
];

export function JourneyTimeline() {
  return (
    <section id="journey" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-md mx-auto">
        <h2 className="font-pixel text-lg md:text-xl text-center mb-12 text-white text-glow-gold tracking-tight">
          OUR JOURNEY
        </h2>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 relative">
          {/* Path SVG - Simple decorative lines */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                d="M 25,10 C 75,10 75,30 75,30 S 25,30 25,50 S 75,50 75,70 S 25,70 25,90" 
                fill="none" 
                stroke="url(#grad)" 
                strokeWidth="0.5" 
                strokeDasharray="2,2"
              />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E585BA" />
                  <stop offset="100%" stopColor="#CC4DBD" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.id} 
                className={`flex flex-col items-center text-center animate-fade-in ${
                  isEven ? 'translate-y-0' : 'translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Heart Container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 group">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-colors" />
                  <div className="relative w-full h-full mask-heart bg-white overflow-hidden glow-pink border-2 border-primary/30">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint="romantic photo"
                    />
                  </div>
                  {/* Small Floating Heart Decor */}
                  <div className="absolute -bottom-1 -right-1 bg-background p-1 rounded-full border border-primary/50 shadow-lg">
                    <Heart className="w-3 h-3 text-primary fill-primary" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-1 max-w-[140px]">
                  <span className="text-accent text-[8px] font-pixel uppercase block opacity-80">
                    {item.date}
                  </span>
                  <h3 className="font-pixel text-[10px] text-white leading-none pt-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground/80 italic line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}