import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";

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
  return (
    <section className="bg-background my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

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