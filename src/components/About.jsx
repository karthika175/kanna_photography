import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { siteConfig } from '../config';
import { FaCheck } from 'react-icons/fa';
import { getAssetPath } from '../utils/paths';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">{siteConfig.about.title}</h2>
            <p className="text-lg text-text-dark leading-relaxed mb-6">
              {siteConfig.about.description}
            </p>

            <ul className="space-y-3 mb-8">
              {siteConfig.about.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-lg"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-accent-green rounded-full flex items-center justify-center text-white text-sm">
                    <FaCheck />
                  </span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
          >
             <img
                src={getAssetPath(siteConfig.about.imageUrl)}
                alt={'about img'}
              />
         
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
