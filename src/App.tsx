import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';

import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import WhyDifferent from './components/WhyDifferent';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatWeDo />
      <Process />
      <Portfolio />
      <Testimonials />
      <WhyDifferent />
      <Pricing />
      <About />
      <Contact />
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;