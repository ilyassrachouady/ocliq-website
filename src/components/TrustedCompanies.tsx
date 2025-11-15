import React from 'react';
import sunGrenslogo from '../assets/logos/sun-greens.png';
import inteaLogo from '../assets/logos/intea-arabia.png';
const TrustedCompanies = () => {
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
      name: 'Sun Greens',
      logo: sunGrenslogo,
      alt: 'Sun Greens Logo'
    },
    {
      name: 'Yorkshire Invites',
      logo: 'https://yorkshireinvites.co.uk/wp-content/uploads/2022/10/shop-sign-YWI-2-1024x123.png',
      alt: 'Yorkshire Invites Logo'
    },
    {
      name: 'Intea Arabia',
      logo: inteaLogo,
      alt: 'Intea Arabia Logo'
    },
    {
      name: 'Pearline',
      logo: 'https://pearline.com/wp-content/uploads/2024/04/Logo.png',
      alt: 'Pearline Logo'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
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
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Trusted by industry leaders who refuse to settle for average.
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            From SaaS unicorns to Fortune 500 enterprises, we've engineered platforms that drive over $180M in annual revenue.
          </p>
        </div>

        {/* Companies Logos */}
        <div className="mb-12">
          <p className="text-center text-sm font-semibold text-slate-400 tracking-wider uppercase mb-8">
            Trusted by Industry Leaders
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 group"
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
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group bg-[#d4a574] text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-[#c49563] transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
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
          
          <p className="text-slate-400 mt-6 text-sm">
            Join 200+ companies that chose excellence over average
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
