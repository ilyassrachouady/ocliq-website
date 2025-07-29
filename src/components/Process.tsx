import React from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Analyze',
      description: 'We conduct a comprehensive analysis of your current website, identifying conversion bottlenecks and growth opportunities.',
      details: ['Website performance audit', 'User experience review', 'Competitor analysis', 'Conversion tracking setup']
    },
    {
      icon: Palette,
      title: 'Strategy',
      description: 'Based on our analysis, we create a custom strategy and design concepts that align with your brand and business goals.',
      details: ['Custom design concepts', 'Brand alignment', 'UX optimization', 'Mobile-first approach']
    },
    {
      icon: Code,
      title: 'Build',
      description: 'We redesign and develop your website using proven technologies, ensuring fast loading times and seamless functionality.',
      details: ['Custom development', 'Performance optimization', 'SEO implementation', 'Quality assurance']
    },
    {
      icon: Rocket,
      title: 'Launch & Optimize',
      description: 'We launch your optimized website and provide ongoing support to ensure continuous improvement and growth.',
      details: ['Seamless launch', 'Analytics integration', 'Performance monitoring', 'Ongoing optimization']
    }
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="heading-lg font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
            Our Process
          </h2>
          <p className="text-responsive text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            A proven methodology that combines data-driven insights with design expertise to deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'forwards' }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#00FFD1]/30 to-transparent z-0 group-hover:from-[#00FFD1] transition-colors duration-500"></div>
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl flex items-center justify-center mb-6 group-hover:border-[#00FFD1]/50 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                  <step.icon className="w-12 h-12 text-slate-700 group-hover:text-[#00FFD1] group-hover:scale-125 transition-all duration-500" />
                </div>
                
                <div className="text-sm font-semibold text-[#00FFD1] mb-2">
                  Step {index + 1}
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-2 text-left">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-[#00FFD1] rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;