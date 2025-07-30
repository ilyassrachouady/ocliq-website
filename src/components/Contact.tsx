import React, { useEffect } from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="heading-lg font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-responsive text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Let's discuss how our expertise can accelerate your growth. Book a free discovery call or send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Calendly Integration */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-[#00FFD1]/10 to-blue-50 border-b border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Schedule Your Free Discovery Call</h3>
                <p className="text-slate-600">
                  Book a 30-minute consultation to discuss your project and see how we can help transform your business.
                </p>
              </div>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/ocliqagency/30min"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
          
          {/* Contact Info & FAQs */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#00FFD1]" />
                  <a href="mailto:ocliqagency@gmail.com" className="text-slate-600 hover:text-[#00FFD1] transition-colors">
                    ocliqagency@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#00FFD1]" />
                  <span className="text-slate-600">San Francisco, CA</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <a
                  href="mailto:ocliqagency@gmail.com"
                  className="group w-full bg-[#00FFD1] text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-[#00FFD1]/90 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
            
            {/* FAQ */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.slice(0, 3).map((faq, index) => (
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
      </div>
    </section>
  );
};

export default Contact;