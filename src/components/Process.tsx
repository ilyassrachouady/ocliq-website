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
    <section ref={sectionRef} id="process" className="fitted-section relative overflow-hidden" style={{ background: '#000000' }}>
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
      
      <div className="container-spacing relative z-10">
        <div className={`text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ marginBottom: 'clamp(40px, 6vh, 80px)' }}>
          <h2 
            className="font-bold text-white leading-tight" 
            style={{ 
              fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
              marginBottom: 'clamp(8px, 1vw, 12px)',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)' 
            }}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-[#00FFD1] via-[#0080ff] to-[#0127c1] bg-clip-text text-transparent">
              Process
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Animated Progress Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 w-full h-0.5 z-0">
            <div 
              className="h-full bg-gradient-to-r from-[#00FFD1] via-[#0080ff] to-[#0127c1] opacity-30"
              style={{
                animation: 'progress-flow 8s ease-in-out infinite'
              }}
            ></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
          {steps.map((step, index) => (
            <article
              key={index}
              className={`group relative rounded-2xl sm:rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer overflow-hidden ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{
                padding: 'clamp(16px, 3vw, 24px)',
                animationDelay: `${index * 0.1}s`,
                background: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 16px rgba(1, 39, 193, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              {/* Sequential Glass Lightning Effect */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(0, 255, 209, 0.15) 50%, transparent 70%)',
                  animation: `glass-sweep 8s ease-in-out infinite`,
                  animationDelay: `${index * 2}s`
                }}
              ></div>
              
              {/* Continuous Subtle Glass Effect */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(0, 255, 209, 0.03) 50%, transparent 100%)',
                  animation: `glass-shimmer 6s ease-in-out infinite alternate`,
                  animationDelay: `${index * 1.5}s`
                }}
              ></div>
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
              
              {/* Step Progress Indicator */}
              <div className="flex justify-center mb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center relative group-hover:scale-110 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(1, 39, 193, 0.3) 0%, rgba(0, 255, 209, 0.2) 100%)',
                    border: '2px solid rgba(0, 255, 209, 0.3)',
                    boxShadow: '0 8px 32px rgba(1, 39, 193, 0.3), 0 0 20px rgba(0, 255, 209, 0.2)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                  }}
                >
                  {/* Animated Progress Ring */}
                  <div 
                    className="absolute inset-0 rounded-full border-2 border-transparent"
                    style={{
                      background: `conic-gradient(from 0deg, rgba(0, 255, 209, 0.8) 0%, rgba(0, 255, 209, 0.8) ${(index + 1) * 25}%, transparent ${(index + 1) * 25}%)`,
                      mask: 'radial-gradient(circle, transparent 70%, black 72%)',
                      animation: `step-progress 3s ease-in-out infinite`,
                      animationDelay: `${index * 0.5}s`
                    }}
                  ></div>
                  
                  {/* Pulsing Core */}
                  <div 
                    className="absolute inset-2 rounded-full opacity-50"
                    style={{
                      background: 'radial-gradient(circle, rgba(0, 255, 209, 0.6) 0%, transparent 70%)',
                      animation: `step-pulse 2s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`
                    }}
                  ></div>
                  
                  <step.icon className="w-8 h-8 text-white drop-shadow-lg relative z-10" />
                  
                  {/* Step Number Badge */}
                  <div 
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-black"
                    style={{
                      background: 'linear-gradient(135deg, #00FFD1, #0080ff)',
                      boxShadow: '0 2px 8px rgba(0, 255, 209, 0.4)'
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
              </div>
              
              {/* Progress Connector - Mobile */}
              {index < 3 && (
                <div className="lg:hidden flex justify-center my-4">
                  <div 
                    className="w-0.5 h-8 bg-gradient-to-b from-[#00FFD1] to-transparent"
                    style={{
                      animation: `connector-flow 2s ease-in-out infinite`,
                      animationDelay: `${index * 0.5}s`
                    }}
                  ></div>
                </div>
              )}
              
              <div className="relative z-20 text-center">
                
                {/* Title */}
                <h3 
                  className="font-bold text-white transition-colors duration-300"
                  style={{
                    fontSize: 'clamp(0.8rem, 1.3vw, 0.85rem)',
                    marginBottom: 'clamp(6px, 1vw, 8px)'
                  }}
                >
                  {step.title}
                </h3>
                
                {/* Description */}
                <p 
                  className="text-white/90 leading-relaxed"
                  style={{
                    fontSize: 'clamp(0.7rem, 1vw, 0.75rem)',
                    marginBottom: 'clamp(8px, 1.5vw, 12px)'
                  }}
                >
                  {step.description}
                </p>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;