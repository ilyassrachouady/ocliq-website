import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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

    // Trigger load animation
    setTimeout(() => setIsLoaded(true), 100);

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
      {/* Animated Background - Matching Privacy Policy */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/10 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,139,0.2),transparent)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation - Matching Privacy Policy */}
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

      {/* Header - Matching Privacy Policy */}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm font-medium text-white">Terms & Agreements</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Terms of{' '}
            <span className="bg-gradient-to-r from-[#00FFD1] to-blue-400 bg-clip-text text-transparent">
              Service
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Clear terms for our premium web design and AI automation services. Professional agreements that protect both our clients and our agency with complete transparency.
          </p>
        </div>
      </div>

      {/* Content - Matching Privacy Policy */}
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
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Agreement to Terms</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Welcome to Ocliq. These Terms of Service ("Terms") govern your use of our website, services, and all related offerings provided by Ocliq ("we," "our," or "us"). By accessing our website or engaging our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If you do not agree to these Terms, please do not use our services. We reserve the right to modify these Terms at any time, with notice provided through our website or email communications.
              </p>
            </section>

            {/* Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ocliq provides premium digital services to businesses including:
              </p>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">Website design and development</li>
                <li className="list-disc">Website optimization and performance enhancement</li>
                <li className="list-disc">Search Engine Optimization (SEO) services</li>
                <li className="list-disc">Mobile application development</li>
                <li className="list-disc">AI chatbot development and implementation</li>
                <li className="list-disc">Lead generation and CRM automation solutions</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Our services are designed for small businesses, SaaS companies, consultants, and e-commerce brands seeking professional digital solutions.
              </p>
            </section>

            {/* Service Agreement Process */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Service Agreement Process</h2>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Project Initiation</h3>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">Services begin upon signed contract and initial payment</li>
                <li className="list-disc">Project scope, timeline, and deliverables are outlined in individual contracts</li>
                <li className="list-disc">Changes to project scope require written agreement and may affect pricing</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">Client Responsibilities</h3>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">Provide timely feedback and required materials</li>
                <li className="list-disc">Ensure accuracy of provided content and information</li>
                <li className="list-disc">Maintain communication throughout project duration</li>
                <li className="list-disc">Make payments according to agreed schedules</li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Pricing and Billing</h3>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">All prices are quoted in USD unless otherwise specified</li>
                <li className="list-disc">Payment schedules are outlined in individual project contracts</li>
                <li className="list-disc">Late payments may incur additional fees and project delays</li>
                <li className="list-disc">Refunds are handled according to our refund policy outlined in contracts</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">Payment Processing</h3>
              <p className="text-gray-300 leading-relaxed">
                We use secure, industry-standard payment processing. Your payment information is encrypted and protected according to PCI DSS standards.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Ownership Rights</h3>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">Upon full payment, clients receive ownership of custom-developed deliverables</li>
                <li className="list-disc">Ocliq retains rights to proprietary methodologies, frameworks, and tools</li>
                <li className="list-disc">Third-party software and plugins remain subject to their respective licenses</li>
                <li className="list-disc">We reserve the right to showcase completed work in our portfolio with client permission</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">Content Responsibility</h3>
              <p className="text-gray-300 leading-relaxed">
                Clients are responsible for ensuring all provided content is original, properly licensed, or used with permission. Ocliq is not liable for copyright infringement resulting from client-provided materials.
              </p>
            </section>

            {/* Service Guarantees */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Service Guarantees and Limitations</h2>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Performance Standards</h3>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">We strive for excellence and professional standards in all deliverables</li>
                <li className="list-disc">Website performance optimization is subject to hosting environment and content</li>
                <li className="list-disc">SEO results depend on various factors and cannot be guaranteed</li>
                <li className="list-disc">Support and maintenance terms are specified in individual contracts</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">Limitation of Liability</h3>
              <p className="text-gray-300 leading-relaxed">
                Our liability is limited to the amount paid for services. We are not liable for indirect, consequential, or punitive damages. This includes but is not limited to lost profits, data loss, or business interruption.
              </p>
            </section>

            {/* Privacy and Data */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Privacy and Data Handling</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your privacy is important to us. Our data handling practices are detailed in our Privacy Policy. By using our services, you consent to our privacy practices as outlined in that document.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Confidentiality</h3>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">We maintain strict confidentiality regarding client business information</li>
                <li className="list-disc">Non-disclosure agreements available upon request for sensitive projects</li>
                <li className="list-disc">Client data is protected with industry-standard security measures</li>
              </ul>
            </section>

            {/* Communications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Communications</h2>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Email Communications</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                By engaging our services or contacting us, you consent to receive communications from Ocliq including:
              </p>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">Project updates and service-related communications</li>
                <li className="list-disc">Invoice and payment notifications</li>
                <li className="list-disc">Relevant marketing communications (with option to unsubscribe)</li>
                <li className="list-disc">Important service announcements</li>
              </ul>
              
              <p className="text-gray-300 leading-relaxed">
                All emails are sent from <strong>contact@ocliq.com</strong> only. You may opt-out of marketing communications at any time while continuing to receive essential service communications.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Project Termination</h3>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">Either party may terminate services with written notice</li>
                <li className="list-disc">Termination terms and fees are specified in individual contracts</li>
                <li className="list-disc">Work completed prior to termination remains billable</li>
                <li className="list-disc">Deliverables are provided upon settlement of outstanding balances</li>
              </ul>
            </section>

            {/* Disclaimer */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimers</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our services are provided "as is" without warranties of any kind. While we strive for excellence, we cannot guarantee specific business outcomes, search engine rankings, or conversion rates.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Third-Party Services</h3>
              <p className="text-gray-300 leading-relaxed">
                We may recommend or integrate third-party services. These services have their own terms and policies. Ocliq is not responsible for third-party service performance or data handling.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Dispute Resolution</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We prefer to resolve disputes through direct communication. If disputes cannot be resolved directly:
              </p>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">Mediation will be attempted before litigation</li>
                <li className="list-disc">Disputes are subject to the jurisdiction where Ocliq is incorporated</li>
                <li className="list-disc">These Terms are governed by applicable local laws</li>
              </ul>
            </section>

            {/* Compliance */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Legal Compliance</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our services and these Terms comply with applicable laws and regulations including:
              </p>
              <ul className="text-gray-300 space-y-2 mb-6 pl-6">
                <li className="list-disc">Data protection and privacy regulations</li>
                <li className="list-disc">Email marketing compliance (CAN-SPAM, GDPR)</li>
                <li className="list-disc">Accessibility standards and best practices</li>
                <li className="list-disc">Industry-specific regulations as applicable</li>
              </ul>
            </section>

            {/* Updates */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Terms Updates</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms periodically. Material changes will be communicated through our website or email. Continued use of our services after updates constitutes acceptance of revised Terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Contact Information</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Questions about these Terms of Service? We're here to help:
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
                    Our team is committed to clear communication and professional service delivery with complete transparency.
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

export default TermsOfService;