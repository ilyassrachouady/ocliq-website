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
    <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto container-padding">
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
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#00FFD1]/20">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Ilyass Rachouady"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Ilyass Rachouady</div>
                    <div className="text-sm text-slate-600">Co-Founder & Full Stack Engineer</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#00FFD1]/20">
                    <img
                      src="https://i.ibb.co/xtF5jSLX/1734732308412.jpg"
                      alt="Amine Belaoudi"
                      className="w-full h-full object-cover"
                    />
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