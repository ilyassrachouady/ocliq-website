import React, { Suspense, lazy } from 'react';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ children, fallback = null }) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

// Lazy load heavy components
export const LazyTestimonials = lazy(() => import('./Testimonialsv2'));
export const LazyPricing = lazy(() => import('./Pricing'));
export const LazyAbout = lazy(() => import('./About'));
export const LazyLeadForm = lazy(() => import('./LeadGenerationForm'));

export default LazyWrapper;