import React from 'react';
import { MessageCircleHeart } from 'lucide-react';

export default function LoveLetterSection() {
  return (
    <section id="letter" className="py-12 md:py-20 px-4 md:px-6 bg-rose-50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          <MessageCircleHeart className="w-6 md:w-8 h-6 md:h-8 text-rose-400" />
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800">My Love Letter to You</h2>
        </div>
        <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-lg">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Dearest Natalia,
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            From the moment you entered my life, everything became brighter, more meaningful, 
            and filled with joy. Your smile lights up my darkest days, and your love gives me 
            strength I never knew I had.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Every little moment we share becomes a precious memory I cherish. Whether we're 
            sharing coffee on lazy Sunday mornings, taking long walks under the stars, or 
            simply sitting in comfortable silence, being with you makes everything perfect.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            You're not just my girlfriend; you're my best friend, my confidante, and my 
            inspiration. I love the way your eyes sparkle when you laugh, how passionate 
            you become when talking about things you love, and how you make everyone around 
            you feel special.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            With all my love,<br />
            Your Forever Person
          </p>
        </div>
      </div>
    </section>
  );
}