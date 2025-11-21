// import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  // const faqs = [
  //   {
  //     question: 'How long does a typical project take?',
  //     answer: 'Most projects are delivered in 4-6 weeks, significantly faster than traditional agencies thanks to our AI-powered process.'
  //   },
  //   {
  //     question: 'Do you work with small businesses?',
  //     answer: 'Absolutely! Our Essentials plan is designed specifically for startups and small businesses looking to establish a strong digital presence.'
  //   },
  //   {
  //     question: 'What makes your AI approach different?',
  //     answer: 'Our AI analyzes 10,000+ high-converting websites to inform design decisions, then continuously optimizes based on your specific user data.'
  //   },
  //   {
  //     question: 'Do you provide ongoing support?',
  //     answer: 'Yes, all plans include support ranging from 30 days to 1 year, plus optional maintenance packages for long-term partnerships.'
  //   }
  // ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-width mx-auto container-padding">
        {/* Contact Information */}
        {/* <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-lg font-bold text-foreground mb-8 text-balance">Get in Touch</h2>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 mb-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-[#00FFD1]" />
                <a href="mailto:ocliqagency@gmail.com" className="text-foreground hover:text-[#00FFD1] transition-colors text-lg">
                  ocliqagency@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-[#00FFD1]" />
                <span className="text-foreground text-lg">San Francisco, CA</span>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="mailto:ocliqagency@gmail.com"
                className="group bg-[#00FFD1] text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-[#00FFD1]/90 transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
          
          {/* FAQ */}
          {/* <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 text-balance">Frequently Asked Questions</h3>
            <div className="space-y-4 text-left max-w-prose mx-auto">
              {faqs.map((faq, index) => (
                <details key={index} className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    <span className="font-medium text-foreground">{faq.question}</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <div className="p-4 text-foreground/80 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;