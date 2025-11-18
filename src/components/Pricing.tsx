import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import Particles from './ui/Particles';

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
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
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
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(0, 51, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 51, 255, 0.2)'
            }}
          >
            <Sparkles className="w-4 h-4 text-[#0033ff] animate-pulse" />
            <span className="text-sm font-medium text-white">100% Free, No Commitment</span>
          </div>
          
          <h2 className="heading-lg font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)' }}>
            See Your Website's{' '}
            <span className="bg-gradient-to-r from-[#152e56] via-[#2a96e8] to-white bg-clip-text text-transparent" style={{ textShadow: 'none' }}>
              Full Potential
            </span>
          </h2>
          <p className="text-responsive text-white/70 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Get a custom mockup design showing exactly how your website could convert more visitors into paying customers. See the difference professional design makes—completely free.
          </p>
        </div>

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
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
              Your Custom Website Mockup Awaits
            </h3>
            <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              We'll create a stunning mockup design tailored to your business. See real conversion-focused improvements, modern UI, and smart automation—all before you commit to anything.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                  style={{
                    background: 'rgba(0, 51, 255, 0.1)',
                    border: '1px solid rgba(0, 51, 255, 0.2)'
                  }}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Custom Design</h4>
                <p className="text-sm text-white/60">Tailored to your brand and industry</p>
              </div>
              <div className="rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                  style={{
                    background: 'rgba(0, 51, 255, 0.1)',
                    border: '1px solid rgba(0, 51, 255, 0.2)'
                  }}
                >
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Conversion Focus</h4>
                <p className="text-sm text-white/60">Designed to turn visitors into customers</p>
              </div>
              <div className="rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                  style={{
                    background: 'rgba(0, 51, 255, 0.1)',
                    border: '1px solid rgba(0, 51, 255, 0.2)'
                  }}
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">24-Hour Delivery</h4>
                <p className="text-sm text-white/60">Fast turnaround, no waiting weeks</p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('leadform')}
              className="group px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto shadow-2xl"
              style={{
                background: 'white',
                color: '#000000'
              }}
            >
              <span>Get Your Free Mockup Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-sm text-white/60 mt-6">
              ✓ No credit card required  ✓ Delivered in 24 hours  ✓ No obligations
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className={`mt-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
          <p className="text-white/70 mb-6">Join 200+ businesses that transformed their online presence</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-semibold"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white'
                  }}
                >
                  {i === 1 ? '👤' : i === 2 ? '👨' : i === 3 ? '👩' : i === 4 ? '🧑' : '👱'}
                </div>
              ))}
            </div>
            <div className="text-left ml-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-white/60">4.9/5 from 200+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;