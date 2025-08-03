'use client';

import Image from 'next/image';

export default function CommunitySection() {
  return (
    <section className="bg-white py-1 sm:hidden">
      <div className="w-full">
        <div className="flex justify-center items-center space-x-2">
          <span className="text-xs font-normal font-montserrat text-black">Join the community on</span>
                           <a 
                   href="https://instagram.com/time2win?igsh=MThseTV4dzZwa3o3ZA==" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center space-x-1 text-black hover:text-gray-600 transition-colors"
                 >
                   <Image
                     src="/images/instagram-logo-illustration-958x575.webp"
                     alt="Instagram"
                     width={80}
                     height={20}
                     className="h-7 w-auto"
                   />
                 </a>
        </div>
      </div>
    </section>
  );
} 