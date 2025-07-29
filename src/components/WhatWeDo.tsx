import React from 'react';
import { Globe, Smartphone, Bot, Target } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Design & SEO Optimization',
      description: 'Custom website design with built-in SEO optimization to help your business rank higher and convert more visitors into customers.',
      features: ['Custom responsive design', 'SEO optimization', 'Speed optimization', 'Mobile-first approach']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences and drive business growth.',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'User-friendly interfaces', 'App store optimization']
    },
    {
      icon: Bot,
      title: 'Chatbot Development',
      description: 'AI-powered chatbots that automate customer support, qualify leads, and provide 24/7 assistance to your customers.',
      features: ['AI-powered responses', '24/7 customer support', 'Lead qualification', 'Multi-platform integration']
    },
    {
      icon: Target,
      title: 'Lead Generation & CRM Integration',
      description: 'Automated lead generation systems with seamless CRM integration to capture, nurture, and convert prospects efficiently.',
      features: ['Lead capture automation', 'CRM integration', 'Email marketing setup', 'Analytics & tracking']
    }
  ];

  return (
    <section id="services" className="py-8 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            We combine years of technical expertise with proven strategies to deliver digital solutions that drive real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-[#00FFD1]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] bg-white"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#00FFD1]/10 to-blue-500/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-700 group-hover:text-[#00FFD1] transition-colors duration-300" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4 leading-tight">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 sm:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-[#00FFD1] rounded-full mr-3 mt-2 flex-shrink-0"></div>
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