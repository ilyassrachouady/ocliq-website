import React from 'react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We obsess over every detail, delivering Apple-level quality in everything we create.'
    },
    {
      icon: Lightbulb,
      title: 'Intelligence',
      description: 'AI-powered insights combined with human creativity to solve complex business challenges.'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Beautiful designs are meaningless without results. We measure success in conversions and growth.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We become an extension of your team, invested in your long-term success and growth.'
    }
  ];

  return (
    <section className="py-8 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              About Ocliq
            </h2>
            
            <div className="bg-gradient-to-r from-[#00FFD1]/10 to-blue-500/10 rounded-2xl p-8 mb-8">
              <blockquote className="text-lg text-slate-700 leading-relaxed italic mb-6">
                "We started Ocliq to bring Apple-level precision to websites built for growth. After 5 years of freelance work and building over 50 websites together, we know what works and what doesn't. We believe great design should drive real business results."
              </blockquote>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00FFD1] to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">IR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Ilyass Rachouady</div>
                    <div className="text-sm text-slate-600">Co-Founder & Full Stack Engineer</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AB</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Amine Belaoudi</div>
                    <div className="text-sm text-slate-600">Co-Founder & Full Stack Engineer</div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded by experienced full-stack engineers with 5 years of freelance expertise, Ocliq combines technical excellence with proven conversion strategies. Having worked on over 50 websites together, including SaaS platforms and AI-powered solutions, we understand what drives real business results. We've helped companies across every AI field and chatbot development, transforming websites into powerful lead generation and profit-driving machines.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl border border-slate-200 hover:border-[#00FFD1]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00FFD1]/10 to-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-slate-700" />
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
            <div className="text-slate-600">Websites Built</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900 mb-2">5</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
            <div className="text-slate-600">SaaS & AI Expertise</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
            <div className="text-slate-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;