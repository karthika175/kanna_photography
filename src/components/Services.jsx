import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { siteConfig } from '../config';
import { FaCamera, FaHeart, FaVideo } from 'react-icons/fa';

const iconMap = {
  camera: FaCamera,
  heart: FaHeart,
  video: FaVideo,
};

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="services" className="section-padding bg-background-light">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-lg text-text-dark max-w-2xl mx-auto">
            We offer a range of professional photography and videography services to capture your special moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon] || FaCamera;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-accent-pink bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl text-center mb-4">{service.title}</h3>
                <p className="text-text-dark text-center leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
