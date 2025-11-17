import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <nav 
        className="max-w-7xl mx-auto transition-all duration-300 rounded-full"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18 px-6 sm:px-8">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-white">Ocliq</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm lg:text-base text-white/90 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-sm lg:text-base text-white/90 hover:text-white transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm lg:text-base text-white/90 hover:text-white transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm lg:text-base text-white/90 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-slate-900 px-4 lg:px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-all duration-200 hover:scale-105 text-sm lg:text-base"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-1"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div 
            className="absolute top-full left-4 right-4 mt-2 rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            <div className="px-4 py-3 space-y-1">
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-xl w-full text-left transition-all"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-xl w-full text-left transition-all"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-xl w-full text-left transition-all"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-xl w-full text-left transition-all"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-4 py-2.5 bg-white text-slate-900 rounded-xl font-medium text-center mt-2 hover:bg-white/90 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;