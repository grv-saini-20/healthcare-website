import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Clock, Heart } from 'lucide-react';
import { hospitalInfo } from '../data/mockData';

export const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sarwal Hospital</h3>
                <p className="text-sm text-gray-400">Advanced Care</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing comprehensive cancer care and advanced laparoscopic surgeries with compassion and expertise.
            </p>
            <div className="flex items-center space-x-2 text-blue-400">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Trusted by 5000+ patients</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About Doctor', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Facilities', id: 'facilities' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Book Appointment', id: 'appointment' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Cancer Surgery</li>
              <li>Breast Surgery</li>
              <li>Gall Bladder Surgery</li>
              <li>Hernia Surgery</li>
              <li>Piles Treatment</li>
              <li>Gastro Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">
                  {hospitalInfo.address}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <a href={`tel:${hospitalInfo.phone}`} className="text-gray-300 hover:text-blue-400 block text-sm">
                    {hospitalInfo.phone}
                  </a>
                  <a href={`tel:${hospitalInfo.emergencyPhone}`} className="text-red-400 hover:text-red-300 block text-sm mt-1">
                    Emergency: {hospitalInfo.emergencyPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <a href={`mailto:${hospitalInfo.email}`} className="text-gray-300 hover:text-blue-400 text-sm">
                  {hospitalInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">
                  Mon-Sat: 9 AM - 6 PM<br />
                  24/7 Emergency
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow Us:</span>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Sarwal Hospital. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed with <Heart className="w-3 h-3 inline text-red-500" /> for better healthcare
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
