import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { siteConfig } from '../config';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="testimonials" className="section-padding bg-background-light">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">What Couples Say</h2>
          <p className="text-lg text-text-dark max-w-2xl mx-auto">
            Don't just take our word for it - hear from couples we've had the pleasure of working with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-text-dark leading-relaxed mb-6 text-center italic">
                "{testimonial.text}"
              </p>
              <p className="font-butler text-lg text-center text-secondary font-medium">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
