import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Force immediate scroll to top with multiple methods
    const forceScrollTop = () => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.style.scrollBehavior = 'auto';
    };
    
    // Immediate scroll
    forceScrollTop();
    
    // Multiple backup attempts
    const timers = [
      setTimeout(forceScrollTop, 0),
      setTimeout(forceScrollTop, 1),
      setTimeout(forceScrollTop, 10),
      setTimeout(forceScrollTop, 50),
      setTimeout(forceScrollTop, 100),
      setTimeout(forceScrollTop, 200),
      setTimeout(forceScrollTop, 300)
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      document.documentElement.style.scrollBehavior = '';
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/10 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,139,0.2),transparent)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div 
          className="max-w-7xl mx-auto transition-all duration-300 rounded-full"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18 px-6 sm:px-8">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-white">
              Ocliq
            </Link>
            <Link 
              to="/" 
              className="bg-white text-slate-900 px-4 lg:px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-all duration-200 hover:scale-105 text-sm lg:text-base"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto container-padding text-center px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium text-white">Privacy & Data Protection</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Privacy{' '}
            <span className="bg-gradient-to-r from-[#00FFD1] to-blue-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your privacy matters to us. Learn how we collect, use, and protect your information with complete transparency and industry-leading security.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl shadow-blue-500/5 relative overflow-hidden">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 rounded-3xl"></div>
            <div className="relative z-10">
            
            {/* Last Updated */}
            <div className="mb-8 pb-6 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <p className="text-blue-300 font-medium">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Introduction</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Welcome to Ocliq ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your information. This Privacy Policy applies to our website, services, and all interactions with Ocliq.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As a premium web design and AI automation agency, we understand the importance of data privacy and are committed to handling your information with the utmost care and professionalism.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Information You Provide</h3>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">Contact information (name, email, phone number, company details)</li>
                <li className="list-disc">Project requirements and business information</li>
                <li className="list-disc">Communication preferences and marketing consent</li>
                <li className="list-disc">Payment and billing information (processed securely through third-party providers)</li>
                <li className="list-disc">Feedback, testimonials, and support communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">Automatically Collected Information</h3>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">Device and browser information</li>
                <li className="list-disc">IP address and general location data</li>
                <li className="list-disc">Website usage patterns and analytics</li>
                <li className="list-disc">Cookies and similar tracking technologies</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use your information exclusively for legitimate business purposes:
              </p>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">Providing and delivering our services (website design, optimization, SEO, mobile app development, AI chatbots, lead generation)</li>
                <li className="list-disc">Communicating about projects, updates, and support</li>
                <li className="list-disc">Processing payments and managing accounts</li>
                <li className="list-disc">Sending relevant marketing communications (with explicit consent)</li>
                <li className="list-disc">Improving our services and website functionality</li>
                <li className="list-disc">Complying with legal obligations and protecting our rights</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information. We may share information only in these limited circumstances:
              </p>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">With trusted service providers who assist in delivering our services</li>
                <li className="list-disc">When required by law or to protect our legal rights</li>
                <li className="list-disc">With your explicit consent for specific purposes</li>
                <li className="list-disc">In connection with a business transfer (with appropriate safeguards)</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">Encrypted data transmission and storage</li>
                <li className="list-disc">Regular security audits and updates</li>
                <li className="list-disc">Limited access controls and employee training</li>
                <li className="list-disc">Secure third-party integrations and partnerships</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience and understand how our website is used. You can control cookie preferences through your browser settings.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">Access and review your personal information</li>
                <li className="list-disc">Correct inaccurate or outdated information</li>
                <li className="list-disc">Delete your personal information</li>
                <li className="list-disc">Opt-out of marketing communications</li>
                <li className="list-disc">Data portability and restricted processing</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                To exercise these rights, contact us at <a href="mailto:contact@ocliq.com" className="text-blue-300 hover:text-blue-200 underline">contact@ocliq.com</a>.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your information only as long as necessary for the purposes outlined in this policy or as required by law. When information is no longer needed, it is securely deleted or anonymized.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our website and services may integrate with trusted third-party providers for analytics, payment processing, and service delivery. These providers have their own privacy policies and security measures.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are designed for businesses and are not intended for children under 13. We do not knowingly collect personal information from children.
              </p>
            </section>

            {/* International Transfers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                We may process your information in countries other than your own. When we do, we ensure appropriate safeguards are in place to protect your information in accordance with this policy.
              </p>
            </section>

            {/* Policy Updates */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy periodically. Material changes will be communicated through our website or email. Continued use of our services constitutes acceptance of any updates.
              </p>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Contact Us</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              <div className="bg-gradient-to-br from-blue-950/40 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/10 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-lg">Ocliq</p>
                  </div>
                  <p className="text-blue-300 mb-4">
                    Email: <a href="mailto:contact@ocliq.com" className="hover:text-blue-200 underline transition-colors duration-300 font-medium">contact@ocliq.com</a>
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We are committed to resolving any privacy concerns promptly and professionally with the highest standards of care.
                  </p>
                </div>
              </div>
            </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;