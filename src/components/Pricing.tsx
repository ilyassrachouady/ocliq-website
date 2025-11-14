import React from 'react';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

const Pricing = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="heading-lg font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-responsive text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 mb-6 sm:mb-8 md:mb-12">
            We offer custom solutions tailored to your specific needs. Every project is unique, and we work closely with you to deliver exactly what your business requires.
          </p>
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FFD1]/10 to-blue-500/10"></div>
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Let's Discuss Your Project
            </h3>
            <p className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Every business is unique. We create custom solutions that fit your specific needs, timeline, and budget. Get a personalized quote and timeline for your project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-[#00FFD1] text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#00FFD1]/90 transition-all duration-300 hover:scale-105 flex items-center space-x-2 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border-2 border-slate-600 hover:border-slate-500 transition-all duration-300 hover:scale-105 flex items-center space-x-2 w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Discovery Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Services Summary
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-6 sm:mb-8">
            Our Core Services
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              'Website Design & SEO',
              'Mobile App Development',
              'Chatbot Development',
              'Lead Generation & CRM'
            ].map((service, index) => (
              <div key={index} className="p-4 sm:p-6 bg-white rounded-xl border border-slate-200 hover:border-[#00FFD1]/30 hover:shadow-lg transition-all duration-300">
                <div className="text-sm sm:text-base font-medium text-slate-900">{service}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;