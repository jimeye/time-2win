'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
    image: '/images/winners/winner_mikael.webp'
  },
  {
    id: 2,
    name: 'MATHIAS',
    product: 'Hermes Kelly Togo 32',
    date: 'Feb. 17th 2025',
    image: '/images/winners/winner_mathias-1.webp'
  },
  {
    id: 3,
    name: 'DAVID',
    product: 'Rolex Datejust 41 Grey',
    date: 'Jan. 1st 2025',
    image: '/images/winners/winner_D_atlan.webp'
  },
  {
    id: 4,
    name: 'SHIMON',
    product: 'Rolex Daytona Ceramic',
    date: 'Dec. 2nd 2024',
    image: '/images/winners/winner_S.sebban.webp'
  },
  {
    id: 5,
    name: 'DAVID',
    product: 'AP Royal Oak Desk Clock',
    date: 'Nov. 27th 2024',
    image: '/images/winners/winner_D.karpel.webp'
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

  // Défilement automatique tous les 8 secondes (mobile et desktop)
  useEffect(() => {
    const interval = setInterval(() => {
      nextWinner();
    }, 8000);

    return () => clearInterval(interval);
  }, [windowWidth]);

  const isMobile = windowWidth > 0 && windowWidth < 768;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de la section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-thin font-montserrat text-black mb-4">
            When dreams come true
          </h2>
        </div>

        {/* Carrousel Mobile */}
        {isMobile && (
          <>
            <div className="relative mb-12">
              <div className="text-center">
                <div className="bg-gray-900 rounded-full shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4 border-2 border-[#bfa468]">
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Image
                      src={winners[currentWinnerIndex].image}
                      alt={`Winner ${winners[currentWinnerIndex].name}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-black mb-2">
                  {winners[currentWinnerIndex].name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {winners[currentWinnerIndex].product}
                </p>
                <p className="text-sm text-gray-500">
                  {winners[currentWinnerIndex].date}
                </p>
              </div>

              {/* Boutons de navigation */}
              <button
                onClick={prevWinner}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 opacity-50"
                aria-label="Gagnant précédent"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextWinner}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 opacity-50"
                aria-label="Gagnant suivant"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>


            </div>

            {/* Bouton pour voir tous les gagnants */}
            <div className="text-center">
              <button
                onClick={() => setShowAllWinners(!showAllWinners)}
                className="bg-[#bfa468] text-white px-8 py-2 hover:bg-[#a8945a] transition-colors duration-300 font-medium"
              >
                {showAllWinners ? 'HIDE ALL WINNERS' : 'VIEW ALL WINNERS'}
              </button>
            </div>

            {/* Affichage de tous les gagnants */}
            {showAllWinners && (
              <div className="mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {winners.map((winner) => (
                    <div key={winner.id} className="text-center">
                      <div className="bg-gray-900 rounded-full shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4 border-2 border-[#bfa468]">
                        <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <Image
                            src={winner.image}
                            alt={`Winner ${winner.name}`}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-medium text-black mb-2">
                        {winner.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {winner.product}
                      </p>
                      <p className="text-sm text-gray-500">
                        {winner.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Carrousel Desktop */}
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
                      <div className="bg-gray-900 rounded-full shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4 border-2 border-[#bfa468]">
                        <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <Image
                            src={winner.image}
                            alt={`Winner ${winner.name}`}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-medium text-black mb-2">
                        {winner.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {winner.product}
                      </p>
                      <p className="text-sm text-gray-500">
                        {winner.date}
                      </p>
                    </div>
                  ));
                })()}
              </div>

              {/* Boutons de navigation */}
              <button
                onClick={prevWinner}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 opacity-50"
                aria-label="Gagnants précédents"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextWinner}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 opacity-50"
                aria-label="Gagnants suivants"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>


            </div>

            {/* Bouton pour voir tous les gagnants */}
            <div className="text-center">
              <button
                onClick={() => setShowAllWinners(!showAllWinners)}
                className="bg-[#bfa468] text-white px-8 py-2 hover:bg-[#a8945a] transition-colors duration-300 font-medium"
              >
                {showAllWinners ? 'HIDE ALL WINNERS' : 'VIEW ALL WINNERS'}
              </button>
            </div>

            {/* Affichage de tous les gagnants */}
            {showAllWinners && (
              <div className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {winners.map((winner) => (
                    <div key={winner.id} className="text-center">
                      <div className="bg-gray-900 rounded-full shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4 border-2 border-[#bfa468]">
                        <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <Image
                            src={winner.image}
                            alt={`Winner ${winner.name}`}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-medium text-black mb-2">
                        {winner.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {winner.product}
                      </p>
                      <p className="text-sm text-gray-500">
                        {winner.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
} 