import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SectionTemplate from './components/SectionTemplate';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';

/**
 * App - Main application component with routing
 *
 * Routes are configured in routes.config.js
 * Content is configured in content.config.js
 *
 * To add a new service:
 * 1. Add content to content.config.js
 * 2. Add route to navigationConfig in routes.config.js
 * 3. No component changes needed!
 */
function App() {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />

        {/* Wedding photography routes */}
        <Route path="/wedding/:type" element={<SectionTemplate section="wedding" />} />

        {/* Baby photography routes */}
        <Route path="/baby/:type" element={<SectionTemplate section="baby" />} />

        {/* Other services routes */}
        <Route path="/services/:type" element={<SectionTemplate section="other" />} />
      </Routes>
    </>
  );
}

export default App;
