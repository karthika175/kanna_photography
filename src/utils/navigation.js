/**
 * Navigation utility for handling hash links across pages
 * This ensures smooth scrolling to sections works from any page
 */

/**
 * Navigate to a hash link (e.g., "/#contact")
 * Works both when on the same page and when navigating from other pages
 */
export const navigateToHash = (href, navigate) => {
  if (!href.includes('#')) {
    navigate(href);
    return;
  }

  const [path, hash] = href.split('#');
  const currentPath = window.location.pathname;

  // If we're already on the target page, just scroll
  if (currentPath === path || (path === '/' && currentPath === '/')) {
    const element = document.querySelector(`#${hash}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // Navigate to the page first, then scroll to hash
    navigate(path || '/');
    // Use retry mechanism to ensure element is loaded
    let attempts = 0;
    const maxAttempts = 20;
    const scrollInterval = setInterval(() => {
      const el = document.querySelector(`#${hash}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        clearInterval(scrollInterval);
      } else if (++attempts >= maxAttempts) {
        clearInterval(scrollInterval);
      }
    }, 100);
  }
};

/**
 * Handle click event for hash navigation
 * Use this in onClick handlers for buttons/links
 */
export const handleHashClick = (e, href, navigate) => {
  e.preventDefault();
  navigateToHash(href, navigate);
};
