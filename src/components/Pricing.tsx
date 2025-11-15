import React from 'react';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

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
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#00FFD1]/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#00FFD1] animate-pulse" />
            <span className="text-sm font-medium text-slate-700">100% Free, No Commitment</span>
          </div>
          
          <h2 className="heading-lg font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
            See Your Website's{' '}
            <span className="bg-gradient-to-r from-[#00FFD1] to-blue-600 bg-clip-text text-transparent">
              Full Potential
            </span>
          </h2>
          <p className="text-responsive text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Get a custom mockup design showing exactly how your website could convert more visitors into paying customers. See the difference professional design makes—completely free.
          </p>
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FFD1]/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00FFD1]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Your Custom Website Mockup Awaits
            </h3>
            <p className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              We'll create a stunning mockup design tailored to your business. See real conversion-focused improvements, modern UI, and smart automation—all before you commit to anything.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Sparkles className="w-8 h-8 text-[#00FFD1] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Custom Design</h4>
                <p className="text-sm text-slate-300">Tailored to your brand and industry</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Zap className="w-8 h-8 text-[#00FFD1] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Conversion Focus</h4>
                <p className="text-sm text-slate-300">Designed to turn visitors into customers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <TrendingUp className="w-8 h-8 text-[#00FFD1] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">24-Hour Delivery</h4>
                <p className="text-sm text-slate-300">Fast turnaround, no waiting weeks</p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('leadform')}
              className="group bg-[#00FFD1] text-slate-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg hover:bg-[#00FFD1]/90 transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto shadow-2xl hover:shadow-[#00FFD1]/50"
            >
              <span>Get Your Free Mockup Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-sm text-slate-400 mt-6">
              ✓ No credit card required  ✓ Delivered in 24 hours  ✓ No obligations
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">Join 200+ businesses that transformed their online presence</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-700"
                >
                  {i === 1 ? '👤' : i === 2 ? '👨' : i === 3 ? '👩' : i === 4 ? '🧑' : '👱'}
                </div>
              ))}
            </div>
            <div className="text-left ml-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-600">4.9/5 from 200+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;