import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTopOnNavigate - Automatically scrolls to top when navigating to new pages
 * This ensures that when you click links to other pages, the new page starts at the top
 */
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly when route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnNavigate;
