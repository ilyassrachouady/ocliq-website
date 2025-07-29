import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden header-offset">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00FFD1]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding text-center" ref={heroRef}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-slate-900/5 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 text-[#00FFD1]" />
            <span className="text-xs sm:text-sm font-medium text-slate-700">Premium Website Design & Optimization</span>
          </div>
          
          <h1 className="heading-xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            We Don't Just Build Websites —{' '}
            <span className="bg-gradient-to-r from-[#00FFD1] to-blue-600 bg-clip-text text-transparent">
              We Engineer Growth Engines
            </span>
          </h1>

          <p className="text-responsive text-slate-600 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            We analyze, redesign, and optimize your website to generate more leads, clients, and profits for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-12 sm:mb-14 lg:mb-16">
            <button
              onClick={() => scrollToSection('website-analysis')}
              className="group bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 hover:scale-105 flex items-center space-x-2 w-full sm:w-auto"
            >
              <span className="text-sm sm:text-base">Get Your Free Website Analysis</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
            >
              View Our Work
            </button>
          </div>
          
          {/* Trust badges */}
          <div className="opacity-60">
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider font-medium">Trusted by companies like</p>
            <div className="flex items-center justify-center space-x-6 sm:space-x-8 flex-wrap gap-y-4">
              <a
                href="https://preptiq.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-bold text-slate-400 hover:text-slate-600 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Preptiq
              </a>
              <a
                href="https://pursueu.enrolla.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-bold text-slate-400 hover:text-slate-600 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                PursueU
              </a>
              <a
                href="https://propbolt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-bold text-slate-400 hover:text-slate-600 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                PropBolt
              </a>
              <a
                href="https://lemayconsulting.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-bold text-slate-400 hover:text-slate-600 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                LemayConsulting
              </a>
              <a
                href="https://kratomonline.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-bold text-slate-400 hover:text-slate-600 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                KratomOnline.ca
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;