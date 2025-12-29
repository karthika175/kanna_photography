# Customization Guide

This guide provides step-by-step instructions for customizing the Kanna Photography website replica for your own photography business.

## Quick Start Customization

All customization is done through a single file: **`src/config.js`**

## Step-by-Step Customization

### 1. Update Studio Information

```javascript
// In src/config.js
export const siteConfig = {
  studioName: "Your Photography Studio",  // ← Change this
  tagline: "Your Tagline",               // ← Change this
  // ...
}
```

### 2. Replace the Logo

**Option A: Text Logo (Default)**
```javascript
logo: {
  text: "Your Studio Name",  // ← This will appear as text
  imageUrl: null,            // ← Keep as null for text logo
  width: "80px",
  height: "auto",
}
```

**Option B: Image Logo**
1. Add your logo image to `public/` folder (e.g., `public/logo.png`)
2. Update the config:
```javascript
logo: {
  text: "Your Studio Name",  // ← Used as alt text
  imageUrl: "/logo.png",     // ← Path to your logo
  width: "120px",            // ← Adjust size as needed
  height: "auto",
}
```

### 3. Update Contact Information

```javascript
contact: {
  email: "hello@yourstudio.com",      // ← Your email
  phone: "+1 (555) 123-4567",         // ← Your phone
  address: "123 Main St, City, ST",   // ← Your address
  social: {
    instagram: "https://instagram.com/yourusername",  // ← Your Instagram
    facebook: "https://facebook.com/yourusername",    // ← Your Facebook
    pinterest: "https://pinterest.com/yourusername",  // ← Your Pinterest
  },
}
```

### 4. Customize Navigation Menu

```javascript
navigation: [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  // Add more menu items:
  { label: "Blog", href: "#blog" },
  { label: "Pricing", href: "#pricing" },
]
```

### 5. Customize Hero Section

```javascript
hero: {
  title: "Your Compelling Headline",
  subtitle: "Your Subtitle or Tagline",
  videoUrl: "/videos/your-hero-video.mp4",    // ← Your video
  videoPoster: "/images/hero-poster.jpg",      // ← Poster image
  ctaText: "Book Now",                         // ← Button text
  ctaLink: "#contact",                         // ← Button link
}
```

**Video Options:**
- Use a local video: Place MP4 file in `public/videos/` and reference as `/videos/filename.mp4`
- Use a background image instead: Set `videoUrl` to an image path
- Use Vimeo/YouTube: Requires modifying `src/components/Hero.jsx` to use iframe

### 6. Update About Section

```javascript
about: {
  title: "About Our Studio",
  description: "Write a compelling description about your photography business, your style, and what makes you unique...",
  videoUrl: "/videos/about-video.mp4",
  videoPoster: "/images/about-poster.jpg",
  features: [
    "Your Feature 1",
    "Your Feature 2",
    "Your Feature 3",
    "Your Feature 4",
  ],
}
```

### 7. Customize Services

```javascript
services: [
  {
    title: "Service 1 Name",
    description: "Description of this service...",
    icon: "camera",  // Options: camera, heart, video
  },
  {
    title: "Service 2 Name",
    description: "Description of this service...",
    icon: "heart",
  },
  // Add more services...
]
```

Available icons: `camera`, `heart`, `video`

To add more icons:
1. Import from React Icons in `src/components/Services.jsx`
2. Add to the `iconMap` object

### 8. Add Your Portfolio Images

**Step 1:** Add images to `public/images/` folder
```
public/
  images/
    portfolio-1.jpg
    portfolio-2.jpg
    portfolio-3.jpg
    ...
```

**Step 2:** Update the config
```javascript
images: {
  heroBg: "/images/hero-background.jpg",
  aboutImage: "/images/about-image.jpg",
  portfolioImages: [
    "/images/portfolio-1.jpg",
    "/images/portfolio-2.jpg",
    "/images/portfolio-3.jpg",
    "/images/portfolio-4.jpg",
    "/images/portfolio-5.jpg",
    "/images/portfolio-6.jpg",
    // Add as many as you want...
  ],
}
```

**Image Recommendations:**
- **Portfolio**: Square format (1200x1200px minimum)
- **Hero**: Wide format (1920x1080px or 16:9 ratio)
- **About**: Standard format (1200x800px or 3:2 ratio)
- **Format**: JPG or WebP (for smaller file sizes)
- **Compression**: Use tools like TinyPNG or ImageOptim

### 9. Add Client Testimonials

```javascript
testimonials: [
  {
    name: "Client Name 1",
    text: "Their testimonial text goes here...",
    rating: 5,  // 1-5 stars
  },
  {
    name: "Client Name 2",
    text: "Another testimonial...",
    rating: 5,
  },
  // Add more testimonials...
]
```

### 10. Update Footer

```javascript
footer: {
  copyright: `© ${new Date().getFullYear()} Your Studio Name. All rights reserved.`,
  links: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    // Add more footer links...
  ],
}
```

## Advanced Customization

### Change Colors

Edit `src/index.css` in the `@theme` section:

```css
@theme {
  --color-primary: #046bd2;        /* Primary blue */
  --color-accent-pink: #e93a9d;    /* Pink accent (buttons, CTAs) */
  --color-accent-green: #61ce70;   /* Green accent (hover effects) */
  --color-text: #334155;           /* Main text color */
  --color-secondary: #1f1f1f;      /* Dark text/backgrounds */
  /* Add more color variables... */
}
```

### Change Fonts

**Step 1:** Add Google Fonts link in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;600&display=swap');
```

**Step 2:** Update font variables:
```css
@theme {
  --font-butler: 'Your Heading Font', Georgia, serif;
  --font-metropolis: 'Your Body Font', system-ui, sans-serif;
}
```

### Change Animation Timings

Edit animation durations in component files:
```javascript
// In src/components/Hero.jsx (example)
transition={{ duration: 0.8, delay: 0.2 }}  // ← Adjust these values
```

Common animation settings:
- `duration`: How long the animation takes (in seconds)
- `delay`: How long to wait before starting (in seconds)
- `ease`: Animation easing (try: "easeIn", "easeOut", "easeInOut", "linear")

### Add New Sections

1. Create a new component in `src/components/YourSection.jsx`
2. Import it in `src/App.jsx`
3. Add it to the component tree
4. Add corresponding config in `src/config.js`

Example:
```javascript
// src/App.jsx
import YourSection from './components/YourSection';

function App() {
  return (
    <div>
      {/* ... other components ... */}
      <YourSection />
      {/* ... */}
    </div>
  );
}
```

## Common Customization Tasks

### Task: Change Button Color
1. Open `src/index.css`
2. Find `.btn-primary` class
3. Change `background-color: var(--color-accent-pink);` to your color
4. Update `border` color to match

### Task: Add More Portfolio Images
1. Add images to `public/images/`
2. Add paths to `images.portfolioImages` array in `src/config.js`
3. The grid will automatically adjust

### Task: Change Contact Form Action
1. Open `src/components/Contact.jsx`
2. Find the `<form>` element
3. Add `action` and `method` attributes:
```javascript
<form action="https://formspree.io/f/your-form-id" method="POST">
```

### Task: Remove a Section
1. Open `src/App.jsx`
2. Comment out or delete the component:
```javascript
{/* <Services /> */}  // This section won't appear
```

## Image Optimization Tips

1. **Resize images** to appropriate dimensions before uploading
2. **Compress images** using:
   - [TinyPNG](https://tinypng.com) (online)
   - [ImageOptim](https://imageoptim.com) (Mac)
   - [Squoosh](https://squoosh.app) (online)
3. **Use WebP format** for better compression (with JPG fallback)
4. **Lazy loading** is ready - images load as user scrolls

## Testing Your Changes

After making changes:

1. **Start dev server** (if not running):
   ```bash
   npm run dev
   ```

2. **Check in browser**: Visit `http://localhost:5173`

3. **Test on mobile**: Use browser DevTools or real device

4. **Build for production**:
   ```bash
   npm run build
   npm run preview
   ```

## Deployment Checklist

Before deploying:

- [ ] Replace ALL placeholder images
- [ ] Update ALL text content in `src/config.js`
- [ ] Test all links and navigation
- [ ] Test contact form submission
- [ ] Verify social media links
- [ ] Check mobile responsiveness
- [ ] Optimize all images
- [ ] Test in different browsers
- [ ] Add favicon (`public/favicon.ico`)
- [ ] Update meta tags in `index.html`

## Need Help?

- Check the main [README.md](README.md) for technical documentation
- Review component files in `src/components/` to understand structure
- Tailwind CSS docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/

---

**Happy Customizing!** 🎨📸
