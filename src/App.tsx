import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Herov2 from './components/Herov2';
import WhatWeDo from './components/WhatWeDo';

import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Testimonialsv2 from './components/Testimonialsv2';
import TrustedCompanies from './components/TrustedCompanies';
// import WhyDifferent from './components/WhyDifferent';
import Pricing from './components/Pricing';
import About from './components/About';
import LeadGenerationForm from './components/LeadGenerationForm';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Analytics />
      <Herov2 />
      <Header />
      <WhatWeDo />
      <Process />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <Testimonialsv2 />
      {/* <WhyDifferent /> */}
      {<About />}
      <LeadGenerationForm />
      {/* <Contact /> */}
      <TrustedCompanies />
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;