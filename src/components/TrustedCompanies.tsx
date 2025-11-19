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
      logo: '/images/intea-logo.webp',
      alt: 'Intea Arabia Logo'
    },
    {
      name: 'Pearline',
      logo: 'https://pearline.com/wp-content/uploads/2024/04/Logo.png',
      alt: 'Pearline Logo'
    },
    {
      name: 'Sun Co',
      logo: '/sun-logo.webp',
      alt: 'Sun Co Logo'
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden" style={{ background: '#000000' }}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0127c1]/3 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-8 h-8 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)' }}>
            Trusted by Businesses That Demand{' '}
            <span className="bg-gradient-to-r from-[#152e56] via-[#2a96e8] to-white bg-clip-text text-transparent" style={{ textShadow: 'none' }}>
              Excellence
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            These are just a few of the amazing clients we've helped transform their digital presence. From e-commerce to professional services, we deliver results that matter.
          </p>
        </div>

        {/* Companies Logos */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
          <p className="text-center text-sm font-semibold text-white/60 tracking-wider uppercase mb-8">
            A Few of Our Valued Clients
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 group rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="max-h-16 w-auto object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                  width="64"
                  height="64"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
          <button className="group text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2" style={{
            background: 'linear-gradient(135deg, #152e56, #2a96e8, white)'
          }}>
            <span>Transform My Website</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          
          <p className="text-white/60 mt-6 text-sm">
            Join 200+ companies that chose excellence over average
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
