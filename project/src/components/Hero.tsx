import React from 'react';
import { Stars } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto text-center relative z-10">
        <Stars className="w-10 md:w-12 h-10 md:h-12 text-rose-400 mx-auto mb-4 md:mb-6" />
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-gray-800 mb-4 md:mb-6">
          My Dearest Natalia
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
          Every moment with you feels like a beautiful dream come true. 
          You're the melody in my heart, the sunshine in my days, 
          and the love of my life.
        </p>
      </div>
    </section>
  );
}