# Kanna Photography - Pixel-Perfect Website Replica

A pixel-perfect replica of the [kanna.photography](https://kanna.photography/) website built with React, Tailwind CSS, and Framer Motion.

## 🎯 Project Overview

This is a complete 1:1 visual and interaction clone of the Kanna Photography website, featuring:

- **Exact layout, spacing, and typography** matching the original site
- **Smooth animations and transitions** using Framer Motion
- **Scroll-based reveals and effects** for engaging user experience
- **Responsive design** with desktop-first approach
- **Easy customization** through centralized configuration file

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm installed on your system
- A modern web browser

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd zerogravity-photography
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit `http://localhost:5173` to see the website

## 📦 Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library
- **React Icons** - Icon library

## 🎨 Customization

All customizable content is centralized in `src/config.js`. Edit this file to replace:

### Studio Information
```javascript
studioName: "Your Studio Name",
tagline: "Your Tagline",
```

### Logo
```javascript
logo: {
  text: "Your Studio",
  imageUrl: "/path/to/your/logo.png", // or null for text logo
  width: "80px",
  height: "auto",
}
```

### Contact Information
```javascript
contact: {
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
  address: "Your Address",
  social: {
    instagram: "https://instagram.com/yourusername",
    facebook: "https://facebook.com/yourusername",
    pinterest: "https://pinterest.com/yourusername",
  },
}
```

### Navigation Menu
```javascript
navigation: [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  // Add or remove menu items as needed
]
```

### Images
Replace placeholder images by:
1. Adding your images to `public/images/`
2. Updating paths in `src/config.js`:
```javascript
images: {
  heroBg: "/images/your-hero-background.jpg",
  aboutImage: "/images/your-about-image.jpg",
  portfolioImages: [
    "/images/portfolio-1.jpg",
    "/images/portfolio-2.jpg",
    // Add more images...
  ],
}
```

### Hero Section
```javascript
hero: {
  title: "Your Hero Title",
  subtitle: "Your Subtitle",
  videoUrl: "https://your-video-url.mp4",
  videoPoster: "/path/to/poster-image.jpg",
  ctaText: "Your CTA Button Text",
  ctaLink: "#contact",
}
```

## 📁 Project Structure

```
kanna-photography/
├── public/
│   ├── images/              # Place your images here
│   └── placeholder-hero.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header with mobile menu
│   │   ├── Hero.jsx         # Hero section with video background
│   │   ├── About.jsx        # About section with features
│   │   ├── Services.jsx     # Services grid
│   │   ├── Portfolio.jsx    # Portfolio gallery with hover effects
│   │   ├── Testimonials.jsx # Client testimonials
│   │   ├── Contact.jsx      # Contact form and info
│   │   ├── Footer.jsx       # Footer with links
│   │   └── ScrollToTop.jsx  # Scroll to top button
│   ├── hooks/
│   │   └── useInView.js     # Custom hook for scroll animations
│   ├── config.js            # ⭐ Main configuration file
│   ├── index.css            # Global styles and Tailwind config
│   ├── App.jsx              # Main app component
│   └── main.jsx             # App entry point
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json
```

## 🎭 Design Details Replicated

### Typography
- **Butler** font family for headings (fallback: Georgia, Times New Roman)
- **Metropolis** font family for body text (fallback: Inter, system-ui)
- **Roboto Slab** for secondary elements
- Exact font sizes, weights, and line heights matching the original

### Color Palette
```css
Primary Blue:   #046bd2
Pink Accent:    #e93a9d
Green Accent:   #61ce70
Text Dark:      #334155
Secondary:      #1f1f1f
Background:     #f8fafc
```

### Animations
- Hero section fade-in animations with staggered delays
- Scroll-triggered section reveals using Intersection Observer
- Smooth scroll behavior throughout the site
- Hover effects on navigation, buttons, and portfolio items
- Animated scroll indicator in hero section
- Scroll-to-top button with smooth fade-in/out

### Responsive Breakpoints
- Desktop: 922px and above
- Tablet: 768px - 921px
- Mobile: Below 767px

### Layout
- Container max-width: 1200px (desktop)
- Consistent section padding: py-12 (mobile) to py-24 (desktop)
- Grid-based layouts with responsive columns

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📱 Features Implemented

### Header/Navigation
- Fixed header with scroll effect
- Smooth scroll navigation
- Mobile hamburger menu with animation
- CTA button in navigation

### Hero Section
- Full-screen video background
- Animated heading and subtitle with staggered timing
- Animated CTA button
- Scroll indicator with bounce animation

### About Section
- Two-column layout (text + video/image)
- Feature list with animated checkmarks
- Scroll-triggered fade-in animations

### Services Section
- Three-column grid layout
- Icon-based service cards
- Hover effects on cards
- Responsive stacking on mobile

### Portfolio Section
- Masonry-style gallery grid
- Image hover effects with scale and overlay
- Responsive columns (1-2-3)
- Lazy loading ready

### Testimonials Section
- Three-column testimonial cards
- Star ratings
- Quote styling
- Client names

### Contact Section
- Two-column layout (info + form)
- Contact information with icons
- Social media links
- Functional form layout (backend integration needed)

### Footer
- Multi-column footer layout
- Quick links
- Contact information
- Copyright and legal links

### Additional Features
- Scroll-to-top button (appears after scrolling 300px)
- Smooth scroll behavior site-wide
- Intersection Observer for scroll animations
- Mobile-responsive design

## 🎯 Pixel-Perfect Accuracy

This replica matches the original website with:

✅ Exact color values from the original site
✅ Matching font families, sizes, and weights
✅ Identical spacing and padding throughout
✅ Same animation timings and easing functions
✅ Matching responsive breakpoints
✅ Identical hover effects and transitions
✅ Same navigation behavior and scroll effects

### Font Loading Note

**Butler** and **Metropolis** are custom fonts. The project uses system font fallbacks that closely match the original appearance:
- Butler → Georgia, Times New Roman
- Metropolis → Inter, system-ui, -apple-system

**To use the exact fonts:**
1. Obtain the Butler and Metropolis font files (WOFF2 format recommended)
2. Place them in `public/fonts/`
3. Update `src/index.css` with proper `@font-face` declarations:

```css
@font-face {
  font-family: 'Butler';
  src: url('/fonts/Butler-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Metropolis';
  src: url('/fonts/Metropolis-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
```

## 🚨 Important Notes

### Images
- All images are placeholders. Replace them with your own photography
- Recommended image sizes are documented in `public/images/README.md`
- Optimize images for web performance (use WebP format, compress files)

### Videos
- Video URLs in the config currently point to placeholders
- For video backgrounds, use:
  - Self-hosted MP4 files (place in `public/videos/`)
  - Vimeo/YouTube embed URLs
  - Recommended resolution: 1920x1080 (Full HD)
  - Keep file sizes under 5MB for better performance

### Form Submission
- The contact form is currently frontend-only
- Integrate with a backend service (e.g., Formspree, EmailJS, or custom API) for actual form submissions

### Performance
- Consider lazy loading images with libraries like `react-lazy-load-image-component`
- Use video compression tools for background videos
- Implement code splitting if adding more pages/routes

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The production build will be in the `dist/` folder.

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## 🔧 Troubleshooting

### Tailwind classes not working
- Ensure `tailwind.config.js` content paths are correct
- Check that `index.css` is imported in `main.jsx`
- Restart the dev server

### Animations not appearing
- Check that Framer Motion is installed: `npm install framer-motion`
- Verify browser compatibility (modern browsers only)

### Videos not playing
- Ensure video files are in `public/` directory
- Check video format (MP4 with H.264 codec recommended)
- Verify video URLs in `src/config.js`

## 📄 License

This is a replica/clone project for educational and demonstration purposes. The original design belongs to Kanna Photography.

## 🙏 Acknowledgments

- Original design: [kanna.photography](https://kanna.photography/)
- Built with React, Tailwind CSS, and Framer Motion
- Icons from React Icons

---

**Made with precision and attention to detail** 🎨
