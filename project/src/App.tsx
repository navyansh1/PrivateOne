import React from 'react';
import { Heart, Stars, Camera, Music, Coffee, MessageHeart } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import MemoryGallery from './components/MemoryGallery';
import LoveLetterSection from './components/LoveLetterSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />
      <Hero />
      <MemoryGallery />
      <LoveLetterSection />
      <Footer />
    </div>
  );
}

export default App;