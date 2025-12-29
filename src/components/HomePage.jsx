import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

/**
 * HomePage - Main landing page
 *
 * This is the original single-page layout, preserved as the home route.
 */
const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
