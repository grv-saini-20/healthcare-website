import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { Button } from './ui/button';

export const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <>
      {/* Sticky Call Button - Mobile */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 md:hidden">
          <a
            href="tel:+91-XXXXXXXXXX"
            className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-pulse"
          >
            <Phone className="w-7 h-7 text-white" />
          </a>
        </div>
      )}

      {/* Emergency Banner - Desktop */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-red-600 to-red-500 text-white shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg">24/7 Emergency Services</div>
                <div className="text-sm text-red-100">Call now for immediate medical assistance</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="tel:+91-XXXXXXXXXX"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Call: +91-XXXXXXXXXX
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
              <button
                onClick={() => setIsDismissed(true)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
