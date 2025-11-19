import React, { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Herov2 from './components/Herov2';
import SkeletonLoader from './components/SkeletonLoader';

const WhatWeDo = React.lazy(() => import('./components/WhatWeDo'));
const Process = React.lazy(() => import('./components/Process'));
const Testimonialsv2 = React.lazy(() => import('./components/Testimonialsv2'));
const TrustedCompanies = React.lazy(() => import('./components/TrustedCompanies'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const About = React.lazy(() => import('./components/About'));
const LeadGenerationForm = React.lazy(() => import('./components/LeadGenerationForm'));
const Footer = React.lazy(() => import('./components/Footer'));
const MobileCTA = React.lazy(() => import('./components/MobileCTA'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Analytics />
      <Herov2 />
      <Header />
      <Suspense fallback={<SkeletonLoader />}>
        <WhatWeDo />
        <Process />
        <Pricing />
        <Testimonialsv2 />
        <About />
        <LeadGenerationForm />
        <TrustedCompanies />
        <Footer />
        <MobileCTA />
      </Suspense>
    </div>
  );
}

export default App;