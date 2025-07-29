import React from 'react';
import { Brain, TrendingUp, Settings } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: Brain,
      title: 'Website Analysis & Strategy',
      description: 'We analyze your current website, industry, competitors, and audience to identify opportunities for improvement and growth.',
      features: ['Comprehensive website audit', 'Competitor analysis', 'User behavior insights', 'Conversion bottleneck identification']
    },
    {
      icon: TrendingUp,
      title: 'Custom Redesign & Optimization',
      description: 'We redesign your website with proven strategies and our years of experience to maximize conversions and user engagement.',
      features: ['Custom design solutions', 'Mobile-first approach', 'Speed optimization', 'SEO-friendly structure']
    },
    {
      icon: Settings,
      title: 'Lead Generation & Integration',
      description: 'We integrate powerful lead capture systems and connect your website to your business tools for maximum efficiency.',
      features: ['Lead capture optimization', 'CRM integration', 'Analytics setup', 'Marketing automation']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What We Do
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We combine years of design expertise with proven conversion strategies to transform your website into a powerful business tool.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-slate-200 hover:border-[#00FFD1]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#00FFD1]/10 to-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                <service.icon className="w-8 h-8 text-slate-700 group-hover:text-[#00FFD1] transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-[#00FFD1] rounded-full mr-3"></div>
                    {feature}
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