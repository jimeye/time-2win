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

export default function EnterCompetitionSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Compte à rebours fixe : 7 jours, 7 heures, 40 minutes
      setTimeLeft({
        days: 7,
        hours: 7,
        minutes: 40,
        seconds: Math.floor((Date.now() / 1000) % 60) // Seconde qui change
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    return (
    <section id="competition" className="bg-white py-0 md:pt-8 min-h-screen md:min-h-0">
      <div className="w-full">
        <div className="max-w-6xl mx-auto">
          {/* Layout avec tout dans le même cadre */}
          <div className="max-w-2xl mx-auto">
            
                               {/* Section blanche avec bordure dorée - tout inclus */}
                   <div className="bg-white border-2 border-[#bfa468] pb-4 font-helvetica-neue">
              
                                   {/* Titre "The Competition" */}
                     <div className="text-center mb-8 hidden">
                       <h2 className="text-3xl font-bold font-montserrat text-black">
                         The Competition
                       </h2>
                     </div>

                                   {/* Image de la montre en haut */}
                     <div className="relative w-full mb-6">
                       <Image
                         src="/images/enter-the-competition/rolex_1675_GMT_master_vintage_1-2.webp"
                         alt="Vintage Rolex GMT Master Pepsi"
                         width={800}
                         height={500}
                         className="w-full h-auto max-h-[375px] sm:max-h-none object-cover"
                       />
                     </div>
              
                                   {/* Compteur centré et 990 TICKETS MAX centré */}
                     <div className="flex flex-col items-center mb-6 px-5 -mt-4 sm:mt-8 sm:flex-row sm:justify-between">
                       {/* Countdown Timer - 4 segments avec traits verticaux */}
                       <div className="flex items-center justify-between w-full mb-4 sm:mb-0 px-8 sm:px-0">
                         <div className="text-center">
                           <div className="text-base font-light text-black sm:text-3xl">07</div>
                           <div className="text-xs font-light text-black sm:text-sm">DAY</div>
                         </div>
                         <div className="w-0.5 h-12 bg-gray-400 mx-4"></div>
                         <div className="text-center">
                           <div className="text-base font-light text-black sm:text-3xl">07</div>
                           <div className="text-xs font-light text-black sm:text-sm">HR</div>
                         </div>
                         <div className="w-0.5 h-12 bg-gray-400 mx-4"></div>
                         <div className="text-center">
                           <div className="text-base font-light text-black sm:text-3xl">40</div>
                           <div className="text-xs font-light text-black sm:text-sm">MIN</div>
                         </div>
                         <div className="w-0.5 h-12 bg-gray-400 mx-4"></div>
                         <div className="text-center">
                           <div className="text-base font-light text-black sm:text-3xl">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                           <div className="text-xs font-light text-black sm:text-sm">SEC</div>
                         </div>
                       </div>
       
                       {/* 990 TICKETS MAX - centré */}
                       <div className="text-center">
                         <div className="text-lg font-bold text-black">990</div>
                         <div className="text-sm font-light text-black">TICKETS MAX</div>
                       </div>
                     </div>

                                   {/* Titre de la compétition */}
                     <div className="text-center mb-6 px-5">
                       <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-medium font-montserrat text-black">
                         Win the Vintage Rolex GMT Master Pepsi Comp
                       </h2>
                     </div>
       
                     {/* Prix et valeur - côte à côte */}
                     <div className="flex flex-col sm:flex-row justify-between items-center mb-8 px-5">
                       <div className="text-center mb-4 sm:mb-0">
                         <div className="text-xl font-bold text-black">20,00 €</div>
                         <div className="text-sm text-black">PER TICKET</div>
                       </div>
                       <div className="text-center">
                         <div className="text-xl font-bold text-black">£16000</div>
                         <div className="text-sm text-black">WATCH VALUE</div>
                       </div>
                     </div>

              {/* Bouton ENTER THE COMPETITION - beige doré */}
              <div className="text-center">
                <Link 
                  href="/competition"
                  className="bg-[#bfa468] text-white px-8 py-2 text-lg font-normal hover:bg-[#a8945a] transition-all duration-300 transform hover:scale-105 inline-block shadow-lg border-2 border-black"
                >
                  ENTER THE COMPETITION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 