import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ShimmerButton from './ShimmerButton';

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
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden container-padding header-offset">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900"></div>

      {/* Modern Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00FFD1]/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-[#00FFD1] rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#00FFD1] rounded-full animate-float animation-delay-3000"></div>
        
        {/* Gradient beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#00FFD1]/20 to-transparent animate-beam"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-beam animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center" ref={heroRef}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-gradient-glass px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 text-[#00FFD1]" />
            <span className="text-xs sm:text-sm font-medium text-white/80">Premium Website Design & Optimization</span>
          </div>
          
          <h1 className="heading-xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            We Don't Just Build Websites —{' '}
            <span className="bg-gradient-to-r from-[#00FFD1] to-blue-600 bg-clip-text text-transparent">
              We Engineer Growth Engines
            </span>
          </h1>

          <p className="text-responsive text-white/70 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            We analyze, redesign, and optimize your website to generate more leads, clients, and profits for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-12 sm:mb-14 lg:mb-16">
            <ShimmerButton
              onClick={() => scrollToSection('website-analysis')}
              className="w-full sm:w-auto btn-primary text-sm sm:text-base flex items-center space-x-2"
            >
              <span>Get Your Free Website Mockup</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </ShimmerButton>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="w-full sm:w-auto btn-secondary text-sm sm:text-base"
            >
              View Our Work
            </button>
          </div>
          
          {/* Trust badges */}
        </div>
      </div>
    </div>
  );
};

export default Hero;