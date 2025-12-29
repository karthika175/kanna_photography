import { useParams, Navigate } from 'react-router-dom';
import { getContent } from '../content.config';
import SectionHero from './shared/SectionHero';
import Highlights from './shared/Highlights';
import GalleryGrid from './shared/GalleryGrid';
import TestimonialSection from './shared/TestimonialSection';
import CTASection from './shared/CTASection';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

/**
 * SectionTemplate - Universal template component
 *
 * This component renders ANY section page (wedding, baby, other services)
 * based on URL parameters and content configuration.
 *
 * NO new components needed when adding new services - just update content.config.js
 */
const SectionTemplate = ({ section }) => {
  const { type } = useParams();

  // Get content from configuration
  const content = getContent(section, type);

  // If content not found, redirect to home
  if (!content) {
    return <Navigate to="/" replace />;
  }

  const {
    title,
    subtitle,
    description,
    hero,
    highlights,
    gallery,
    testimonial
  } = content;

  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <SectionHero
        title={title}
        subtitle={subtitle}
        videoUrl={hero.videoUrl}
        videoPoster={hero.videoPoster}
        ctaText={hero.ctaText}
        ctaLink={hero.ctaLink}
      />

      {/* Highlights Section */}
      {highlights && highlights.length > 0 && (
        <Highlights
          items={highlights}
          description={description}
        />
      )}

      {/* Gallery Section */}
      {gallery && gallery.length > 0 && (
        <GalleryGrid
          images={gallery}
          title="Our Work"
        />
      )}

      {/* Testimonial Section */}
      {testimonial && (
        <TestimonialSection testimonial={testimonial} />
      )}

      {/* CTA Section */}
      <CTASection />

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SectionTemplate;
