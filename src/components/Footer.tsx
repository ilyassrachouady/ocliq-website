import React from 'react';
import { ArrowRight, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Final CTA Section */}
        <div className="py-12 sm:py-16 text-center border-b border-slate-800">
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
        </div>
        
        {/* Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">Ocliq</div>
            <p className="text-slate-400 mb-6">
              Premium website design agency creating conversion-optimized websites that drive real business growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/OcliqOfficial" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00FFD1] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ocliq" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00FFD1] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ilyassrachouady" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00FFD1] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:ocliqagency@gmail.com" className="text-slate-400 hover:text-[#00FFD1] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Website Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Applications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conversion Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors">Process</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2025 Ocliq. All rights reserved.
          </div>
          <div className="text-slate-400 text-sm">
            Made with ❤️ by Ocliq Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;