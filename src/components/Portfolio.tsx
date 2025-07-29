import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'TechFlow SaaS',
      category: 'B2B Software',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      metrics: ['+127% conversions', '2.1s load time', '+85% user engagement'],
      description: 'Complete website analysis, redesign and optimization of a B2B SaaS platform, resulting in significant conversion improvements and lead generation.',
      beforeAfter: 'Before: 2.3% conversion rate | After: 5.2% conversion rate',
      testimonial: '"Ocliq transformed our website into a lead generation machine. Our demo requests increased by 127% in just 3 months."'
    },
    {
      title: 'EcoLux E-commerce',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      metrics: ['+189% revenue', '3x mobile sales', '+156% AOV'],
      description: 'Complete e-commerce redesign focusing on user experience, mobile optimization, and conversion rate improvement.',
      beforeAfter: 'Before: $180k monthly | After: $520k monthly',
      testimonial: '"The new design not only looks amazing but our sales have nearly tripled. Best investment we\'ve made."'
    },
    {
      title: 'MedConnect',
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      metrics: ['+195% appointments', '60% faster booking', '+78% retention'],
      description: 'Healthcare website redesign focusing on trust-building, streamlined appointment booking, and patient experience optimization.',
      beforeAfter: 'Before: 450 appointments/month | After: 1,325 appointments/month',
      testimonial: '"Patient bookings nearly tripled after the redesign. The new website builds trust and makes booking effortless."'
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
    <section id="portfolio" className="py-8 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
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
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center space-x-2 group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
                <ExternalLink className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-600">View Live Site</span>
              </div>
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
              
              <div className="bg-gradient-to-r from-[#00FFD1]/10 to-blue-500/10 rounded-xl p-6 mb-8">
                <div className="text-sm font-semibold text-slate-700 mb-2">Results</div>
                <div className="text-slate-600">{project.beforeAfter}</div>
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