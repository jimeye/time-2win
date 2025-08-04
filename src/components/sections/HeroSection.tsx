'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative text-white overflow-hidden h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] hidden sm:block">
      {/* Image de fond du hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-slider-time-2-win.webp"
          alt="TIME-2WIN Hero Background"
          fill
          className="object-cover object-center sm:object-top md:object-center lg:object-center"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />
      </div>
      
      {/* Contenu principal centré verticalement */}
      <div className="relative z-10 flex flex-col justify-start items-center h-full px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Titre principal */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-thin font-montserrat text-white mb-2 sm:mb-4 leading-tight">
            100% OF WINNERS TRIED THEIR SKILLS!
          </h1>
          
          {/* Bouton d'action pour desktop */}
          <div className="hidden sm:block mt-56">
            <Link 
              href="#competition"
              className="inline-flex items-center px-8 py-2 bg-[#bfa468] text-white text-lg font-normal hover:bg-[#a8945a] transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-black"
            >
              ENTER THE COMPETITION
            </Link>
          </div>
          
          {/* Bouton d'action pour mobile */}
          <div className="sm:hidden">
            <Link 
              href="#competition"
              className="inline-flex items-center px-4 py-2 bg-[#bfa468] text-white text-sm font-medium hover:bg-[#a8945a] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ENTER THE COMPETITION
            </Link>
          </div>
        </div>
      </div>
      
      {/* Texte en bas de l'image */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/80 text-white py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-[21px] font-thin font-montserrat text-white leading-tight max-w-4xl mx-auto md:whitespace-nowrap flex justify-center items-center">
          Exclusive, Collectible and Valuable luxury pieces - Expertized and Available to the competition winner
        </p>
      </div>
    </section>
  );
} 