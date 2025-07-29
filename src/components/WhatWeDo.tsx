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
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="heading-lg font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
            What We Do
          </h2>
          <p className="text-responsive text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            We combine years of technical expertise with proven strategies to deliver digital solutions that drive real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 lg:p-8 rounded-2xl border border-slate-200 hover:border-[#00FFD1]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] bg-white"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#00FFD1]/10 to-blue-500/10 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-slate-700 group-hover:text-[#00FFD1] transition-colors duration-300" />
              </div>

              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-900 mb-2 sm:mb-3 lg:mb-4 leading-tight">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-[#00FFD1] rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
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