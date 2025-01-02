import React from 'react';
import { Camera } from 'lucide-react';
import { MemoryCard } from './MemoryCard';
import { memories } from '../data/memories';

export default function MemoryGallery() {
  return (
    <section id="memories" className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          <Camera className="w-6 md:w-8 h-6 md:h-8 text-rose-400" />
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Your Beautiful Memories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {memories.map((memory, index) => (
            <MemoryCard key={index} {...memory} />
          ))}
        </div>
      </div>
    </section>
  );
}