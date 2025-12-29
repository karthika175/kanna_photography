import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { siteConfig } from '../config';
import { getAssetPath } from '../utils/paths';

const Portfolio = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Our Work</h2>
          <p className="text-lg text-text-dark max-w-2xl mx-auto">
            Browse through our portfolio to see some of our favorite moments we've captured.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.link}
                className="group relative block aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={getAssetPath(item.image)}
                  alt={item.title}
                  style={{height:'100%'}}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-white font-butler text-2xl mb-2">{item.title}</p>
                    <p className="text-white/90 font-metropolis text-sm">{item.category}</p>
                    <p className="text-white font-metropolis mt-4 opacity-80">View Gallery →</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
