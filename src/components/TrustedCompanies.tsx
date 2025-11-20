import { useEffect, useRef, useState } from 'react';
const TrustedCompanies = () => {
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

  const companies = [
    {
      name: 'Kratom Online',
      logo: 'https://kratomonline.ca/wp-content/uploads/2025/06/kratom_logo-1-1-1024x232.png',
      alt: 'Kratom Online Logo'
    },
    {
      name: 'Enrolla',
      logo: 'https://cdn.prod.website-files.com/68093ca7e2c145ed15fcef51/680f97a224f1cbf58b74a346_enrolla-logo.avif',
      alt: 'Enrolla Logo'
    },
    {
      name: 'toitures lv',
      logo: 'https://i.ibb.co/5WDKP6wh/Toitures-LV-Rouge.png',
      alt: 'toitureslv Logo'
    },
    {
      name: 'Yorkshire Invites',
      logo: 'https://yorkshireinvites.co.uk/wp-content/uploads/2022/10/shop-sign-YWI-2-1024x123.png',
      alt: 'Yorkshire Invites Logo'
    },
    {
      name: 'Intea Arabia',
      logo: '/intea-logo.png',
      alt: 'Intea Arabia Logo'
    },
    {
      name: 'Pearline',
      logo: 'https://pearline.com/wp-content/uploads/2024/04/Logo.png',
      alt: 'Pearline Logo'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Simple Title and Animation Only */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-center text-sm font-semibold text-white/60 tracking-wider uppercase mb-8">
            A Few of Our Valued Clients
          </p>
          
          {/* Endless Animated Scrolling Container */}
          <div className="relative overflow-hidden">
            {/* Single Wide Row - Endless Animation */}
            <div className="flex animate-endless-scroll space-x-12">
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div
                  key={`endless-${index}`}
                  className="flex-shrink-0 flex items-center justify-center p-8 group rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-gradient-glass"
                  style={{
                    minWidth: '280px',
                    height: '120px'
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.alt}
                    className="max-h-16 w-auto object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Enhanced Gradient Overlays for Seamless Endless Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        {/* CSS Animations */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes endless-scroll {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-33.333%, 0, 0); }
            }
            
            .animate-endless-scroll {
              animation: endless-scroll 12s linear infinite;
              will-change: transform;
              backface-visibility: hidden;
              perspective: 1000px;
            }
          `
        }} />
      </div>
    </section>
  );
};

export default TrustedCompanies;
