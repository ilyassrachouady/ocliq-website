import { useEffect, useRef, useState } from 'react';
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
    imageSrc: '/images/ilyass.jpg', // Update with actual image path
  },
  {
    name: 'Amine Belaoudi',
    designation: 'Co-Founder & Full Stack Engineer',
    imageSrc: '/images/amine.jpg', // Update with actual image path
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
      className="relative w-full overflow-hidden bg-[#000000] py-12 md:py-24 lg:py-32"
    >
      <div className="container grid items-center justify-center gap-12 px-4 text-center md:px-6">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="h-full w-full" fill="none">
            <defs>
              <pattern
                id="grid-about"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M20 0L0 0 0 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-white/20"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-about)" />
          </svg>
        </div>

        {/* Header Section */}
        <div className="relative z-10 grid gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
            <span 
              className="block text-xl sm:text-2xl md:text-3xl font-medium mb-2"
              style={{
                background: 'linear-gradient(135deg, #152e56, #2a96e8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              O U R
            </span>
            <span
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)'
              }}
            >
              FOUNDERS
            </span>
          </h1>
          <blockquote className="mx-auto max-w-2xl text-base sm:text-lg text-white/70 italic leading-relaxed">
            "We started Ocliq to bring Apple-level precision to websites built for growth. After 5 years of freelance work and building over 50 websites together, we know what works and what doesn't. We believe great design should drive real business results."
          </blockquote>
        </div>

        {/* Founders Grid */}
        <div className="relative z-10 mx-auto grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="group relative flex flex-col items-center justify-end overflow-hidden rounded-xl p-8 text-center transition-all duration-300 ease-in-out hover:scale-[1.02]"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
              }}
            >
              {/* Background wave animation */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom scale-y-0 transform rounded-t-full transition-transform duration-500 ease-out group-hover:scale-y-100"
                style={{ 
                  background: 'linear-gradient(to top, rgba(42, 150, 232, 0.2), transparent)',
                  transitionDelay: `${index * 50}ms` 
                }}
              />

              {/* Member Image with Bolt gradient border on hover */}
              <div
                className="relative z-10 h-40 w-40 overflow-hidden rounded-full border-4 transition-all duration-500 ease-out group-hover:scale-105"
                style={{ 
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  transitionDelay: `${index * 100}ms` 
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #152e56, #2a96e8, white)',
                    padding: '4px',
                    borderRadius: '50%'
                  }}
                >
                  <div className="h-full w-full rounded-full bg-[#000000]" />
                </div>
                <img
                  src={founder.imageSrc}
                  alt={founder.name}
                  className="relative h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <h3 className="relative z-10 mt-6 text-2xl font-semibold text-white">
                {founder.name}
              </h3>
              <p className="relative z-10 text-sm text-white/60 mt-2">
                {founder.designation}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <dl className="relative z-10 mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, idx) => (
            <div 
              key={s.id}
              className="p-6 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd 
                className="text-3xl md:text-4xl font-bold mb-2" 
                aria-live="polite"
                style={{
                  background: 'linear-gradient(135deg, #152e56, #2a96e8, white)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {s.id === 'support' ? `${counts[idx]}${s.suffix}` : s.suffix === '%' ? `${counts[idx]}%` : `${counts[idx]}${s.suffix}`}
              </dd>
              <div className="text-white/60 text-sm">{s.label}</div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;