import Aurora from './ui/Aurora';
import { Sparkles, ArrowRight } from 'lucide-react';

const Herov2 = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#000000' }}>
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#0127c1", "#0127c1", "#0127c1"]}
          blend={1}
          amplitude={2}
          speed={0.9}
        />
      </div>

      {/* Floating Particles - Stars Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const duration = 15 + Math.random() * 20;
          const delay = Math.random() * 5;
          const size = 1 + Math.random() * 2;
          const moveX = (Math.random() - 0.5) * 100;
          const moveY = (Math.random() - 0.5) * 100;
          
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.2 + Math.random() * 0.5,
                boxShadow: '0 0 3px rgba(255, 255, 255, 0.6)',
                animation: `floatStar ${duration}s ease-in-out ${delay}s infinite alternate`,
                '--move-x': `${moveX}px`,
                '--move-y': `${moveY}px`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatStar {
          0% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% {
            opacity: 0.7;
          }
          100% { 
            transform: translate(var(--move-x), var(--move-y)) scale(1.2);
            opacity: 0.2;
          }
        }
      `}} />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto container-padding text-center px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">Premium Website Design & Optimization</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          We Don't Just Build Websites —{' '}
          <span className="bg-gradient-to-r from-[#00FFD1] to-blue-400 bg-clip-text text-transparent">
            We Engineer Growth Engines
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          We analyze, redesign, and optimize your website to generate more leads, clients, and profits for your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('leadform')}
            className="group px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-xl text-base flex items-center gap-2"
          >
            <span>Get Your Free Website Mockup</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-300"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Herov2;