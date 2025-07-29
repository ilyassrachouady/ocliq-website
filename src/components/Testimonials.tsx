import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow SaaS',
      company: 'TechFlow',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'Ocliq transformed our entire business. The AI-powered design increased our conversion rate by 127% in just 3 months. Their attention to detail is unmatched.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, EcoLux',
      company: 'EcoLux',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'Working with Ocliq was like having Apple design our website. The process was seamless, and the results speak for themselves – our revenue doubled.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Director, MedConnect',
      company: 'MedConnect',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'The level of sophistication in their AI-driven approach is remarkable. Patient bookings increased by 95%, and the user experience is now flawless.',
      rating: 5
    }
  ];

  return (
    <section className="py-8 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Don't just take our word for it. Here's what industry leaders say about working with Ocliq.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
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
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
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
      </div>
    </section>
  );
};

export default Testimonials;