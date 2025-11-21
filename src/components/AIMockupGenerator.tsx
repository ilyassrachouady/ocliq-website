import React, { useState } from 'react';
import { Wand2, ArrowRight, CheckCircle } from 'lucide-react';

const WebsiteAnalysis = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert('Thank you! Your comprehensive website analysis will be ready in 24 hours. Check your email!');
      setEmail('');
      setWebsite('');
    }, 3000);
  };

  return (
    <section id="website-analysis" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#00FFD1]/10 px-4 py-2 rounded-full mb-6">
              <Wand2 className="w-4 h-4 text-[#00FFD1] animate-pulse" />
              <span className="text-sm font-medium text-slate-700">Free Website Analysis</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Discover What's Holding{' '}
              <span className="bg-gradient-to-r from-[#00FFD1] to-blue-600 bg-clip-text text-transparent">
                Your Website Back
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We'll analyze your current website and provide a detailed report with actionable insights to increase your conversions and profits. No commitment required.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Comprehensive conversion audit',
                'User experience analysis',
                'Speed and performance review',
                'Competitor comparison insights',
                'Actionable improvement recommendations'
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <CheckCircle className="w-5 h-5 text-[#00FFD1]" />
                  <span className="text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleGenerate} className="space-y-4">
              <div className="space-y-4">
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Enter your website URL (e.g., https://yoursite.com)"
                  className="w-full px-6 py-4 rounded-full border border-slate-200 focus:border-[#00FFD1] focus:outline-none focus:ring-2 focus:ring-[#00FFD1]/20 transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-full border border-slate-200 focus:border-[#00FFD1] focus:outline-none focus:ring-2 focus:ring-[#00FFD1]/20 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="group w-full bg-white text-slate-900 px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-3 hover-scale shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Free Analysis</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-sm text-slate-500">
                No spam. Unsubscribe anytime. Your analysis will be ready in 24 hours.
              </p>
            </form>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-700">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-4 bg-slate-200 rounded animate-pulse w-1/3"></div>
                  <div className="text-xs text-green-600 font-semibold">+127% Conversion</div>
                </div>
                <div className="h-32 bg-gradient-to-r from-[#00FFD1]/20 to-blue-500/20 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-200 rounded animate-pulse"></div>
                  <div className="h-3 bg-slate-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-3 bg-green-200 rounded animate-pulse w-1/2"></div>
                </div>
                <div className="flex space-x-2">
                  <div className="h-8 bg-[#00FFD1] rounded flex-1 animate-pulse"></div>
                  <div className="h-8 bg-slate-200 rounded flex-1"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-24 h-24 bg-[#00FFD1]/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
