import { useEffect, useRef, useState } from 'react';
import { Globe, Smartphone, Bot, Target, Check, Zap, TrendingUp, Star } from 'lucide-react';

const WhatWeDo = () => {
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
  const services = [
    {
      icon: Globe,
      title: 'Website Design & SEO',
      description: 'Convert visitors into customers with high-performance websites.',
      highlights: [
        { icon: Zap, text: 'Lightning Fast' },
        { icon: TrendingUp, text: 'SEO Optimized' },
        { icon: Check, text: 'Mobile Ready' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Reach customers wherever they are with stunning mobile apps.',
      highlights: [
        { icon: Star, text: 'iOS & Android' },
        { icon: Check, text: 'User-Friendly' },
        { icon: TrendingUp, text: 'App Store Ready' }
      ]
    },
    {
      icon: Bot,
      title: 'Chatbot Development',
      description: 'Automate customer support and capture leads 24/7.',
      highlights: [
        { icon: Zap, text: 'AI-Powered' },
        { icon: Check, text: '24/7 Available' },
        { icon: Target, text: 'Lead Qualified' }
      ]
    },
    {
      icon: Target,
      title: 'Lead Generation & CRM',
      description: 'Transform prospects into paying customers automatically.',
      highlights: [
        { icon: TrendingUp, text: 'Auto Capture' },
        { icon: Check, text: 'CRM Integrated' },
        { icon: Star, text: 'Analytics Ready' }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="services" 
      className="section-padding relative overflow-hidden" 
      style={{ background: '#000000' }}
      itemScope 
      itemType="https://schema.org/Organization"
      aria-labelledby="services-heading"
    >
      {/* Background effects - matching Herov2 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0127c1]/3 to-transparent" role="presentation" aria-hidden="true"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl" role="presentation" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl" role="presentation" aria-hidden="true"></div>
      
      <div className="container-spacing relative z-10">
        <header className={`text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ marginBottom: 'clamp(40px, 6vh, 80px)' }}>
          <h2 
            id="services-heading"
            className="font-bold text-white leading-tight" 
            style={{ 
              fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
              marginBottom: 'clamp(8px, 1vw, 12px)',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)' 
            }}
            itemProp="name"
          >
            What We Do
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
          {services.map((service, index) => (
            <article
              key={index}
              className={`group relative rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{
                padding: 'clamp(16px, 3vw, 24px)',
                animationDelay: `${index * 0.1}s`,
                background: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 16px rgba(1, 39, 193, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                width: '100%',
                maxWidth: '100%',
                overflow: 'hidden'
              }}
              itemScope 
              itemType="https://schema.org/Service"
              role="article"
              aria-labelledby={`service-${index}-title`}
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
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #8b5cf6)',
                      boxShadow: '0 4px 20px rgba(14, 165, 233, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                    }}
                  >
                    <service.icon className="w-6 h-6 text-white drop-shadow-sm" />
                  </div>
                  <div className="text-2xl font-bold text-white/30 group-hover:text-white/50 transition-all duration-300">
                    0{index + 1}
                  </div>
                </div>

                {/* Title */}
                <h3 
                  id={`service-${index}-title`}
                  className="font-bold text-white transition-colors duration-300"
                  style={{
                    fontSize: 'clamp(0.8rem, 1.3vw, 0.85rem)',
                    marginBottom: 'clamp(6px, 1vw, 8px)'
                  }}
                  itemProp="name"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-white/90 leading-relaxed"
                  style={{
                    fontSize: 'clamp(0.7rem, 1vw, 0.75rem)',
                    marginBottom: 'clamp(8px, 1.5vw, 12px)'
                  }}
                  itemProp="description"
                >
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5" itemProp="offers" itemScope itemType="https://schema.org/OfferCatalog">
                  {service.highlights.map((highlight, highlightIndex) => (
                    <div 
                      key={highlightIndex} 
                      className="flex items-center gap-1 rounded-full px-2 py-1 hover:bg-white/10 transition-all duration-200"
                      itemProp="itemListElement"
                      style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      <highlight.icon className="w-2.5 h-2.5 text-white" />
                      <span className="text-xs text-white/90 font-medium">{highlight.text}</span>
                    </div>
                  ))}
                </div>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;