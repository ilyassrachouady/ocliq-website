import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Herov2 from './components/Herov2';
import WhatWeDo from './components/WhatWeDo';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';

// Lazy load heavy components
const LazyTestimonials = lazy(() => import('./components/Testimonialsv2'));
const LazyPricing = lazy(() => import('./components/Pricing'));
const LazyAbout = lazy(() => import('./components/About'));
const LazyLeadForm = lazy(() => import('./components/LeadGenerationForm'));
const LazyPrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const LazyTermsOfService = lazy(() => import('./components/TermsOfService'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

// Structured data for homepage
const homepageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ocliq",
  "url": "https://ocliq.com",
  "description": "AI-powered web design and lead generation systems for businesses",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://ocliq.com/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "mainEntity": {
    "@type": "Organization",
    "name": "Ocliq",
    "url": "https://ocliq.com",
    "logo": "https://i.ibb.co/7Ph1KDw/icon-ocliq.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@ocliq.com",
      "contactType": "customer service"
    },
    "areaServed": "Worldwide",
    "knowsAbout": [
      "Web Design",
      "Lead Generation",
      "AI Automation",
      "Chatbot Development",
      "SEO Services",
      "Mobile App Development"
    ]
  }
};

// Home page component
const HomePage = () => {
  return (
    <>
      <SEOHead 
        title="Ocliq | AI-Powered Web Design & Lead Generation Systems"
        description="Transform your business with AI-powered web design and automation. We build high-converting websites, chatbots, and lead generation systems that work 24/7. Get more leads, clients, and revenue."
        keywords="AI web design, lead generation, chatbot development, website optimization, SEO services, mobile app development, business automation, conversion optimization, digital marketing, SaaS solutions"
        url="https://ocliq.com/"
        structuredData={homepageStructuredData}
      />
      <Herov2 />
      <Header />
      <WhatWeDo />
      <Process />
      <Portfolio />
      <Suspense fallback={<LoadingSpinner />}>
        <LazyPricing />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyTestimonials />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyAbout />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyLeadForm />
      </Suspense>
      <Footer />
      <MobileCTA />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Analytics />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/privacy-policy" 
            element={
              <>
                <SEOHead 
                  title="Privacy Policy | Ocliq - Data Protection & Privacy Rights"
                  description="Learn how Ocliq protects your privacy and personal data. Our comprehensive privacy policy outlines data collection, usage, and your privacy rights when using our AI-powered web design services."
                  keywords="privacy policy, data protection, GDPR compliance, personal data, privacy rights, Ocliq privacy"
                  url="https://ocliq.com/privacy-policy"
                  type="article"
                />
                <Suspense fallback={<LoadingSpinner />}>
                  <LazyPrivacyPolicy />
                </Suspense>
              </>
            } 
          />
          <Route 
            path="/terms-of-service" 
            element={
              <>
                <SEOHead 
                  title="Terms of Service | Ocliq - Service Agreement & Legal Terms"
                  description="Review Ocliq's terms of service for our AI-powered web design and lead generation services. Understand our service agreements, user responsibilities, and legal terms."
                  keywords="terms of service, service agreement, legal terms, user agreement, website terms, Ocliq terms"
                  url="https://ocliq.com/terms-of-service"
                  type="article"
                />
                <Suspense fallback={<LoadingSpinner />}>
                  <LazyTermsOfService />
                </Suspense>
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;