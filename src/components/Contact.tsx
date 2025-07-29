import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: 'website-design'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      projectType: 'website-design'
    });
  };

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
    <section id="contact" className="py-8 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Let's discuss how our expertise can accelerate your growth. Book a free discovery call or send us a message.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#00FFD1] focus:ring-2 focus:ring-[#00FFD1]/20 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#00FFD1] focus:ring-2 focus:ring-[#00FFD1]/20 focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#00FFD1] focus:ring-2 focus:ring-[#00FFD1]/20 focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#00FFD1] focus:ring-2 focus:ring-[#00FFD1]/20 focus:outline-none transition-colors"
                  >
                    <option value="website-design">Website Design</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="web-app">Web Application</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="optimization">Conversion Optimization</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#00FFD1] focus:ring-2 focus:ring-[#00FFD1]/20 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>
              
              <button
                type="submit"
                className="group w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
          
          {/* Contact Info & FAQs */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#00FFD1]" />
                  <span className="text-slate-600">contact@ocliq.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#00FFD1]" />
                  <span className="text-slate-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#00FFD1]" />
                  <span className="text-slate-600">San Francisco, CA</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <button className="group w-full bg-[#00FFD1] text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-[#00FFD1]/90 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Discovery Call</span>
                </button>
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