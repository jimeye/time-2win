'use client';

import { Heart } from 'lucide-react';

export default function WhatsApp() {
  const phoneNumber = '33612345678'; // Remplacez par votre vrai numéro
  const message = 'Bonjour ! Je suis intéressé par TIME-2WIN.'; // Message par défaut

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
        aria-label="Contacter via WhatsApp"
      >
        <Heart size={24} />
      </button>
    </div>
  );
} 