import { useEffect, useRef, useState } from 'react';
import useCountUp from '../hooks/useCountUp';

const stats = [
  { id: 'websites', label: 'Websites Built', value: 50, suffix: '+' },
  { id: 'years', label: 'Years Experience', value: 5, suffix: '' },
  { id: 'expertise', label: 'SaaS & AI Expertise', value: 100, suffix: '%' },
  { id: 'support', label: 'Support Available', value: 24, suffix: '/7' }
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
    <section ref={containerRef} className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <div className="mb-8">
          <blockquote className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-700 italic leading-relaxed">
            "We started Ocliq to bring Apple-level precision to websites built for growth. After 5 years of freelance work and building over 50 websites together, we know what works and what doesn't. We believe great design should drive real business results."
          </blockquote>

          <div className="mt-6 flex items-center justify-center gap-10 text-left">
            <div>
              <div className="font-semibold text-slate-900">Ilyass Rachouady</div>
              <div className="text-sm text-slate-600">Co-Founder & Full Stack Engineer</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Amine Belaoudi</div>
              <div className="text-sm text-slate-600">Co-Founder & Full Stack Engineer</div>
            </div>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, idx) => (
            <div key={s.id}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-bold text-slate-900 mb-2" aria-live="polite">
                {s.id === 'support' ? `${counts[idx]}${s.suffix}` : s.suffix === '%' ? `${counts[idx]}%` : `${counts[idx]}${s.suffix}`}
              </dd>
              <div className="text-slate-600">{s.label}</div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;