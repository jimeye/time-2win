'use client';

import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company */}
          <div>
            <h3 className="font-montserrat font-semibold text-[16px] leading-[22px] text-[rgb(0,0,0)] mb-4">COMPANY</h3>
            <ul className="space-y-1">
              <li>
                              <Link href="/about" className="font-roboto font-light text-[16px] leading-[26px] text-black hover:text-gray-600 transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-roboto font-light text-[16px] leading-[26px] text-black hover:text-gray-600 transition-colors">
                Contact
              </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-montserrat font-semibold text-[16px] leading-[22px] text-[rgb(0,0,0)] mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-1">
              <li>
                              <Link href="/faq" className="font-roboto font-light text-[16px] leading-[26px] text-black hover:text-gray-600 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/authenticity" className="font-roboto font-light text-[16px] leading-[26px] text-black hover:text-gray-600 transition-colors">
                Authenticity & Guarantee
              </Link>
            </li>
            <li>
              <Link href="/payments" className="font-roboto font-light text-[16px] leading-[26px] text-black hover:text-gray-600 transition-colors">
                Payments
              </Link>
            </li>
            <li>
              <Link href="/return-policy" className="font-roboto font-light text-[16px] leading-[26px] text-black hover:text-gray-600 transition-colors">
                Return Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="font-roboto font-light text-[16px] leading-[26px] text-black hover:text-gray-600 transition-colors">
                Terms & Conditions
              </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-montserrat font-semibold text-[16px] leading-[22px] text-[rgb(0,0,0)] mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#bfa468] text-white p-2 rounded-full hover:bg-[#a8945a] transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="bg-[#bfa468] text-white p-2 rounded-full hover:bg-[#a8945a] transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-montserrat font-semibold text-[16px] leading-[22px] text-[rgb(0,0,0)] mb-4">NEWSLETTER</h3>
            <p className="font-roboto font-light text-[16px] leading-[26px] text-black mb-4">
              Sign up to be the first to discover new exclusive pieces, enjoy the benefits of private sales and special events.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-3 py-2 bg-transparent border-b border-black text-black placeholder-gray-500 focus:outline-none focus:border-gray-600"
              />
              <button
                type="submit"
                className="w-full bg-black text-white px-4 py-2 rounded font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                SUBSCRIBE →
              </button>
            </form>
            <p className="font-roboto font-light text-[16px] leading-[26px] text-black mt-3">
              By signing up you agree with our <span className="text-[#bfa468]">Terms & Conditions</span> and <span className="text-[#bfa468]">Privacy Policy.</span>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-4 pt-4 text-center text-black text-sm">
          <p className="text-black">Time2Win Ltd is registered at 7 Bell Yard London WC2A 2JR UK. © 2025 time-2win.com</p>
          <p className="mt-2 text-black">Website design by <a href="tel:+330608251223" className="!text-black no-underline hover:text-gray-600 font-roboto font-light text-[16px] leading-[26px]" style={{color: 'black !important'}}>JOSEPH-STUDIO.COM</a></p>
          <p className="mt-1 text-black">Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
} 