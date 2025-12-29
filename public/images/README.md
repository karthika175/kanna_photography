# Images Directory

Place your photography images in this directory to populate the website.

## Required Images

### Hero Section
- `hero-background.jpg` - Background image or video for the hero section (1920x1080 recommended)

### About Section
- `about-image.jpg` - Image or video for the about section (1200x800 recommended)

### Portfolio Section
Add at least 6 portfolio images:
- `portfolio-1.jpg` through `portfolio-6.jpg` (1200x1200 recommended, square format)

## Image Specifications

- **Format**: JPG, PNG, or WebP
- **Quality**: High resolution for professional presentation
- **Optimization**: Compress images for web performance (use tools like TinyPNG, ImageOptim)
- **Naming**: Use the exact filenames specified above or update paths in `src/config.js`

## Video Specifications

For video backgrounds (optional):
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Duration**: 10-30 seconds (looping)
- **Size**: Keep under 5MB for better loading performance
- **Hosting**: Host on Vimeo, YouTube, or use local files

## Updating Image Paths

To customize image paths, edit the `images` object in `src/config.js`:

\`\`\`javascript
images: {
  heroBg: "/images/your-hero-image.jpg",
  aboutImage: "/images/your-about-image.jpg",
  portfolioImages: [
    "/images/your-portfolio-1.jpg",
    // Add more images...
  ],
}
\`\`\`
