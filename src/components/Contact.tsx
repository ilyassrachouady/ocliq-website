import React, { useEffect } from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects are delivered in 4-6 weeks, significantly faster than traditional agencies thanks to our AI-powered process.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! Our Essentials plan is designed specifically for startups and small businesses looking to establish a strong digital presence.'
    },
    {
      question: 'What makes your AI approach different?',
      answer: 'Our AI analyzes 10,000+ high-converting websites to inform design decisions, then continuously optimizes based on your specific user data.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, all plans include support ranging from 30 days to 1 year, plus optional maintenance packages for long-term partnerships.'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Contact Information */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-lg font-bold text-slate-900 mb-8">Get in Touch</h2>
          
          <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 mb-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-[#00FFD1]" />
                <a href="mailto:ocliqagency@gmail.com" className="text-slate-600 hover:text-[#00FFD1] transition-colors text-lg">
                  ocliqagency@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-[#00FFD1]" />
                <span className="text-slate-600 text-lg">San Francisco, CA</span>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="mailto:ocliqagency@gmail.com"
                className="group bg-[#00FFD1] text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-[#00FFD1]/90 transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
          
          {/* FAQ */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4 text-left max-w-xl mx-auto">
              {faqs.map((faq, index) => (
                <details key={index} className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <span className="font-medium text-slate-900">{faq.question}</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <div className="p-4 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;