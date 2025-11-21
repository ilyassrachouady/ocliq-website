import { useEffect, useRef, useState } from 'react';
import { Linkedin } from 'lucide-react';
import useCountUp from '../hooks/useCountUp';

const stats = [
  { id: 'websites', label: 'Websites Built', value: 50, suffix: '+' },
  { id: 'years', label: 'Years Experience', value: 5, suffix: '' },
  { id: 'expertise', label: 'SaaS & AI Expertise', value: 100, suffix: '%' },
  { id: 'support', label: 'Support Available', value: 24, suffix: '/7' }
];

const founders = [
  {
    name: 'Ilyass Rachouady',
    designation: 'Co-Founder & Full Stack Engineer',
    imageSrc: '/ilyass.png',
    linkedinUrl: 'https://www.linkedin.com/in/ilyassrachouady/',
  },
  {
    name: 'Amine Belaoudi',
    designation: 'Co-Founder & Full Stack Engineer',
    imageSrc: '/amine.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/aminebelaoudi/',
  }
];

const About = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // call hooks in top-level order (explicit to satisfy hooks rules)
  const countWebsites = useCountUp(stats[0].value, visible, 1200);
  const countYears = useCountUp(stats[1].value, visible, 1200);
  const countExpertise = useCountUp(stats[2].value, visible, 1200);
  const countSupport = useCountUp(stats[3].value, visible, 1200);
  const counts = [countWebsites, countYears, countExpertise, countSupport];

  return (
    <section 
      ref={containerRef} 
      className="section-padding relative overflow-hidden" 
      style={{ background: '#000000' }}
      aria-labelledby="founders-heading"
    >
      {/* Background Effects - Matching Hero/Portfolio */}
      <div className="absolute inset-0" role="presentation" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0127c1]/3 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">

        {/* Header Section - Matching Hero/Portfolio Theme */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <span className="text-sm font-medium text-white">Meet Our Team</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-center">
            <span className="block mb-2" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)' }}>
              Our
            </span>
            <span className="bg-gradient-to-r from-[#00FFD1] to-blue-400 bg-clip-text text-transparent">
              Founders
            </span>
          </h1>
          
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            We started Ocliq to bring Apple-level precision to websites built for growth. After years of building successful projects, we know what drives real results.
          </p>
        </header>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="group p-8 rounded-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] bg-gradient-glass hover:bg-white/10 hover:border-cyan-400/50 shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-cyan-300/50 transition-all duration-500 group-hover:scale-105">
                    <img
                      src={founder.imageSrc}
                      alt={`${founder.name} - ${founder.designation}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'h-full w-full rounded-full flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-800';
                          fallback.textContent = founder.name.split(' ').map(n => n[0]).join('');
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                  {founder.name}
                </h3>

                {/* Title */}
                <p className="text-subtle text-sm font-medium mb-4">
                  {founder.designation}
                </p>

                {/* LinkedIn Button */}
                <a
                  href={founder.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium nav-text bg-gradient-glass hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                  aria-label={`Connect with ${founder.name} on LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div 
              key={s.id}
              className="p-6 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
              }}
            >
              <div className="text-center">
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2" 
                  aria-live="polite"
                  style={{
                    background: 'linear-gradient(135deg, #00FFD1, #2a96e8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {s.id === 'support' ? `${counts[idx]}${s.suffix}` : s.suffix === '%' ? `${counts[idx]}%` : `${counts[idx]}${s.suffix}`}
                </div>
                <div className="text-white/70 text-sm font-medium">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;