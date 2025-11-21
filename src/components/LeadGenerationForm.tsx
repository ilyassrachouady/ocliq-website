import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, Loader2, Sparkles, Check } from 'lucide-react';
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

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
      <section ref={sectionRef} id="leadform" className="section-padding relative overflow-hidden" style={{ background: '#000000' }}>
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0127c1]/3 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-16" style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
          }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-primary">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="heading-md mb-4">
              Thank You! 🎉
            </h3>
            
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              Your request has been submitted successfully. We'll create your custom website mockup and send it to your email within 24 hours.
            </p>
            
            <div className="rounded-xl p-6" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p className="text-white font-medium">
                What happens next:
              </p>
              <ul className="text-left text-white/70 mt-3 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                  <span>We'll analyze your current website or project idea</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                  <span>Create a custom mockup design tailored to your business</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
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
    <section ref={sectionRef} id="leadform" className="section-padding relative overflow-hidden" style={{ background: '#000000' }}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0127c1]/3 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>
      
      <div className="container-spacing relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ marginBottom: 'clamp(40px, 6vh, 80px)' }}>
          <div 
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00FFD1]/20 via-[#0080ff]/20 to-[#0127c1]/20 border border-[#00FFD1]/30"
            style={{ marginBottom: 'clamp(8px, 1vw, 12px)' }}
          >
            <div className="w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse"></div>
            <span 
              className="font-medium text-white"
              style={{ fontSize: 'clamp(0.7rem, 1vw, 0.8rem)' }}
            >
              Limited Time - Free Professional Design
            </span>
          </div>
          
          <h2 
            className="font-bold text-white leading-tight"
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
              marginBottom: 'clamp(8px, 1vw, 12px)'
            }}
          >
            Transform Your Business with a{' '}
            <span className="bg-gradient-to-r from-[#00FFD1] via-[#0080ff] to-[#0127c1] bg-clip-text text-transparent">
              Custom Website Design
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-secondary max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-6 lg:px-0 leading-relaxed">
            Get a professional mockup that shows exactly how your website could increase conversions, generate more leads, and grow your business. No commitment required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 px-4 sm:px-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#00FFD1]/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#00FFD1]" />
              </div>
              <span className="text-sm sm:text-base text-white/90 font-medium">24-hour delivery</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#00FFD1]/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#00FFD1]" />
              </div>
              <span className="text-sm sm:text-base text-white/90 font-medium">Custom design strategy</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#00FFD1]/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#00FFD1]" />
              </div>
              <span className="text-sm sm:text-base text-white/90 font-medium">Conversion optimization</span>
            </div>
          </div>
        </div>

        <div className={`rounded-3xl mx-auto ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
          padding: 'clamp(32px, 6vw, 64px)',
          maxWidth: 'min(100%, 32rem)',
          marginBottom: 'clamp(60px, 8vh, 120px)',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          transitionDelay: '0.2s',
          width: '100%'
        }}>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="full_name" className="block text-sm font-semibold text-white mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: errors.full_name ? '1px solid rgba(239, 68, 68, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white'
                }}
                className={`w-full px-6 py-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 placeholder:text-white/40 ${
                  errors.full_name 
                    ? 'focus:ring-red-500/20 focus:border-red-500' 
                    : 'focus:ring-blue-500/20 focus:border-blue-500'
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
              <label htmlFor="phone_number" className="block text-xs sm:text-sm font-semibold text-white mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter your phone number"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: errors.phone_number ? '1px solid rgba(239, 68, 68, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white'
                }}
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 placeholder:text-white/40 ${
                  errors.phone_number 
                    ? 'focus:ring-red-500/20 focus:border-red-500' 
                    : 'focus:ring-blue-500/20 focus:border-blue-500'
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
              <label htmlFor="email_address" className="block text-xs sm:text-sm font-semibold text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email_address"
                name="email_address"
                value={formData.email_address}
                onChange={handleChange}
                placeholder="Enter your email address"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: errors.email_address ? '1px solid rgba(239, 68, 68, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white'
                }}
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 placeholder:text-white/40 ${
                  errors.email_address 
                    ? 'focus:ring-red-500/20 focus:border-red-500' 
                    : 'focus:ring-blue-500/20 focus:border-blue-500'
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
              <label htmlFor="business_info" className="block text-xs sm:text-sm font-semibold text-white mb-2">
                Business Website / Project Idea
              </label>
              <textarea
                id="business_info"
                name="business_info"
                value={formData.business_info}
                onChange={handleChange}
                placeholder="Tell us about your current website or project idea. What industry are you in? What are your main goals? (This helps us create a more targeted mockup for you)"
                rows={4}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white'
                }}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-sm sm:text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none placeholder:text-white/40"
              />
              <p className="text-xs text-white/50 mt-2">
                Optional, but recommended for a more personalized mockup
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold flex items-center justify-center gap-3 hover-scale shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Creating Your Mockup...</span>
                  </>
                ) : (
                  <>
                    <span>Get Your Free Mockup</span>
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
              
              <p className="text-sm text-white/50 text-center mt-4">
                No spam. We'll send you a custom mockup within 24 hours showing exactly how your website could look with our proven conversion-focused design approach.
              </p>
            </div>
          </form>
        </div>

        {/* Value Proposition */}
      </div>
    </section>
  );
};

export default LeadGenerationForm;