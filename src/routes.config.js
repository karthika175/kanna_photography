/**
 * Routes Configuration
 *
 * All routes are defined here in a config-based approach.
 * To add a new route, simply add an entry to this configuration.
 *
 * NO new page components needed - all routes use the SectionTemplate component.
 */

import { getSectionTypes } from './content.config';

// Route definitions
export const routeConfig = {
  // Home route
  home: {
    path: '/',
    section: 'home',
    component: 'HomePage' // Special case - the main landing page
  },

  // Wedding photography routes
  wedding: {
    basePath: '/wedding',
    section: 'wedding',
    types: getSectionTypes('wedding'), // ['christian', 'muslim', 'hindu']
    component: 'SectionTemplate'
  },

  // Baby photography routes
  baby: {
    basePath: '/baby',
    section: 'baby',
    types: getSectionTypes('baby'), // ['baby-shower', 'maternity', 'birthday', 'indoor-shoot']
    component: 'SectionTemplate'
  },

  // Other services routes
  other: {
    basePath: '/services',
    section: 'other',
    types: getSectionTypes('other'), // ['house-warming', 'puberty']
    component: 'SectionTemplate'
  }
};

/**
 * Generate all routes from configuration
 * This function creates the route structure for React Router
 */
export const generateRoutes = () => {
  const routes = [];

  // Home route
  routes.push({
    path: routeConfig.home.path,
    section: routeConfig.home.section,
    type: null,
    component: routeConfig.home.component
  });

  // Dynamic section routes
  Object.entries(routeConfig).forEach(([key, config]) => {
    if (config.basePath && config.types) {
      config.types.forEach(type => {
        routes.push({
          path: `${config.basePath}/${type}`,
          section: config.section,
          type: type,
          component: config.component
        });
      });
    }
  });

  return routes;
};

/**
 * Get route path for a section and type
 * Usage: getRoutePath('wedding', 'christian') => '/wedding/christian'
 */
export const getRoutePath = (section, type) => {
  const sectionConfig = Object.values(routeConfig).find(
    config => config.section === section
  );

  if (!sectionConfig || !sectionConfig.basePath) {
    return '/';
  }

  return `${sectionConfig.basePath}/${type}`;
};

/**
 * Navigation menu configuration
 * Add new menu items here to extend the navigation
 */
export const navigationConfig = [
  {
    label: 'Home',
    path: '/',
    type: 'link'
  },
  {
    label: 'Wedding',
    type: 'dropdown',
    items: [
      { label: 'Pre Wedding', path: '/wedding/pre-wedding' },
      { label: 'Hindu Wedding', path: '/wedding/hindu' },
      // { label: 'Christian Wedding', path: '/wedding/christian' },
      // { label: 'Muslim Wedding', path: '/wedding/muslim' },
      
    ]
  },
  {
    label: 'Baby Photography',
    type: 'dropdown',
    items: [
      // { label: 'Baby Shower', path: '/baby/baby-shower' },
      { label: 'Maternity', path: '/baby/maternity' },
      // { label: 'Birthday', path: '/baby/birthday' },
      { label: 'Indoor Shoot', path: '/baby/indoor-shoot' }
    ]
  },
  // {
  //   label: 'Other Services',
  //   type: 'dropdown',
  //   items: [
  //     { label: 'House Warming', path: '/services/house-warming' },
  //     { label: 'Puberty Ceremony', path: '/services/puberty' }
  //   ]
  // },
  {
    label: 'Contact',
    path: '/#contact',
    type: 'link'
  }
];

export default routeConfig;
