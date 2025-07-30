import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'PursueU',
      category: 'Education Platform',
      url: 'https://persueu.netlify.app/',
      image: 'https://i.ibb.co/cchKKP31/Screenshot-2025-06-05-at-9-00-31-AM.png',
      metrics: ['3k+ Happy Students', '5-Min Quiz', 'Personalized Matching'],
      description: 'Complete educational platform redesign featuring an interactive program matching system. Built a comprehensive quiz-driven experience that helps students discover their ideal academic programs through personalized assessments and detailed program recommendations.',
      beforeAfter: 'Transformed student engagement with modern quiz-driven program discovery',
      testimonial: '"The design exceeded our expectations. Ocliq created an intuitive platform that perfectly captures our vision for personalized education matching." - PursueU Team',
      features: ['Personalized Program Matching', 'Interactive Quiz System', 'Student Success Stories', 'Mobile-Optimized Experience']
    },
    {
      title: 'LemayConsulting',
      category: 'Business Consulting',
      image: 'https://amineb.site/assets/images/lemay.png',
      url: 'https://lemayconsulting.com',
      metrics: ['Professional Design', 'Lead Generation', 'Mobile Responsive'],
      description: 'Professional consulting website designed to establish credibility and generate qualified leads for business consulting services.',
      beforeAfter: 'Modern professional presence for business consulting',
      testimonial: '"The new website perfectly represents our professional services and has significantly improved our client acquisition process."',
      features: ['Professional Branding', 'Service Showcase', 'Contact Integration', 'SEO Optimized']
    },
    {
      title: 'KratomOnline.ca',
      category: 'E-commerce',
      image: 'https://amineb.site/assets/images/kratom.png',
      url: 'https://kratomonline.ca',
      metrics: ['E-commerce Platform', 'Product Catalog', 'Secure Checkout'],
      description: 'Complete e-commerce solution for kratom products with secure payment processing, product catalog, and customer management system.',
      beforeAfter: 'Full-featured e-commerce platform for specialized products',
      testimonial: '"The e-commerce platform is exactly what we needed - professional, secure, and easy to manage our product inventory."',
      features: ['Product Management', 'Secure Payments', 'Inventory System', 'Customer Accounts']
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Portfolio & Case Studies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Real results from real businesses. See how our proven approach delivers measurable growth and increased profits.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <div className="text-xs sm:text-sm font-medium opacity-80 mb-1">{project.category}</div>
                  <div className="text-lg sm:text-xl font-bold">{project.title}</div>
                </div>
              </div>
              
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center space-x-2 group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 hover:bg-[#00FFD1] hover:text-white"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">View Live Site</span>
              </a>
            </div>
            
            <div className="order-1 lg:order-2 px-4 sm:px-0">
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FFD1]" />
                <span className="text-xs sm:text-sm font-semibold text-[#00FFD1] uppercase tracking-wide">Case Study</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-none lg:max-w-lg">
                {project.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 leading-tight">{metric}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-[#00FFD1]/10 to-blue-500/10 rounded-xl p-6 mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">Project Overview</div>
                <div className="text-slate-600">{project.beforeAfter}</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-3">Key Features</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#00FFD1] rounded-full"></div>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">Client Testimonial</div>
                <div className="text-slate-600 italic">{project.testimonial}</div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-12">
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:border-[#00FFD1]/50 hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </button>
            
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject ? 'bg-[#00FFD1] scale-125' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:border-[#00FFD1]/50 hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
