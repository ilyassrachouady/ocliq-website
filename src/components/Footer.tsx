import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#000000' }}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0127c1]/3 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Final CTA Section */}
        {/* <div className="py-12 sm:py-16 text-center border-b border-slate-800">
          <h2 className="heading-md font-bold mb-4 sm:mb-6">
            You're one click away from an intelligent website{' '}
            <span className="bg-gradient-to-r from-[#00FFD1] to-blue-400 bg-clip-text text-transparent">
              that drives real results
            </span>
          </h2>
          <p className="text-responsive text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join the companies who chose experienced full-stack engineers over guesswork. Let's transform your website into a profit-generating machine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => scrollToSection('website-analysis')}
              className="group bg-[#00FFD1] text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-[#00FFD1]/90 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Free Website Analysis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white px-8 py-4 rounded-full font-semibold border-2 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105"
            >
              Book Discovery Call
            </button>
          </div>
        </div> */}
        
        {/* Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4 text-white">Ocliq</div>
            <p className="text-white/60 mb-6">
              Premium website design agency creating conversion-optimized websites that drive real business growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/OcliqOfficial" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ocliq" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ilyassrachouady" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:contact@ocliq.com" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Website Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Applications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conversion Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-white/60">
              <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors">Process</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start space-x-2">
                <div className="w-4 h-4 mt-1 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #152e56, #2a96e8)' }}>
                  <Mail className="w-2.5 h-2.5 text-white" />
                </div>
                <a href="mailto:contact@ocliq.com" className="hover:text-white transition-colors">
                  contact@ocliq.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-4 h-4 mt-1 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #152e56, #2a96e8)' }}>
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="text-white/60 text-sm">
              © 2025 Ocliq. All rights reserved.
            </div>
            <div className="flex space-x-4 text-white/60 text-sm">
              <Link 
                to="/privacy-policy" 
                className="hover:text-white transition-colors duration-300"
                onClick={() => {
                  // Use setTimeout to ensure scroll happens after navigation
                  setTimeout(() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                  }, 0);
                }}
              >
                Privacy Policy
              </Link>
              <span className="text-white/30">•</span>
              <Link 
                to="/terms-of-service" 
                className="hover:text-white transition-colors duration-300"
                onClick={() => {
                  // Use setTimeout to ensure scroll happens after navigation
                  setTimeout(() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                  }, 0);
                }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="text-white/60 text-sm mt-4 md:mt-0">
            Made with ❤️ by Ocliq Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;