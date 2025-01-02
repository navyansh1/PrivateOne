import React from "react"
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-8 px-6">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-rose-500 animate-pulse" />
          <span className="text-gray-600">Made with love for Natalia</span>
          <Heart className="w-5 h-5 text-rose-500 animate-pulse" />
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} - Forever Yours
        </p>
      </div>
    </footer>
  );
}