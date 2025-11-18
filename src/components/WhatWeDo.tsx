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
    <section ref={sectionRef} id="services" className="section-padding relative overflow-hidden" style={{ background: '#000000' }}>
      {/* Background effects - matching Herov2 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0127c1]/3 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-lg font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)' }}>
            What We Do
          </h2>
          <p className="text-responsive text-white/70 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            We combine years of technical expertise with proven strategies to deliver digital solutions that drive real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-4 sm:p-5 lg:p-6 rounded-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                transitionDelay: `${index * 0.15}s`,
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.border = '1px solid rgba(1, 39, 193, 0.4)';
                e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(1, 39, 193, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)';
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #152e56, #2a96e8, white)',
                  border: '1px solid rgba(42, 150, 232, 0.3)'
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

              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 leading-tight">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-white/70 mb-3 sm:mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-1 sm:space-y-1.5">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-xs text-white/60">
                    <div className="w-1 h-1 rounded-full mr-2 mt-1.5 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #152e56, #2a96e8)' }}></div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;