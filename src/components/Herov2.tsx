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
    <section 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" 
      style={{ 
        background: '#000000',
        paddingTop: 'clamp(120px, 15vh, 180px)', // Increased top padding
        paddingBottom: 'clamp(80px, 10vh, 120px)', // Balanced bottom spacing
        zIndex: 1
      }}
      itemScope 
      itemType="https://schema.org/WebPage"
      aria-label="Hero section with AI-powered web design services"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0" role="presentation" aria-hidden="true">
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
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-gradient-glass">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">Premium Website Design & Optimization</span>
        </div>

        {/* Main Heading */}
        <h1 
          className="font-bold text-white leading-tight"
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 2.2rem)',
            marginBottom: 'clamp(12px, 2vw, 20px)'
          }}
          itemProp="headline"
        >
          We Don't Build Websites.{' '}
          <span className="text-gradient">
            We Build Digital Flagships.
          </span>
        </h1>

        <p 
          className="text-white/85 leading-relaxed font-medium mx-auto"
          style={{
            fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
            marginBottom: 'clamp(10px, 2vw, 16px)',
            maxWidth: 'min(100%, 32rem)'
          }}
          itemProp="description"
        >
          Precision-built, conversion-optimized websites crafted to elevate your brand and turn visitors into clients — every single day.
        </p>

        {/* CTA Buttons */}
        <nav className="flex flex-col sm:flex-row justify-center items-center" style={{ gap: 'clamp(12px, 2vw, 16px)' }} aria-label="Primary actions">
          <button 
            onClick={() => scrollToSection('leadform')}
            className="group bg-white text-slate-900 rounded-full font-semibold flex items-center gap-2 hover-scale shadow-lg hover:shadow-xl transition-all duration-200"
            style={{
              padding: 'clamp(8px, 1.2vw, 12px) clamp(16px, 2.5vw, 24px)',
              fontSize: 'clamp(0.75rem, 1.2vw, 0.85rem)'
            }}
            aria-label="Start your free mockup - primary call to action"
            type="button"
          >
            <span>Start Your Free Mockup</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="btn-secondary rounded-full font-semibold hover-scale"
            style={{
              padding: 'clamp(8px, 1.2vw, 12px) clamp(16px, 2.5vw, 24px)',
              fontSize: 'clamp(0.75rem, 1.2vw, 0.85rem)'
            }}
            aria-label="View our client results and portfolio"
            type="button"
          >
            See Client Results
          </button>
        </nav>

        {/* Credibility Line */}
        <p 
          className="text-white/70 mx-auto"
          style={{
            fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)',
            marginTop: 'clamp(24px, 4vw, 32px)',
            marginBottom: 'clamp(12px, 2vw, 16px)',
            maxWidth: 'min(100%, 26rem)'
          }}
        >
          Trusted by fast-growing businesses across the globe.
        </p>

        {/* Trust Badges - At Bottom of Hero */}
        <div className="mt-8 sm:mt-12 mb-6 sm:mb-8">
          
          {/* Endless Animated Scrolling Container */}
          <div className="relative overflow-hidden">
            {/* Single Wide Row - Endless Animation */}
            <div className="flex animate-endless-scroll space-x-8">
              {(() => {
                const companies = [
                  { name: 'Kratom Online', logo: 'https://kratomonline.ca/wp-content/uploads/2025/06/kratom_logo-1-1-1024x232.png', alt: 'Kratom Online Logo' },
                  { name: 'Enrolla', logo: 'https://cdn.prod.website-files.com/68093ca7e2c145ed15fcef51/680f97a224f1cbf58b74a346_enrolla-logo.avif', alt: 'Enrolla Logo' },
                  { name: 'toitures lv', logo: 'https://i.ibb.co/5WDKP6wh/Toitures-LV-Rouge.png', alt: 'toitureslv Logo' },
                  { name: 'Yorkshire Invites', logo: 'https://yorkshireinvites.co.uk/wp-content/uploads/2022/10/shop-sign-YWI-2-1024x123.png', alt: 'Yorkshire Invites Logo' },
                  { name: 'Intea Arabia', logo: '/intea-logo.png', alt: 'Intea Arabia Logo' },
                  { name: 'Pearline', logo: 'https://pearline.com/wp-content/uploads/2024/04/Logo.png', alt: 'Pearline Logo' }
                ];
                // Create enough duplicates for seamless loop (4 sets)
                return [...companies, ...companies, ...companies, ...companies];
              })().map((company, index) => (
                <div
                  key={`hero-trust-${index}`}
                  className="flex-shrink-0 flex items-center justify-center p-6 group rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    minWidth: '200px',
                    height: '100px'
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.alt}
                    className="max-h-16 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Enhanced Gradient Overlays for Hero */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* CSS Animations for Hero Trust Badges */}
          <style dangerouslySetInnerHTML={{
            __html: `
              .animate-endless-scroll {
                animation: endless-scroll 20s linear infinite;
                will-change: transform;
                backface-visibility: hidden;
                perspective: 1000px;
              }
              
              @keyframes endless-scroll {
                0% { transform: translate3d(0, 0, 0); }
                100% { transform: translate3d(-25%, 0, 0); }
              }
            `
          }} />
        </div>

      </div>
    </section>
  );
};

export default Herov2;