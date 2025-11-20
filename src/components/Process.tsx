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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative group ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#0033ff]/20 to-transparent z-0 group-hover:from-[#0033ff]/60 transition-all duration-500"></div>
              )}
              
              <div className="relative z-10 text-center bg-gradient-glass p-6 rounded-xl hover-lift h-full flex flex-col"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl flex items-center justify-center mb-4 sm:mb-6 hover-scale relative overflow-hidden flex-shrink-0 bg-gradient-primary border border-white/20 backdrop-blur-sm"
                  style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 15px rgba(0, 212, 170, 0.2)'
                  }}
                >
                  {/* Wave animation effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                      animation: 'wave 2s ease-in-out infinite',
                    }}
                  />
                  <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white relative z-10 transition-all duration-300" />
                </div>
                
                {/* Keyframe animation */}
                <style dangerouslySetInnerHTML={{
                  __html: `
                    @keyframes wave {
                      0% { transform: translateX(-100%); }
                      100% { transform: translateX(100%); }
                    }
                  `
                }} />
                
                <div className="text-sm font-semibold mb-2 sm:mb-3 text-gradient">
                  Step {index + 1}
                </div>
                
                <h3 className="heading-sm mb-3 sm:mb-4">
                  {step.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;