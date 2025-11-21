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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navClasses = `
    max-w-7xl mx-auto transition-all duration-300 rounded-full
    ${isScrolled ? 'bg-gradient-glass shadow-lg' : 'bg-white/10 shadow-md'}
  `;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <nav className={navClasses}>
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18 px-6 sm:px-8">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold nav-text">Ocliq</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('services')} className="nav-text text-sm lg:text-base">Services</button>
            <button onClick={() => scrollToSection('process')} className="nav-text text-sm lg:text-base">Process</button>
            <button onClick={() => scrollToSection('portfolio')} className="nav-text text-sm lg:text-base">Portfolio</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-text text-sm lg:text-base">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary px-4 lg:px-6 py-2 text-sm lg:text-base">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 nav-text"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 rounded-3xl overflow-hidden bg-gradient-glass shadow-lg md:hidden">
            <div className="px-4 py-3 space-y-1">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2.5 nav-text hover:bg-white/10 rounded-xl transition-all">Services</button>
              <button onClick={() => scrollToSection('process')} className="block w-full text-left px-4 py-2.5 nav-text hover:bg-white/10 rounded-xl transition-all">Process</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-4 py-2.5 nav-text hover:bg-white/10 rounded-xl transition-all">Portfolio</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2.5 nav-text hover:bg-white/10 rounded-xl transition-all">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-center mt-2 px-4 py-2.5 btn-secondary transition-all">
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