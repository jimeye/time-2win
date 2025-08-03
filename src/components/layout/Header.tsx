'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, User, Instagram, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-sm pt-4 sm:pt-6 md:pt-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Première ligne : Login à gauche, Logo centré, Panier à droite */}
        <div className="flex justify-between items-center h-20 py-2">
                           {/* Hamburger menu et User à gauche */}
                 <div className="flex items-center space-x-4 flex-1 justify-start">
                   <button 
                     onClick={() => setIsMenuOpen(true)}
                     className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors sm:hidden"
                   >
                     <Menu size={24} />
                   </button>
                   <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                     <User size={20} />
                     <span className="hidden sm:inline">Login / Register</span>
                   </button>
                 </div>
          
          {/* Logo centré */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center px-8 py-6 my-2">
              <Image
                src="/header-logo-site-time-2-win.webp"
                alt="TIME-2WIN Logo"
                width={312}
                height={78}
                className="h-[70px] w-auto sm:h-[103px]"
                priority
              />
            </Link>
          </div>

          {/* Panier et Instagram à droite */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <div className="relative flex items-center space-x-2 sm:space-x-2 space-x-1 text-sm text-gray-400">
              <ShoppingBag size={22} />
              <span className="text-xs sm:text-sm hidden sm:inline">0,00 €</span>
            </div>
            <a href="https://instagram.com/time2win?igsh=MThseTV4dzZwa3o3ZA==" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <span className="text-sm hidden sm:inline text-[#bfa468]">Follow us on</span>
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Deuxième ligne : Navigation sous le logo */}
        <div className="flex justify-center py-2">
          <nav className="flex space-x-8">
            <Link 
              href="#competition" 
              className="text-gray-300 hover:text-white px-2 py-1 text-sm font-medium transition-colors uppercase"
            >
              The Competition
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-gray-300 hover:text-white px-2 py-1 text-sm font-medium transition-colors uppercase"
            >
              How it Works
            </Link>
            <Link 
              href="#winners" 
              className="text-gray-300 hover:text-white px-2 py-1 text-sm font-medium transition-colors uppercase"
            >
              The Winners
            </Link>
          </nav>
                 </div>
       </div>

       {/* Overlay du menu hamburger */}
       {isMenuOpen && (
         <div className="fixed inset-0 z-50 sm:hidden">
           {/* Overlay blanc */}
           <div className="absolute inset-0 bg-white">
             {/* Bouton fermer */}
             <div className="flex justify-end p-4">
               <button 
                 onClick={() => setIsMenuOpen(false)}
                 className="text-black hover:text-gray-600 transition-colors"
               >
                 <X size={24} />
               </button>
             </div>
             
             {/* Menu items */}
             <div className="flex flex-col items-center justify-center h-full space-y-8">
               <Link 
                 href="#competition" 
                 onClick={() => setIsMenuOpen(false)}
                 className="text-2xl font-bold text-black hover:text-gray-600 transition-colors"
               >
                 The Competition
               </Link>
               <Link 
                 href="#how-it-works" 
                 onClick={() => setIsMenuOpen(false)}
                 className="text-2xl font-bold text-black hover:text-gray-600 transition-colors"
               >
                 How it Works
               </Link>
               <Link 
                 href="#winners" 
                 onClick={() => setIsMenuOpen(false)}
                 className="text-2xl font-bold text-black hover:text-gray-600 transition-colors"
               >
                 The Winners
               </Link>
               <Link 
                 href="/competition" 
                 onClick={() => setIsMenuOpen(false)}
                 className="bg-[#bfa468] text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-[#a8945a] transition-colors"
               >
                 ENTER COMPETITION
               </Link>
             </div>
           </div>
         </div>
       )}
     </header>
   );
 } 