import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { supabase, type Lead } from '../lib/supabase';

const LeadGenerationForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    email_address: '',
    business_info: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Full name validation
    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
    } else if (formData.full_name.trim().length < 2) {
      newErrors.full_name = 'Please enter your full name';
    }

    // Phone number validation
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone_number.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone_number = 'Please enter a valid phone number';
    }

    // Email validation
    if (!formData.email_address.trim()) {
      newErrors.email_address = 'Email address is required';
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email_address)) {
      newErrors.email_address = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const leadData: Omit<Lead, 'id' | 'submission_timestamp' | 'created_at'> = {
        full_name: formData.full_name.trim(),
        phone_number: formData.phone_number.trim(),
        email_address: formData.email_address.trim(),
        business_info: formData.business_info.trim()
      };

      const { error } = await supabase
        .from('leads')
        .insert([leadData]);

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        phone_number: '',
        email_address: '',
        business_info: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (submitStatus === 'success') {
    return (
      <section id="leadform" className="section-padding bg-gradient-to-br from-[#00FFD1]/5 to-blue-50">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-200">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Thank You! 🎉
            </h3>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Your request has been submitted successfully. We'll create your custom website mockup and send it to your email within 24 hours.
            </p>
            
            <div className="bg-gradient-to-r from-[#00FFD1]/10 to-blue-500/10 rounded-xl p-6">
              <p className="text-slate-700 font-medium">
                What happens next:
              </p>
              <ul className="text-left text-slate-600 mt-3 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#00FFD1] rounded-full"></div>
                  <span>We'll analyze your current website or project idea</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#00FFD1] rounded-full"></div>
                  <span>Create a custom mockup design tailored to your business</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#00FFD1] rounded-full"></div>
                  <span>Send you the mockup with improvement recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="leadform" className="section-padding bg-gradient-to-br from-[#00FFD1]/5 to-blue-50">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#00FFD1]/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#00FFD1] animate-pulse" />
            <span className="text-sm font-medium text-slate-700">Free Custom Mockup</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Get Your Free Website{' '}
            <span className="bg-gradient-to-r from-[#00FFD1] to-blue-600 bg-clip-text text-transparent">
              Mockup Design
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            See exactly how your website could look with our proven design approach. We'll create a custom mockup showing your business with high-converting design elements, modern chatbots, and operational automations.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="full_name" className="block text-sm font-semibold text-slate-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full px-6 py-4 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00FFD1]/20 ${
                  errors.full_name 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-slate-200 focus:border-[#00FFD1]'
                }`}
                required
              />
              {errors.full_name && (
                <div className="flex items-center space-x-2 mt-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{errors.full_name}</span>
                </div>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone_number" className="block text-sm font-semibold text-slate-900 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className={`w-full px-6 py-4 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00FFD1]/20 ${
                  errors.phone_number 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-slate-200 focus:border-[#00FFD1]'
                }`}
                required
              />
              {errors.phone_number && (
                <div className="flex items-center space-x-2 mt-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{errors.phone_number}</span>
                </div>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email_address" className="block text-sm font-semibold text-slate-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email_address"
                name="email_address"
                value={formData.email_address}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`w-full px-6 py-4 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00FFD1]/20 ${
                  errors.email_address 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-slate-200 focus:border-[#00FFD1]'
                }`}
                required
              />
              {errors.email_address && (
                <div className="flex items-center space-x-2 mt-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{errors.email_address}</span>
                </div>
              )}
            </div>

            {/* Business Website / Project Idea */}
            <div>
              <label htmlFor="business_info" className="block text-sm font-semibold text-slate-900 mb-2">
                Business Website / Project Idea
              </label>
              <textarea
                id="business_info"
                name="business_info"
                value={formData.business_info}
                onChange={handleChange}
                placeholder="Tell us about your current website or project idea. What industry are you in? What are your main goals? (This helps us create a more targeted mockup for you)"
                rows={4}
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-[#00FFD1] focus:outline-none focus:ring-2 focus:ring-[#00FFD1]/20 transition-all duration-300 resize-none"
              />
              <p className="text-xs text-slate-500 mt-2">
                Optional, but recommended for a more personalized mockup
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Creating Your Mockup...</span>
                  </>
                ) : (
                  <>
                    <span>👉 Get Your Free Mockup</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              {submitStatus === 'error' && (
                <div className="flex items-center justify-center space-x-2 mt-4 text-red-600">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">Something went wrong. Please try again or contact us directly.</span>
                </div>
              )}
              
              <p className="text-sm text-slate-500 text-center mt-4">
                No spam. We'll send you a custom mockup within 24 hours showing exactly how your website could look with our proven conversion-focused design approach.
              </p>
            </div>
          </form>
        </div>

        {/* Value Proposition */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-slate-900 mb-2">High-Converting</div>
              <div className="text-sm text-slate-600">Website designs that turn visitors into customers</div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-slate-900 mb-2">Smart Chatbots</div>
              <div className="text-sm text-slate-600">AI-powered customer support and lead qualification</div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-slate-900 mb-2">Automation</div>
              <div className="text-sm text-slate-600">Streamlined operations that save time and money</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGenerationForm;