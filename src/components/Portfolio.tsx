import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'PursueU',
      category: 'Education Platform',
      image: 'https://upwork-usw2-prod-file-storage-wp4.s3.us-west-2.amazonaws.com/workplace/attachment/0fecffaf1665eea24708d7a7ec6c0474?response-content-disposition=inline%3B%20filename%3D%22Screenshot%25202025-06-12%2520at%252019.34.49.png%22%3B%20filename%2A%3Dutf-8%27%27Screenshot%25202025-06-12%2520at%252019.34.49.png&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXEWw9t%2BoVSmvgAtIclWhL24AOovuvfEwVW5LjOp3PZAiEA96KiACY6qs5AnWT3tMonIrqo9GWerB9wWyluOLGkxGwqmQUIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Mzk5MzkxNzM4MTkiDN6vou%2F6E6Qu3YKVbSrtBG8uI99%2F77hkLY6qvZkPS8WU70QI4SLFRo1J%2F0Vxu%2Bge1yKj1R%2FDELnyyWSoRJHhp1Ldh6J53G2dHt89IqWY3D4UsNGDbhqN80H4F93Za9JCtQmbJHbbKgTmYGYMKCTCoCRhe4pOGQpCwzNphw%2B5Ptw24%2Fe9nCj7I8bY2xtNFmR7r52o56d9klSzRfDpkrpYZX2GAGb8Uh1B1%2B7ssz3AA8wABguhuvm7wJ4u4OWfOxBLNxX8Ujp56ZH4nG%2F%2FZ24uMnK9BIXOJXSdmc2KABrKndtIe8sfAJqQwhRXAsNR488zY%2F36u6bpiDmlWcKlJkMTDSihH3uV2e0oTYSj3pGVN2op9G98DXqZp2C9M1ix9kD2dzKpEC3U%2BZzXngUQrWDs%2BGj9Y8mnaOZXOx%2FUof8WcOhvgW%2FGxxdpSm%2B4JFsyTHojWTPOE12a8uE9f7QMsmYhR8MjKGFAYn9GvvyL%2BFbn8EACJ0OmUADfTsYbKlGsyU1DloXt3vYUh5jJl%2FjX5Bup4SNbIGK6V6hk697K%2BULgaubBfHbNd66HE1wLCyhMuat5YalrTNui5IaxkVjH%2F8%2BmwHBwPwW4vxdW8jDE3TH7enI4rNyIT%2BAWUjZQEUr%2FfUSYQVB87g3PvhlTYEYv%2FolFTZ6AsbUamuk4%2BqgyYs8RwE%2BWzbS3lW%2FD9inUWfqoOF3LDUQdgM5JTzvColNRLa8HCgonAnPJ28Ot5m%2FbRORZ6oye4B225VF1SL%2F7gMI79g6D5YxRFIcnoTs402DxNMcZEM7l%2FSi%2BgZrkW0TqtThdievCyu%2BF2C0vNQ7%2BepTurx4u1KPMIh8w%2F4t92WlhWTCmxqnEBjqbAV5ng%2Flzk%2BnyoYQaNw2YqYQlAZ9ABCJPBoa6I6eKgiaEHUJ745ZluOS5%2FtTGuVVP%2F8zBT8hN%2FG1lycoGwclob9rgboxoXxXEDCtxkWuG80RMRs5Czhb5D5A%2FcJnQRGwuDpT1zk%2FLyRjquVMgt3sYpUXpQsFtns3oo4RDZlp1am0YifR9r5QLbFIVadoywWcMpmoUGhWnhokafhaD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250730T185203Z&X-Amz-SignedHeaders=host&X-Amz-Expires=599&X-Amz-Credential=ASIA2YR6PYW54RILMSW2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=dac8c9f039440ca7b6aecd90316dc02f92a7078e478a5723baf690dddea9cd10',
      url: 'https://persueu.netlify.app/',
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