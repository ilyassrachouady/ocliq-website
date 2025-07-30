import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Erik Snow',
      role: 'Founder',
      company: 'PursueU',
      image: 'https://i.ibb.co/cchKKP31/Screenshot-2025-06-05-at-9-00-31-AM.png',
      quote: 'The design exceeded our expectations. Ocliq created an intuitive platform that perfectly captures our vision for personalized education matching.',
      rating: 5
    },
    {
      name: 'Amine Belaoudi',
      role: 'Co-Founder',
      company: 'PursueU',
      image: 'https://i.ibb.co/xtF5jSLX/1734732308412.jpg',
      quote: 'Ocliq has been instrumental in transforming our website into a powerful lead generation and profit-driving machine. Their team is committed to delivering exceptional results.',
      rating: 5
    },
    {
      name: 'Emma Brown',
      role: 'Operations Manager',
      company: 'KratomOnline.ca',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'The e-commerce platform Ocliq built is exactly what we needed - professional, secure, and easy to manage. Our online sales have grown substantially since launch.',
      rating: 5
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
