import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Erik Snow',
      role: 'Founder',
      company: 'PursueU',
      image: 'https://upwork-usw2-prod-file-storage-wp4.s3.us-west-2.amazonaws.com/workplace/attachment/e1d86ff83514b45ebc4aa3206383bd76?response-content-disposition=inline%3B%20filename%3D%22Screenshot%25202025-06-05%2520at%25209.00.31%25E2%2580%25AFAM.png%22%3B%20filename%2A%3Dutf-8%27%27Screenshot%25202025-06-05%2520at%25209.00.31%25E2%2580%25AFAM.png&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI%2BjqPWCp54mbSwEARBqjfccQI2f2p9LzlOdwufGbhjAIhAOHP%2F2L7%2Fbglv9aXeVdKprn0X3zFlTY4ikkjme9aGoEHKpkFCMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNzM5OTM5MTczODE5IgwNxLAi0CAQH4obXJcq7QRnpQb%2FIhybDb9HtlbOzbD1XIuFDlHkLNpIrJPAULJitfX%2BCIc%2FGZ5uquvGWfyfAsmQ1n34i01%2FNxgNGP2kouihdO4Cc1wGGNXRK%2Ft0hLpj9NWY28Eghge%2BZZpQlX8Cin7cxXYNJwEz3tktd7xjOb3jeXQGVmZuLDBtCArOP2BAEJWQNv2tU5r4fNX4sFjOcclJYXuKqph1t3MoEvlTDSTf%2BFSwyKFR9y1RUbKPzkEqEKQpjZPJEWEJENReYlbYSbtIh%2FiylaS2UN6f4ZVIkkjpotkLc8ZgGAu%2BuYAIpuchVEk767UDy%2BHP4EHyfwTarzN4czjU2%2Fjn9j%2FDfzAY5PIWINXWqWrtkaDIWckPzK31gceuWDy3x2kMBycXBkwjNrps5ISta3hZr%2BKJ40eANL6%2F37%2B%2FD5hYbRgMpM9eLrXrSeBqpWEGb1PdkJCc7yV0DJb2c%2F7d2rPoBYgSwawKdWxdj54QDfRL4HsTPxRQxaiEfj0U4ESvVVWFZXYJk2NHgC3p3%2FHa0QFYgrU4pkytVr00rn1RZvKJNKe%2F9Nm%2BwG7uUEDJkEWoMw14G%2FobrIiOpDYW98VWEMfMrpVRkOzD8VKPQcbtEgyUjuTlzwn%2BP1h0CMA%2FNYwE2Pz%2Fgsrscxt7KT0C67TXwXDWOemzYKxDHDv1ktJOknfNObuDWv5ABhQtRj5%2FtIiFNxu1UNuzoXEZZAej1XCMl4CikKMAWiDjtZINMQml2ejbEF4R8z8aOdIJ7WlCQgIXX4Ry%2BaQ5eUk9183iyVxXo%2BrK9QoxCOoFa5X%2FCcWhl7%2FZRAVlNkclVD3wCODmwYAY%2Fn9cMRbbH4sw2NqpxAY6mgHdirkkkB7Lyb3E8x2%2BlRnBnMNLeWwMWjACQSikkfXWAEV%2B4rfQNQKoQBQT83Nt%2BbCLuQ7DWhEtwfdpGoNrTghiS2Xx7%2FVCi1KELR88xvxy1ty7FlEwJK13REqzB9bPE96ZkIkXKUjYcGIcEa8RAgSwR48mhF4Y5Lqunx4lSYLoepMgOZjMHI9MkjBzQQ%2BdbR%2FtOpCYGsB0M6in&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250730T193153Z&X-Amz-SignedHeaders=host&X-Amz-Expires=599&X-Amz-Credential=ASIA2YR6PYW54Y5B2XWZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=20915e6f214481b025dcd0fb59893d7db543f8af64a40394d2d5ba22c71278b5',
      quote: 'The design exceeded our expectations. Ocliq created an intuitive platform that perfectly captures our vision for personalized education matching.',
      rating: 5
    },
    {
      name: 'Philippe Lemay',
      role: 'CEO, Consultant',
      company: 'Lemay Consulting',
      image: 'https://d2gjqh9j26unp0.cloudfront.net/profilepic/a300b9afe6ec3aacbd038669039b5c6c',
      quote: 'Working with Ocliq transformed our online presence. The professional design perfectly represents our consulting services and has significantly improved our client acquisition.',
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