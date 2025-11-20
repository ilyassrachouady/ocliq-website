import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Herov2 from './components/Herov2';
import WhatWeDo from './components/WhatWeDo';
import Process from './components/Process';
import Testimonialsv2 from './components/Testimonialsv2';
import TrustedCompanies from './components/TrustedCompanies';
import Pricing from './components/Pricing';
import About from './components/About';
import LeadGenerationForm from './components/LeadGenerationForm';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ScrollToTop from './components/ScrollToTop';

// Home page component
const HomePage = () => {
  return (
    <>
      <Herov2 />
      <Header />
      <WhatWeDo />
      <Process />
      <Pricing />
      <Testimonialsv2 />
      <About />
      <LeadGenerationForm />
      <TrustedCompanies />
      <Footer />
      <MobileCTA />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Analytics />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;