"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const milestones = [
  {
    id: "something-cooking",
    title: "Where It All Began",
    date: "March 2022",
    description: "The time when something special quietly started between us.",
    image:
      PlaceHolderImages.find((img) => img.id === "something-cooking")
        ?.imageUrl || "https://picsum.photos/seed/first-trip/600/800",
  },
  {
    id: "first-meet",
    title: "The Proposal",
    date: "April 2022",
    description: "The moment I gathered courage and asked you to be mine.",
    image:
      PlaceHolderImages.find((img) => img.id === "first-meet")?.imageUrl ||
      "https://picsum.photos/seed/first-meet/600/800",
  },
  {
    id: "first-date",
    title: "Our First Date",
    date: "April 2022",
    description:
      "A movie, a little nervousness, and the beginning of many memories.",
    image:
      PlaceHolderImages.find((img) => img.id === "first-date")?.imageUrl ||
      "https://picsum.photos/seed/first-date/600/800",
  },
  {
    id: "first-bday",
    title: "Your First Birthday Together",
    date: "June 2022",
    description: "Celebrating your special day together for the first time.",
    image:
      PlaceHolderImages.find((img) => img.id === "first-bday")?.imageUrl ||
      "https://picsum.photos/seed/first-trip/600/800",
  },
  {
    id: "start-of-new",
    title: "Another Chapter Together",
    date: "Aug 2023",
    description:
      "From bachelor's to MBA, continuing our journey in the same direction.",
    image:
      PlaceHolderImages.find((img) => img.id === "start-of-new")?.imageUrl ||
      "https://picsum.photos/seed/anniversary/600/800",
  },
  {
    id: "first-trip",
    title: "Our First Trip – Kutch",
    date: "Feb 2024",
    description:
      "Exploring new places and creating unforgettable memories together.",
    image:
      PlaceHolderImages.find((img) => img.id === "first-trip")?.imageUrl ||
      "https://picsum.photos/seed/forever/600/800",
  },
  {
    id: "holi",
    title: "Colorful Holi Together",
    date: "March 2024",
    description:
      "A day full of colors, laughter, and beautiful moments with you.",
    image:
      PlaceHolderImages.find((img) => img.id === "holi")?.imageUrl ||
      "https://picsum.photos/seed/forever/600/800",
  },
  {
    id: "friends-trip",
    title: "Mount Abu Memories",
    date: "June 2024",
    description:
      "A trip with friends that gave us memories to cherish forever.",
    image:
      PlaceHolderImages.find((img) => img.id === "friends-trip")?.imageUrl ||
      "https://picsum.photos/seed/forever/600/800",
  },
  {
    id: "night-out",
    title: "A Special Night Out",
    date: "Dec 2024",
    description:
      "A peaceful night filled with conversations, laughter, and us.",
    image:
      PlaceHolderImages.find((img) => img.id === "night-out")?.imageUrl ||
      "https://picsum.photos/seed/forever/600/800",
  },
  {
    id: "last-clg-day",
    title: "Last Day of College",
    date: "May 2025",
    description: "The end of our college chapter but not the end of our story.",
    image:
      PlaceHolderImages.find((img) => img.id === "last-clg-day")?.imageUrl ||
      "https://picsum.photos/seed/forever/600/800",
  },
  {
    id: "fight-day",
    title: "Our Little Fights",
    date: "Dec 2025",
    description:
      "Even our arguments became memories that made our bond stronger.",
    image:
      PlaceHolderImages.find((img) => img.id === "fight-day")?.imageUrl ||
      "https://picsum.photos/seed/forever/600/800",
  },
  {
    id: "best-moment",
    title: "Convocation & A New Hope",
    date: "Feb 2026",
    description:
      "The day we graduated from our MBA and our parents finally met. Now we’re patiently waiting for the next chapter.",
    image:
      PlaceHolderImages.find((img) => img.id === "best-moment")?.imageUrl ||
      "https://picsum.photos/seed/forever/600/800",
  },
];

export function JourneyTimeline() {
  const isEvenTotal = milestones.length % 2 === 0;

  return (
    <section id="journey" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-md mx-auto">
        <h2 className="font-pixel text-lg md:text-xl text-center mb-12 text-white text-glow-gold tracking-tight">
          OUR JOURNEY
        </h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-12 relative">
          {/* Path SVG - Simple decorative lines */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
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
            const isLast = index === milestones.length - 1;
            const shouldCenter = isEvenTotal && isLast;
            const isEvenColumn = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={cn(
                  "flex flex-col items-center text-center animate-fade-in transition-all duration-700",
                  shouldCenter
                    ? "col-span-2 translate-y-4"
                    : isEvenColumn
                      ? "translate-y-0"
                      : "translate-y-8",
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Heart Container */}
                <div
                  className={cn(
                    "relative group transition-transform hover:scale-105",
                    shouldCenter
                      ? "w-40 h-40 md:w-48 md:h-48 mb-6"
                      : "w-32 h-32 md:w-40 md:h-40 mb-4",
                  )}
                >
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
                    <Heart
                      className={cn(
                        "text-primary fill-primary",
                        shouldCenter ? "w-4 h-4" : "w-3 h-3",
                      )}
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={cn(
                    "space-y-1",
                    shouldCenter ? "max-w-xs" : "max-w-[140px]",
                  )}
                >
                  <span className="text-accent text-[8px] font-pixel uppercase block opacity-80">
                    {item.date}
                  </span>
                  <h3
                    className={cn(
                      "font-pixel text-white leading-none pt-1 uppercase",
                      shouldCenter ? "text-sm" : "text-[10px]",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "font-body text-muted-foreground/80 italic line-clamp-3",
                      shouldCenter ? "text-sm mt-2" : "text-xs",
                    )}
                  >
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
