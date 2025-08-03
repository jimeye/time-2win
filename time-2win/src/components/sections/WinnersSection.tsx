'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Winner {
  id: number;
  name: string;
  product: string;
  date: string;
  image: string;
}

const winners: Winner[] = [
  {
    id: 1,
    name: 'MIKAEL',
    product: 'Tudor BB Chronograph Pink',
    date: 'Apr. 3rd 2025',
    image: '/images/winners/winner_mikael.jpg'
  },
  {
    id: 2,
    name: 'MATHIAS',
    product: 'Hermes Kelly Togo 32',
    date: 'Feb. 17th 2025',
    image: '/images/winners/winner_mathias-1.jpg'
  },
  {
    id: 3,
    name: 'DAVID',
    product: 'Rolex Datejust 41 Grey',
    date: 'Jan. 1st 2025',
    image: '/images/winners/winner_D_atlan.jpg'
  },
  {
    id: 4,
    name: 'SHIMON',
    product: 'Rolex Daytona Ceramic',
    date: 'Dec. 2nd 2024',
    image: '/images/winners/winner_S.sebban.jpg'
  },
  {
    id: 5,
    name: 'DAVID',
    product: 'AP Royal Oak Desk Clock',
    date: 'Nov. 27th 2024',
    image: '/images/winners/winner_D.karpel.jpg'
  }
];

export default function WinnersSection() {
  const [showAllWinners, setShowAllWinners] = useState(false);
  const [currentWinnerIndex, setCurrentWinnerIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextWinner = () => {
    setCurrentWinnerIndex((prev) => {
      const next = prev + (windowWidth >= 768 ? 3 : 1);
      return next >= winners.length ? 0 : next;
    });
  };

  const prevWinner = () => {
    setCurrentWinnerIndex((prev) => {
      const prevIndex = prev - (windowWidth >= 768 ? 3 : 1);
      return prevIndex < 0 ? Math.max(0, winners.length - (windowWidth >= 768 ? 3 : 1)) : prevIndex;
    });
  };

  // Défilement automatique tous les 5 secondes (mobile et desktop)
  useEffect(() => {
    const interval = setInterval(() => {
      nextWinner();
    }, 5000);

    return () => clearInterval(interval);
  }, [windowWidth]);

  const isMobile = windowWidth > 0 && windowWidth < 768;

  return (
    <section id="winners" className="bg-white py-4">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-[32px] font-medium font-montserrat text-black leading-[32px] mb-2">
            When dreams come true
          </h2>
        </div>

        {/* Version Mobile - Carousel seulement */}
        {isMobile && (
          <>
            <div className="relative mb-12">
              <div className="text-center">
                <div className="bg-gray-900 rounded-full shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4">
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Image
                      src={winners[currentWinnerIndex].image}
                      alt={`Winner ${winners[currentWinnerIndex].name}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm font-light text-black mb-1">
                    Winner of
                  </div>
                  <h3 className="text-xl font-semibold font-montserrat text-black leading-[29px] mb-2">
                    {winners[currentWinnerIndex].product}
                  </h3>
                  <div className="text-sm font-light text-black mb-2">
                    {winners[currentWinnerIndex].date}
                  </div>
                  <div className="w-32 h-px bg-[#bfa468] mx-auto mb-2"></div>
                  <div className="text-2xl font-normal font-montserrat text-black leading-[29px]">
                    {winners[currentWinnerIndex].name}
                  </div>
                </div>
              </div>

              {/* Flèches minimalistes */}
              <button 
                onClick={prevWinner}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#bfa468] hover:text-[#a8945a] transition-colors z-10"
              >
                <ChevronLeft size={28} />
              </button>
              
              <button 
                onClick={nextWinner}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#bfa468] hover:text-[#a8945a] transition-colors z-10"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Bouton pour voir tous les gagnants sur mobile */}
            <div className="text-center mb-8">
              <button 
                onClick={() => setShowAllWinners(!showAllWinners)}
                className="bg-[#bfa468] text-white px-8 py-2 text-lg font-normal hover:bg-[#a8945a] transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
              >
                {showAllWinners ? 'HIDE WINNERS' : 'VIEW ALL WINNERS'}
              </button>
            </div>

            {/* Tous les gagnants (mobile seulement quand cliqué) */}
            {showAllWinners && (
              <div className="grid grid-cols-1 gap-8 mb-12">
                {winners.map((winner) => (
                  <div key={winner.id} className="text-center">
                    <div className="bg-gray-900 rounded-full shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4">
                      <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <Image
                          src={winner.image}
                          alt={`Winner ${winner.name}`}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm font-light text-black mb-1">
                        Winner of
                      </div>
                      <h3 className="text-xl font-semibold font-montserrat text-black leading-[29px] mb-2">
                        {winner.product}
                      </h3>
                      <div className="text-sm font-light text-black mb-2">
                        {winner.date}
                      </div>
                      <div className="w-32 h-px bg-[#bfa468] mx-auto mb-2"></div>
                      <div className="text-2xl font-normal font-montserrat text-black leading-[29px]">
                        {winner.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Version Desktop - Carousel avec 3 gagnants */}
        {windowWidth >= 768 && (
          <>
            <div className="relative mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Affichage de 3 gagnants avec boucle */}
                {(() => {
                  const displayWinners = [];
                  for (let i = 0; i < 3; i++) {
                    const index = (currentWinnerIndex + i) % winners.length;
                    displayWinners.push(winners[index]);
                  }
                  return displayWinners.map((winner, index) => (
                    <div key={`${winner.id}-${index}`} className="text-center">
                      <div className="bg-gray-900 rounded-full shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4">
                        <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <Image
                            src={winner.image}
                            alt={`Winner ${winner.name}`}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm font-light text-black mb-1">
                          Winner of
                        </div>
                        <h3 className="text-xl font-semibold font-montserrat text-black leading-[29px] mb-2">
                          {winner.product}
                        </h3>
                        <div className="text-sm font-light text-black mb-2">
                          {winner.date}
                        </div>
                        <div className="w-32 h-px bg-[#bfa468] mx-auto mb-2"></div>
                        <div className="text-2xl font-normal font-montserrat text-black leading-[29px]">
                          {winner.name}
                        </div>
                      </div>
                    </div>
                  ));
                })()}
              </div>

              {/* Flèches minimalistes */}
              <button 
                onClick={prevWinner}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#bfa468] hover:text-[#a8945a] transition-colors z-10"
              >
                <ChevronLeft size={28} />
              </button>
              
              <button 
                onClick={nextWinner}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#bfa468] hover:text-[#a8945a] transition-colors z-10"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Bouton pour voir tous les gagnants sur desktop */}
            <div className="text-center mb-8">
              <button 
                onClick={() => setShowAllWinners(!showAllWinners)}
                className="bg-[#bfa468] text-white px-8 py-2 text-lg font-normal hover:bg-[#a8945a] transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
              >
                {showAllWinners ? 'HIDE WINNERS' : 'VIEW ALL WINNERS'}
              </button>
            </div>

            {/* Tous les gagnants (desktop seulement quand cliqué) */}
            {showAllWinners && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
                {winners.map((winner) => (
                  <div key={winner.id} className="text-center">
                    <div className="bg-gray-900 rounded-full shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4">
                      <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <Image
                          src={winner.image}
                          alt={`Winner ${winner.name}`}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm font-light text-black mb-1">
                        Winner of
                      </div>
                      <h3 className="text-xl font-semibold font-montserrat text-black leading-[29px] mb-2">
                        {winner.product}
                      </h3>
                      <div className="text-sm font-light text-black mb-2">
                        {winner.date}
                      </div>
                      <div className="w-32 h-px bg-[#bfa468] mx-auto mb-2"></div>
                      <div className="text-2xl font-normal font-montserrat text-black leading-[29px]">
                        {winner.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
} 