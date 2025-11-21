import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const portfolioProjects = [
    {
      id: 1,
      title: "Floyd Spence",
      category: "Personal Portfolio",
      image: "/screencapture-floydspence-framer-website-2025-11-20-20_25_02.webp",
      result: "+Premium Design",
      url: "https://floydspence.framer.website/",
      description: "Sophisticated personal portfolio with modern animations and premium aesthetics",
      tags: ["Framer", "Animation", "Personal Brand"],
      useIframe: false
    },
    {
      id: 2,
      title: "Pearline",
      category: "Business Platform",
      image: "/screencapture-pearline-2025-11-20-20_30_00.webp",
      result: "+Professional UX",
      url: "https://pearline.com/",
      description: "Clean business platform optimized for service delivery and client engagement",
      tags: ["Business", "Professional", "UX/UI"],
      useIframe: false
    },
    {
      id: 3,
      title: "Kratom Online CA",
      category: "E-commerce",
      image: "/screencapture-kratomonline-ca-2025-11-20-20_30_43.webp",
      result: "+Full Commerce",
      url: "https://kratomonline.ca/",
      description: "Complete e-commerce solution with product catalog and secure checkout",
      tags: ["E-commerce", "Shopify", "Canada"],
      useIframe: false
    },
    {
      id: 4,
      title: "Legal Services",
      category: "Law Firm",
      image: "/lawyer_2.webp",
      result: "+Professional Law",
      url: "#legal-services",
      description: "Professional law firm website with practice areas, attorney profiles, and client portal",
      tags: ["Legal", "Law Firm", "Professional"],
      useIframe: false
    },
    {
      id: 5,
      title: "Persueu Platform",
      category: "SaaS Application", 
      image: "/screencapture-persueu-netlify-app-recommendations-2025-11-20-20_33_45_1.webp",
      result: "+SaaS Excellence",
      url: "https://persueu.netlify.app/",
      description: "Modern SaaS platform with dashboard functionality and data visualization",
      tags: ["SaaS", "Dashboard", "Analytics"],
      useIframe: false
    },
    {
      id: 6,
      title: "Landing Page",
      category: "Marketing",
      image: "/landing (1).webp",
      result: "+High Converting",
      url: "#landing-page",
      description: "High-converting landing page design with compelling copy and optimized conversion flow",
      tags: ["Landing Page", "Marketing", "Conversion"],
      useIframe: false
    }
  ];

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

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % portfolioProjects.length);
      }, 15000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, portfolioProjects.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioProjects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioProjects.length) % portfolioProjects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  const showImageFallback = (iframeEvent: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    const iframe = iframeEvent.target as HTMLIFrameElement;
    const container = iframe.parentElement;
    const loading = container?.querySelector('.iframe-loading') as HTMLElement;
    const fallback = container?.querySelector('.image-fallback') as HTMLElement;
    
    if (loading) {
      loading.style.display = 'none';
    }
    if (fallback) {
      fallback.classList.remove('hidden');
      iframe.style.display = 'none';
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIframe = document.querySelector(`iframe[key="iframe-${currentSlide}"]`) as HTMLIFrameElement;
      if (currentIframe && currentIframe.style.opacity === '0') {
        showImageFallback({ target: currentIframe });
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section 
      ref={sectionRef} 
      id="portfolio" 
      className="section-padding relative overflow-hidden bg-black"
      aria-labelledby="portfolio-heading"
    >
      <div className="absolute inset-0" role="presentation" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-900/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-900/3 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <header className={`text-center mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-gradient-glass">
            <Globe className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Our Work</span>
          </div>
          
          <h2 
            id="portfolio-heading"
            className="heading-lg mb-6 text-shadow"
          >
            Websites That{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            See our latest projects in action. Real websites, real results.
          </p>
        </header>

        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative h-[70vh] rounded-3xl overflow-hidden mb-8 bg-gradient-glass shadow-2xl">
            <div className="absolute inset-0 p-4 sm:p-8 flex items-center justify-center">
              <div className="desktop-frame-mockup group relative w-full max-w-6xl h-full transition-all duration-500 hover:scale-[1.02]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20 bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 shadow-lg">
                  <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-300 bg-gradient-to-b from-white to-slate-50">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    
                    <div className="flex-1 mx-4 sm:mx-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm text-gray-600 bg-slate-200 border border-slate-300">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="truncate">{portfolioProjects[currentSlide].url}</span>
                      </div>
                    </div>
                    
                    <div className="hidden sm:flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-gray-200"></div>
                      <div className="w-6 h-6 rounded bg-gray-200"></div>
                    </div>
                  </div>
                  
                  <div className="relative w-full h-[calc(100%-52px)] sm:h-[calc(100%-60px)] bg-white">
                    {portfolioProjects[currentSlide].useIframe ? (
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center z-10 iframe-loading">
                          <div className="text-center">
                            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mb-4 mx-auto"></div>
                            <p className="text-gray-600 font-medium">Loading {portfolioProjects[currentSlide].title}...</p>
                            <p className="text-gray-400 text-sm mt-1">Please wait while the website loads</p>
                          </div>
                        </div>
                        
                        <iframe
                          key={`iframe-${currentSlide}`}
                          src={portfolioProjects[currentSlide].url}
                          className="w-full h-full border-0 opacity-0 transition-opacity duration-500"
                          title={`${portfolioProjects[currentSlide].title} - Live Website`}
                          loading="eager"
                          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
                          onLoad={(e) => {
                            const iframe = e.target as HTMLIFrameElement;
                            iframe.style.opacity = '1';
                            const loading = iframe.parentElement?.querySelector('.iframe-loading') as HTMLElement;
                            if (loading) {
                              loading.style.opacity = '0';
                              setTimeout(() => {
                                loading.style.display = 'none';
                              }, 500);
                            }
                          }}
                          onError={(e) => {
                            showImageFallback(e);
                          }}
                        />
                        
                        <div className="absolute top-4 right-4 z-20">
                          <div className="bg-green-500 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2 shadow-lg">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span className="text-xs text-white font-medium">Live Website</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full bg-white overflow-auto custom-scrollbar">
                        <div className="w-full h-full relative">
                          <img
                            key={`image-${currentSlide}`}
                            src={portfolioProjects[currentSlide].image}
                            alt={`${portfolioProjects[currentSlide].title} Screenshot`}
                            className="w-full h-auto block portfolio-image-scroll"
                          />
                        </div>
                        
                        <div className="absolute top-4 right-4 z-20">
                          <div className="bg-green-500 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2 shadow-lg">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span className="text-xs text-white font-medium">Live Mode</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                  <a
                    href={portfolioProjects[currentSlide].url}
                    target={portfolioProjects[currentSlide].url?.startsWith('#') ? '_self' : '_blank'}
                    rel={portfolioProjects[currentSlide].url?.startsWith('#') ? '' : 'noopener noreferrer'}
                    className="visit-live-btn group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2 sm:py-4 bg-white text-gray-900 rounded-xl sm:rounded-2xl font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
                  >
                    {!portfolioProjects[currentSlide].useIframe ? (
                      <>
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm sm:text-base">Start Your Project</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm sm:text-base">Visit Live Site</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full group-hover:bg-green-500 transition-colors"></div>
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-6 z-30">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300 hover:scale-110"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            
            <div className="absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-6 z-30">
              <button 
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300 hover:scale-110"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2 sm:gap-4 mb-12 overflow-x-auto pb-2">
            {portfolioProjects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToSlide(index)}
                className={`group relative flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-500 ${
                  index === currentSlide 
                    ? 'scale-110 ring-2 ring-blue-400 ring-opacity-60' 
                    : 'scale-100 hover:scale-105'
                } bg-gradient-glass`}
                aria-label={`View ${project.title}`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    filter: index === currentSlide ? 'brightness(1)' : 'brightness(0.6)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-1 left-1 right-1">
                  <div className="text-xs font-medium text-white truncate px-1">
                    {project.title}
                  </div>
                </div>
                
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-glass">
            <span className="text-white/80 text-sm sm:text-base">Ready for your project?</span>
            <button 
              onClick={() => {
                const element = document.getElementById('leadform');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-secondary group text-sm sm:text-base flex items-center gap-2"
              aria-label="Get your free website mockup"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;