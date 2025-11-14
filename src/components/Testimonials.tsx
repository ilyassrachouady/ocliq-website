import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: 'Pearline Anderson',
      role: 'Founder',
      company: 'The Professional Dental Care Products',
      quote: 'Working with Ocliq transformed our online presence. Our e-commerce platform is now professional, fast, and our customers love the seamless shopping experience. Sales have increased significantly!',
      rating: 5
    },
    {
      name: 'Michael Roberts',
      role: 'CEO',
      company: 'Sun Greens',
      quote: 'Ocliq delivered a stunning showcase website that perfectly represents our organic food products. The modern design and smooth navigation have helped us reach more customers than ever before.',
      rating: 5
    },
    {
      name: 'Andy Murrell',
      role: 'Founder',
      company: 'Yorkshire Invites',
      quote: 'Thank you, Ocliq team, for the great service and excellent work. I hope we can collaborate again in the future.',
      rating: 5
    },
    {
      name: 'Erik Snow',
      role: 'Founder',
      company: 'PursueU',
      quote: 'The design exceeded our expectations. Ocliq created an intuitive platform that perfectly captures our vision for personalized education matching.',
      rating: 5
    },
    {
      name: 'Emma Brown',
      role: 'Operations Manager',
      company: 'KratomOnline.ca',
      quote: 'The e-commerce platform Ocliq built is exactly what we needed - professional, secure, and easy to manage. Our online sales have grown substantially since launch.',
      rating: 5
    },
    {
      name: 'David Martinez',
      role: 'Founder & CEO',
      company: 'TechFlow Solutions',
      quote: 'Outstanding work! Ocliq not only delivered on time but exceeded all our expectations. The website is fast, responsive, and our conversion rates have doubled since launch.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(testimonials.length / 3) - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="heading-lg font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-responsive text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Don't just take our word for it. Here's what industry leaders say about working with Ocliq.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-all duration-300 hover:scale-110 border border-slate-200"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-all duration-300 hover:scale-110 border border-slate-200"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl border border-slate-200 hover:border-[#00FFD1]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <Quote className="w-8 h-8 text-[#00FFD1] mb-6 opacity-60" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center space-x-4">
                  {/* Initials circle (photos removed for credibility) */}
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-700">
                    {testimonial.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                    <div className="text-sm font-medium text-[#00FFD1]">{testimonial.company}</div>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#00FFD1]/5 to-blue-500/5 rounded-full -z-10 group-hover:scale-110 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-[#00FFD1]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
