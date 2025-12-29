import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

const GalleryGrid = ({ images, title }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {title && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-butler mb-4">{title}</h2>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                style={{height:'100%'}}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <p className="text-white font-metropolis">View Image</p>
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
