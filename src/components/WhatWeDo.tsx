import { useEffect, useRef, useState } from 'react';
import { Globe, Smartphone, Bot, Target } from 'lucide-react';

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
      description: 'Custom responsive websites with built-in SEO optimization to boost your rankings and conversions.',
      features: ['Responsive design', 'SEO optimization', 'Speed optimization', 'Mobile-first']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps that provide seamless experiences and drive growth.',
      features: ['iOS & Android apps', 'Cross-platform', 'User-friendly UI', 'App store optimization']
    },
    {
      icon: Bot,
      title: 'Chatbot Development',
      description: 'AI-powered chatbots that automate support, qualify leads, and assist customers 24/7.',
      features: ['AI-powered', '24/7 support', 'Lead qualification', 'Multi-platform']
    },
    {
      icon: Target,
      title: 'Lead Generation & CRM',
      description: 'Automated lead generation with seamless CRM integration to capture and convert prospects.',
      features: ['Lead automation', 'CRM integration', 'Email marketing', 'Analytics tracking']
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="services" 
      className="section-spacing section-padding relative overflow-hidden" 
      style={{ background: '#000000' }}
      itemScope 
      itemType="https://schema.org/Organization"
      aria-labelledby="services-heading"
    >
      {/* Background effects - matching Herov2 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0127c1]/3 to-transparent" role="presentation" aria-hidden="true"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl" role="presentation" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl" role="presentation" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 
            id="services-heading"
            className="heading-lg font-bold text-white mb-6 leading-tight" 
            style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)' }}
            itemProp="name"
          >
            What We Do
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
          {services.map((service, index) => (
            <article
              key={index}
              className={`group bg-gradient-glass p-6 rounded-xl hover-lift ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              itemScope 
              itemType="https://schema.org/Service"
              role="article"
              aria-labelledby={`service-${index}-title`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden bg-gradient-primary border border-white/20 backdrop-blur-sm"
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(0, 255, 209, 0.2)'
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
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10 transition-all duration-300" />
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

              <h3 
                id={`service-${index}-title`}
                className="heading-sm mb-var(--spacing-sm)"
                itemProp="name"
              >
                {service.title}
              </h3>

              <p 
                className="text-caption text-secondary mb-var(--spacing-md)"
                itemProp="description"
              >
                {service.description}
              </p>

              <ul className="space-y-1 sm:space-y-1.5" itemProp="offers" itemScope itemType="https://schema.org/OfferCatalog">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-xs text-white/60" itemProp="itemListElement">
                    <div className="w-1 h-1 rounded-full mr-2 mt-1.5 flex-shrink-0 bg-gradient-primary" role="presentation" aria-hidden="true"></div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;