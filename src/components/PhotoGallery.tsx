
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Safely filter for existing placeholder images to avoid "undefined" errors
const galleryIds = ['gallery-1', 'gallery-2', 'gallery-3', 'hero-bg'];
const galleryImages = galleryIds
  .map(id => PlaceHolderImages.find(img => img.id === id))
  .filter((img): img is ImagePlaceholder => img !== undefined);

export function PhotoGallery() {
  if (galleryImages.length === 0) return null;

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-xl md:text-2xl text-center mb-12 text-white">MOMENTS IN TIME</h2>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem key={`${image.id}-${index}`} className="pl-4 basis-4/5 md:basis-1/2">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 glow-pink cursor-pointer transition-transform hover:scale-[1.02]">
                      <Image 
                        src={image.imageUrl} 
                        alt={image.description} 
                        fill 
                        className="object-cover"
                        data-ai-hint={image.imageHint || "romantic memory"}
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] p-0 overflow-hidden border-none bg-transparent shadow-none">
                    <div className="relative w-full h-[80vh]">
                      <Image 
                        src={image.imageUrl} 
                        alt={image.description} 
                        fill 
                        className="object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-[-50px]" />
            <CarouselNext className="right-[-50px]" />
          </div>
        </Carousel>
        
        <p className="text-center mt-8 text-muted-foreground italic font-body">
          Swipe through our favorite frames...
        </p>
      </div>
    </section>
  );
}
