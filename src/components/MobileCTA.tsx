import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after user scrolls past hero section
      setIsVisible(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 sm:p-4 shadow-lg">
      <button
        onClick={() => scrollToSection('website-analysis')}
        className="group w-full bg-[#00FFD1] text-slate-900 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#00FFD1]/90 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
      >
        <span className="text-sm sm:text-base">Get Free Website Analysis</span>
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default MobileCTA;