'use client';

import { Heart } from 'lucide-react';

export default function WhatsAppChat() {
  const handleWhatsAppClick = () => {
    // Numéro WhatsApp (à personnaliser)
    const phoneNumber = '+33123456789';
    const message = 'Bonjour, j\'ai une question sur TIME-2WIN !';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Chat WhatsApp"
      >
        <Heart size={24} />
      </button>
    </div>
  );
} 