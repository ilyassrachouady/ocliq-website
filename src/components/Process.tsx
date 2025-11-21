import { useEffect, useRef, useState } from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const Process = () => {
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
  const steps = [
    {
      icon: Search,
      title: 'Analyze',
      description: 'Audit your website to identify conversion bottlenecks.'
    },
    {
      icon: Palette,
      title: 'Strategy',
      description: 'Create custom design concepts aligned with your brand.'
    },
    {
      icon: Code,
      title: 'Build',
      description: 'Develop your website with proven technologies.'
    },
    {
      icon: Rocket,
      title: 'Launch & Optimize',
      description: 'Deploy and continuously improve based on real data.'
    }
  ];

  return (
    <section ref={sectionRef} id="process" className="section-spacing section-padding relative overflow-hidden" style={{ background: '#000000' }}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0127c1]/3 to-transparent"></div>
      
      {/* Animated glowing orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#1720ae]/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      {/* Moving wave effect */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/2 left-0 w-full h-32 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl animate-wave-horizontal"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.4,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
              animation: `floatParticle ${10 + Math.random() * 15}s ease-in-out ${Math.random() * 5}s infinite alternate`,
              '--move-x': `${(Math.random() - 0.5) * 150}px`,
              '--move-y': `${(Math.random() - 0.5) * 150}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      
      {/* Keyframe animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
          }
          
          @keyframes wave-horizontal {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes floatParticle {
            0% { 
              transform: translate(0, 0);
              opacity: 0.2;
            }
            50% {
              opacity: 0.5;
            }
            100% { 
              transform: translate(var(--move-x), var(--move-y));
              opacity: 0.2;
            }
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          
          .animate-wave-horizontal {
            animation: wave-horizontal 8s ease-in-out infinite;
          }
        `
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="heading-lg font-bold text-white mb-6 leading-tight" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)' }}>
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <article
              key={index}
              className={`group relative p-6 rounded-3xl transition-all duration-700 ease-out hover:-translate-y-3 hover:scale-[1.08] cursor-pointer overflow-hidden ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                background: 'rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Apple-style glass shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                />
              </div>
              
              {/* Enhanced glass border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent, rgba(255, 255, 255, 0.05))',
                  filter: 'blur(1px)'
                }}
              />
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0 group-hover:from-white/40 transition-all duration-300"></div>
              )}
              
              <div className="relative z-20 text-center">
                {/* Icon and Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 ease-out transform-gpu"
                    style={{
                      background: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #8b5cf6)',
                      boxShadow: '0 8px 32px rgba(14, 165, 233, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(20px) saturate(200%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(200%)',
                    }}
                  >
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md" />
                    <step.icon className="w-10 h-10 text-white drop-shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>

                {/* Step Number */}
                <div className="text-sm font-bold text-white/40 group-hover:text-white/70 mb-3 transition-all duration-700 transform group-hover:scale-105">
                  Step {index + 1}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/95 transition-all duration-700 transform group-hover:scale-105 group-hover:-translate-y-1">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-white/80 group-hover:text-white/90 leading-relaxed transition-all duration-700 transform group-hover:scale-105">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;