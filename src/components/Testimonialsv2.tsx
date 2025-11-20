import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "The design exceeded our expectations. Ocliq created an intuitive platform that perfectly captures our vision.",
    name: "Erik Snow",
    role: "Founder",
    company: "PursueU",
    rating: 5,
  },
  {
    quote: "The e-commerce platform Ocliq built is exactly what we needed - professional, secure, and easy to manage.",
    name: "Emma Brown",
    role: "Operations Manager",
    company: "Kratom Online",
    rating: 5,
  },
  {
    quote: "Outstanding work! Ocliq not only delivered on time but exceeded all our expectations.",
    name: "David Martinez",
    role: "Founder & CEO",
    company: "TechFlow Solutions",
    rating: 5,
  },
  {
    quote: "Working with Ocliq transformed our online presence. Our e-commerce platform is now professional, fast, and our customers love it.",
    name: "Pearline Anderson",
    role: "Founder",
    company: "Dental Pro",
    rating: 5,
  },
  {
    quote: "Ocliq delivered a stunning showcase website that perfectly represents our products. The modern design helped us reach more customers.",
    name: "Michael Roberts",
    role: "CEO",
    company: "Sun Greens",
    rating: 5,
  },
  {
    quote: "Thank you, Ocliq team, for the great service and excellent work. I hope we can collaborate again in the future.",
    name: "Andy Murrell",
    role: "Founder",
    company: "Yorkshire Invites",
    rating: 5,
  },
  {
    quote: "Their team built a fast, reliable site that improved our conversion rate and streamlined our checkout process.",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
    company: "GreenCart",
    rating: 5,
  },
  {
    quote: "They understood our needs and delivered a tailored solution that increased engagement across our platform.",
    name: "Sana Sheikh",
    role: "Sales Manager",
    company: "SalesBoost",
    rating: 5,
  },
  {
    quote: "Since launch we've seen a marked improvement in metrics and customer satisfaction. Highly recommended.",
    name: "Hassan Ali",
    role: "E-commerce Manager",
    company: "ShopWave",
    rating: 5,
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
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

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden" style={{ background: '#000000' }}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0127c1]/3 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0127c1]/8 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-gradient-primary">
            <span className="text-sm font-medium text-white">Testimonials</span>
          </div>

          <h2 className="heading-lg mb-3 sm:mb-4 md:mb-6">
            What our{' '}
            <span className="bg-gradient-to-r from-[#00FFD1] via-[#0080ff] to-[#0127c1] bg-clip-text text-transparent">
              users say
            </span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            See what our customers have to say about us.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;