import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'appointment' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Sarwal Hospital</h1>
              <p className="text-xs text-gray-600">Advanced Surgical Care</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-[15px] px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  {link.label}
                </button>
                {index < navLinks.length - 1 && (
                  <span className="text-gray-300">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-5"
              onClick={() => scrollToSection('appointment')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Emergency
            </Button>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 px-5"
              onClick={() => scrollToSection('appointment')}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 mt-2"
                onClick={() => scrollToSection('appointment')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Emergency
              </Button>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => scrollToSection('appointment')}
              >
                Book Appointment
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
