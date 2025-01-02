import React from 'react';
import { Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="w-5 md:w-6 h-5 md:h-6 text-rose-500" />
          <span className="text-lg md:text-xl font-serif text-gray-800">Natalia</span>
        </div>
        <div className="flex space-x-4 md:space-x-6 text-sm md:text-base">
          <a href="#memories" className="text-gray-600 hover:text-rose-500 transition-colors">Memories</a>
          <a href="#letter" className="text-gray-600 hover:text-rose-500 transition-colors">Love Letter</a>
        </div>
      </nav>
    </header>
  );
}