'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Select your tickets',
    description: 'Choose how many tickets you want and you\'re on the way to winning the luxury timepiece',
    icon: '/images/select-you-tickets.webp'
  },
  {
    id: 2,
    title: 'Test your skills',
    description: 'Test your watch knowledge in our online game – built to sort the connoisseurs from the pretenders.',
    icon: '/images/test-your-skills.webp'
  },
  {
    id: 3,
    title: 'Buy your tickets',
    description: 'Pay securely to submit your entry. For a fair and transparent selection, we partner with Randomdraws, a trusted third-party to determine the winner.',
    icon: '/images/buy-your-tickets.webp'
  },
  {
    id: 4,
    title: 'Win the competition',
    description: 'And that\'s it! You could walk away with a new £25,000 watch – for as little as £25.00.',
    icon: '/images/win-the-competition.webp'
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#292b32] text-white py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-[63px] leading-[63px] text-[rgb(196,163,94)] mb-4">
            How it works
          </h2>
          <p className="font-montserrat font-semibold text-[28px] leading-[28px] text-[rgb(255,255,255)]">
            4 steps to bring your dream to life…
          </p>
        </div>

        {/* Grille des étapes - 4 colonnes horizontales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="p-6 h-full">
                {/* Icône dans un cercle blanc */}
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center aspect-square">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={50}
                    height={50}
                    className="w-13.5 h-13.5 object-contain"
                  />
                </div>
                
                {/* Titre en doré-beige */}
                <h3 className="text-xl font-bold mb-4 text-[#bfa468]">
                  {step.title}
                </h3>
                
                {/* Description en blanc */}
                <p className="text-white leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton d'entrée doré-beige */}
        <div className="text-center">
          <Link 
            href="/competition"
            className="bg-[#bfa468] text-white px-5 py-2 rounded-full text-base font-bold hover:bg-[#a8945a] transition-all duration-300 transform hover:scale-105 inline-block border-2 border-white"
          >
            ENTER THE COMPETITION
          </Link>
        </div>
      </div>
    </section>
  );
} 