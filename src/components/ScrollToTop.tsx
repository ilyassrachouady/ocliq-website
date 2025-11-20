import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Aggressive scroll reset - multiple methods and timings
    const scrollToTop = () => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.documentElement.style.scrollBehavior = 'auto';
      window.pageYOffset = 0;
      window.scrollY = 0;
    };

    // Immediate scroll
    scrollToTop();
    
    // Multiple backup scrolls at different intervals
    const timers = [
      setTimeout(scrollToTop, 0),
      setTimeout(scrollToTop, 10),
      setTimeout(scrollToTop, 50),
      setTimeout(scrollToTop, 100),
      setTimeout(scrollToTop, 200)
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      document.documentElement.style.scrollBehavior = '';
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;