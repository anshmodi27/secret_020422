
"use client";

import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: string;
  duration: string;
  opacity: number;
  color: string;
}

export function CelestialBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const colors = ['#ffffff', '#ffffff', '#ffffff', '#FFD700', '#E585BA']; // Mostly white, some gold and pink
    const generatedStars = Array.from({ length: 300 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 0.5}px`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 4 + 2}s`,
      opacity: Math.random() * 0.7 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow: star.size === '2.5px' ? `0 0 5px ${star.color}` : 'none',
          }}
        />
      ))}
      {/* Ambient glow layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20 opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,133,186,0.05)_0%,transparent_70%)] pointer-events-none" />
    </div>
  );
}
