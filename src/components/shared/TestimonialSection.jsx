import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { FaStar } from 'react-icons/fa';

const TestimonialSection = ({ testimonial }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  if (!testimonial) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-butler mb-8">What Our Clients Say</h2>

          <div className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-sm">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-2xl" />
              ))}
            </div>

            <p className="text-xl md:text-2xl font-metropolis text-text-dark mb-6 italic">
              "{testimonial.text}"
            </p>

            <p className="text-lg font-butler text-primary">
              {testimonial.name}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
