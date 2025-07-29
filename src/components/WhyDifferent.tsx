import React from 'react';
import { Brain, Target, Zap, Shield } from 'lucide-react';

const WhyDifferent = () => {
  const features = [
    {
      icon: Brain,
      title: 'Data-Driven Approach',
      description: 'We analyze your website performance, user behavior, and industry benchmarks to make informed design decisions.',
      metric: '500+ websites analyzed'
    },
    {
      icon: Target,
      title: 'Conversion-First Approach',
      description: 'Every element is strategically designed and positioned to maximize conversions and generate more leads for your business.',
      metric: 'avg. +127% conversion lift'
    },
    {
      icon: Zap,
      title: 'Proven Experience',
      description: 'Years of experience in website design and optimization, with a track record of delivering results for businesses.',
      metric: '200+ successful projects'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Quality',
      description: 'Professional-grade websites built with security, performance, and scalability that growing businesses need.',
      metric: '99.9% uptime guarantee'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Ocliq Is Different
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            We don't guess. We analyze, strategize, and optimize using proven methods and real performance data.
          </p>
          <div className="inline-flex items-center space-x-2 bg-[#00FFD1]/10 px-6 py-3 rounded-full border border-[#00FFD1]/20">
            <Brain className="w-5 h-5 text-[#00FFD1]" />
            <span className="font-medium">Powered by Data & Experience</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-2xl border border-slate-700 hover:border-[#00FFD1]/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00FFD1]/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                <feature.icon className="w-8 h-8 text-[#00FFD1] group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              
              <p className="text-slate-300 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="text-[#00FFD1] font-bold text-lg">
                {feature.metric}
              </div>
            </div>
          ))}
        </div>
        
        {/* Comparison Chart */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Traditional vs. Ocliq</h3>
            <p className="text-slate-300">See the difference our data-driven approach makes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-slate-400 font-medium mb-4">Traditional Agencies</div>
              <div className="space-y-3 text-slate-300">
                <div>Template-based designs</div>
                <div>Guesswork approach</div>
                <div>8-12 week delivery</div>
                <div>Limited analysis</div>
              </div>
            </div>
            
            <div className="border-l border-r border-slate-700 px-8">
              <div className="text-[#00FFD1] font-bold mb-4">Ocliq</div>
              <div className="space-y-3">
                <div>Custom strategic designs</div>
                <div>Data-driven optimization</div>
                <div>4-6 week delivery</div>
                <div>Comprehensive analysis</div>
              </div>
            </div>
            
            <div>
              <div className="text-[#00FFD1] font-bold mb-4">Results</div>
              <div className="space-y-3">
                <div>+127% higher conversions</div>
                <div>Measurable ROI</div>
                <div>50% quicker delivery</div>
                <div>Long-term growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;