import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import ParticlesLite from './ui/ParticlesLite';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="pricing" className="section-padding relative overflow-hidden" style={{ background: '#000000' }}>
      {/* Particles Background */}
      <div className="absolute inset-0">
        <ParticlesLite
          particleColor={'#ffffff'}
          particleCount={100}
          speed={2}
          particleSize={2}
          opacity={0.6}
          moveParticlesOnHover={true}
          alphaParticles={false}
        />
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0127c1]/3 to-transparent"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#0033ff]/8 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3,
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.5)',
              animation: `floatParticle ${12 + Math.random() * 18}s ease-in-out ${Math.random() * 5}s infinite alternate`,
              '--move-x': `${(Math.random() - 0.5) * 100}px`,
              '--move-y': `${(Math.random() - 0.5) * 100}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
          }
          @keyframes floatParticle {
            0% { transform: translate(0, 0); opacity: 0.2; }
            50% { opacity: 0.5; }
            100% { transform: translate(var(--move-x), var(--move-y)); opacity: 0.2; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 5s ease-in-out infinite;
          }
        `
      }} />

      <div className="max-w-6xl mx-auto container-padding relative z-10">

        {/* Main CTA Section */}
        <div className={`rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden transition-all duration-700 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transitionDelay: '0.2s'
          }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0033ff]/5 via-[#0127c1]/5 to-transparent"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#0033ff]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0127c1]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-4 bg-gradient-glass backdrop-blur-sm border border-white/20">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white">Free Custom Mockup</span>
            </div>
            
            <h3 className="heading-sm mb-3">
              See Your Website's Potential
            </h3>
            <p className="text-sm sm:text-base text-muted mb-6 max-w-lg mx-auto">
              Get a custom mockup showing how professional design converts more visitors into customers.
            </p>

            {/* Compact Benefits */}
            <div className="flex items-center justify-center space-x-6 mb-6 text-xs text-subtle">
              <span>✓ Custom Design</span>
              <span>✓ 24hr Delivery</span>
              <span>✓ No Commitment</span>
            </div>

            {/* Compact CTA */}
            <button
              onClick={() => scrollToSection('leadform')}
              className="group px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 shadow-xl bg-gradient-primary text-white"
            >
              <span>Get Free Mockup</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;