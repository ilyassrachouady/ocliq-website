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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-slate-900">Ocliq</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm lg:text-base text-slate-600 hover:text-slate-900 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-sm lg:text-base text-slate-600 hover:text-slate-900 transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm lg:text-base text-slate-600 hover:text-slate-900 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm lg:text-base text-slate-600 hover:text-slate-900 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#00FFD1] text-slate-900 px-4 lg:px-6 py-2 rounded-full font-medium hover:bg-[#00FFD1]/90 transition-all duration-200 hover:scale-105 text-sm lg:text-base"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 p-1"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 bg-[#00FFD1] text-slate-900 rounded-lg font-medium mx-3 text-center"
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