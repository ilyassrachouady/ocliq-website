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
      className="section-spacing section-padding relative overflow-hidden bg-black"
      itemScope 
      itemType="https://schema.org/Organization"
      aria-labelledby="services-heading"
    >
      {/* Background effects - matching Herov2 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/3 to-transparent" role="presentation" aria-hidden="true"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/8 rounded-full blur-3xl" role="presentation" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/8 rounded-full blur-3xl" role="presentation" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 
            id="services-heading"
            className="heading-lg font-bold text-white mb-6 leading-tight text-shadow"
            itemProp="name"
          >
            What We Do
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
          {services.map((service, index) => (
            <article
              key={index}
              className={`group relative p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              } bg-gradient-glass shadow-lg`}
              style={{ animationDelay: `${index * 0.1}s` }}
              itemScope 
              itemType="https://schema.org/Service"
              role="article"
              aria-labelledby={`service-${index}-title`}
            >
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
                    <service.icon className="w-6 h-6 text-white drop-shadow-sm" />
                  </div>
                  <div className="text-2xl font-bold text-white/30 group-hover:text-white/50 transition-all duration-300">
                    0{index + 1}
                  </div>
                </div>

                {/* Title */}
                <h3 
                  id={`service-${index}-title`}
                  className="text-lg font-bold text-white mb-2 transition-colors duration-300"
                  itemProp="name"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm text-secondary mb-4 leading-relaxed"
                  itemProp="description"
                >
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5" itemProp="offers" itemScope itemType="https://schema.org/OfferCatalog">
                  {service.highlights.map((highlight, highlightIndex) => (
                    <div 
                      key={highlightIndex} 
                      className="flex items-center gap-1 rounded-full px-2 py-1 bg-gradient-glass hover:bg-white/10 transition-all duration-200"
                      itemProp="itemListElement"
                    >
                      <highlight.icon className="w-2.5 h-2.5 text-white" />
                      <span className="text-xs text-white/90 font-medium">{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;