import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Link, useNavigate } from 'react-router-dom';
import { handleHashClick } from '../../utils/navigation';

const CTASection = ({ title, description, buttonText, buttonLink }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const navigate = useNavigate();

  const defaultTitle = "Ready to Capture Your Moments?";
  const defaultDescription = "Let's create beautiful memories together. Book your session today and experience professional photography that tells your story.";
  const defaultButtonText = "Get in Touch";
  const defaultButtonLink = "/#contact";

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-butler mb-6">
            {title || defaultTitle}
          </h2>

          <p className="text-lg md:text-xl font-metropolis mb-8 opacity-90">
            {description || defaultDescription}
          </p>

          {buttonLink?.startsWith('/') && !buttonLink.includes('#') ? (
            <Link
              to={buttonLink || defaultButtonLink}
              className="inline-block px-8 py-4 bg-white text-primary font-metropolis font-medium rounded-md hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {buttonText || defaultButtonText}
            </Link>
          ) : (
            <a
              href={buttonLink || defaultButtonLink}
              onClick={(e) => handleHashClick(e, buttonLink || defaultButtonLink, navigate)}
              className="inline-block px-8 py-4 bg-white text-primary font-metropolis font-medium rounded-md hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {buttonText || defaultButtonText}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
