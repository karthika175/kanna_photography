/**
 * Path utility for handling asset URLs with base path
 * Ensures images and videos work correctly in both dev and production (GitHub Pages)
 */

/**
 * Get the correct asset path for images and videos
 * @param {string} path - The asset path (e.g., '/images/photo.jpg')
 * @returns {string} - The full path including base URL
 */
export const getAssetPath = (path) => {
  if (!path) return '';

  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // In Vite, import.meta.env.BASE_URL includes the trailing slash
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
