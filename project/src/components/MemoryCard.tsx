import React from 'react';
import { Memory } from '../types';

export function MemoryCard({ image, caption }: Memory) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-2">
      <img 
        src={image} 
        alt={caption}
        className="w-full h-64 md:h-80 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="absolute bottom-4 left-4 text-white text-base md:text-lg font-medium">
          {caption}
        </p>
      </div>
    </div>
  );
}