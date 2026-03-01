
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const milestones = [
  {
    id: 'first-meet',
    title: 'First Meet',
    date: 'Summer 2020',
    description: 'The moment our worlds collided. Everything changed with just one look.',
    image: PlaceHolderImages.find(img => img.id === 'first-meet')?.imageUrl || 'https://picsum.photos/seed/first-meet/600/800',
  },
  {
    id: 'first-date',
    title: 'First Date',
    date: 'Autumn 2020',
    description: 'Coffee turned into dinner, which turned into hours of endless conversation under the stars.',
    image: PlaceHolderImages.find(img => img.id === 'first-date')?.imageUrl || 'https://picsum.photos/seed/first-date/600/800',
  },
  {
    id: 'first-trip',
    title: 'First Trip',
    date: 'Winter 2021',
    description: 'Exploring new horizons together. That weekend taught us that home is where the other is.',
    image: PlaceHolderImages.find(img => img.id === 'first-trip')?.imageUrl || 'https://picsum.photos/seed/first-trip/600/800',
  },
  {
    id: 'best-memories',
    title: 'Our Best Memories',
    date: 'Through the Years',
    description: 'The laughter, the growth, the quiet moments that defined who we are as one.',
    image: PlaceHolderImages.find(img => img.id === 'best-memories')?.imageUrl || 'https://picsum.photos/seed/memories/600/800',
  },
  {
    id: 'today',
    title: 'Today – 4 Years',
    date: 'Celebrating Us',
    description: '1,460 days of choosing you. And I would choose you a million times more.',
    image: PlaceHolderImages.find(img => img.id === 'today')?.imageUrl || 'https://picsum.photos/seed/anniversary/600/800',
  },
];

export function JourneyTimeline() {
  return (
    <section id="journey" className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-headline text-4xl text-center mb-16 text-white text-glow-gold">Our Journey</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50" />
          
          <div className="space-y-16">
            {milestones.map((item, index) => (
              <div 
                key={item.id} 
                className="relative pl-12 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2.5 top-0 w-3.5 h-3.5 bg-primary rounded-full glow-pink border-2 border-background z-10" />
                
                <div className="glass-card p-6 rounded-2xl glow-gold overflow-hidden">
                  <div className="aspect-[4/5] relative rounded-xl overflow-hidden mb-6">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover"
                      data-ai-hint="romantic couple"
                    />
                  </div>
                  <span className="text-accent text-sm font-bold uppercase tracking-widest">{item.date}</span>
                  <h3 className="font-headline text-2xl text-white mt-1 mb-3">{item.title}</h3>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed italic">
                    "{item.description}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
