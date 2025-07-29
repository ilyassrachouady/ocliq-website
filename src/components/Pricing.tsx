import React from 'react';
import { Check, ArrowRight, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Essentials',
      subtitle: 'Perfect for Startups',
      popular: false,
      icon: Star,
      features: [
        'AI-powered website design',
        'Mobile-responsive development',
        'Basic SEO optimization',
        'Contact form integration',
        '30 days of support',
        'Basic analytics setup'
      ],
      cta: 'Get Started',
      badge: null
    },
    {
      name: 'Growth',
      subtitle: 'Ideal for Scaling Businesses',
      popular: true,
      icon: Zap,
      features: [
        'Everything in Essentials',
        'Advanced conversion optimization',
        'A/B testing framework',
        'CRM integration',
        'Marketing automation setup',
        '90 days of support',
        'Performance monitoring',
        'Custom integrations'
      ],
      cta: 'Start Growing',
      badge: 'Most Popular'
    },
    {
      name: 'Custom AI Experience',
      subtitle: 'Enterprise Solutions',
      popular: false,
      icon: Star,
      features: [
        'Everything in Growth',
        'Custom AI model training',
        'Advanced analytics dashboard',
        'Multi-site management',
        'Dedicated account manager',
        '1 year of support',
        'White-label options',
        'Priority development queue'
      ],
      cta: 'Contact Sales',
      badge: 'Enterprise'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Choose Your Growth Plan
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every plan includes our AI-powered design process and conversion optimization. Scale as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative group p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-[#00FFD1] bg-gradient-to-br from-[#00FFD1]/5 to-blue-500/5 shadow-xl' 
                  : 'border-slate-200 hover:border-[#00FFD1]/30 hover:shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#00FFD1] text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                    {plan.badge}
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                  plan.popular 
                    ? 'bg-[#00FFD1]/20' 
                    : 'bg-slate-100 group-hover:bg-[#00FFD1]/10'
                }`}>
                  <plan.icon className={`w-8 h-8 ${
                    plan.popular ? 'text-[#00FFD1]' : 'text-slate-600 group-hover:text-[#00FFD1]'
                  }`} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-slate-600 mb-6">
                  {plan.subtitle}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#00FFD1] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className={`group w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? 'bg-slate-900 text-white hover:bg-slate-800 hover:scale-105'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200 hover:scale-105'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Not sure which plan is right for you?
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-[#00FFD1] font-semibold hover:underline"
          >
            Book a free discovery call to find out →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;