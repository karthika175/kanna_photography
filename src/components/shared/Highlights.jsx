import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { FaCheckCircle } from 'react-icons/fa';

const Highlights = ({ items, description }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {description && (
            <p className="text-lg text-text-dark text-center mb-12 font-metropolis">
              {description}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <FaCheckCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
                <span className="text-lg font-metropolis text-text-dark">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
