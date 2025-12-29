/**
 * Site Configuration
 *
 * Customize this file to change:
 * - Studio name and branding
 * - Logo
 * - Contact information
 * - Navigation menu items
 * - Images and media
 */

export const siteConfig = {
  // Studio Information
  studioName: "Kanna Photography",
  tagline: "Photography",

  // Logo Configuration
  logo: {
    text: "Kanna Photography", // Text logo (if no image)
    imageUrl: "/images/final.png", // Set to image URL or import path to use image logo
    width: "80px",
    height: "auto",
  },

  // Contact Information
  contact: {
    email: "vairakannan999@gmail.com",
    phone: "+91 80727 16422",
    address: "Thiruporur, Tamil Nadu, India",
    social: {
      instagram: "https://www.instagram.com/cinimatic__studio?igsh=MXFrdGI5Mng0YzM2&utm_source=qr",
      whatsapp: "https://wa.me/+918072716422",
      pinterest: "https://pin.it/53WPNRNyc",
    },
  },

  // Navigation Menu
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    title: "Capturing Your Special Moments",
    subtitle: "Wedding Photography & Videography",
    videoUrl: "/videos/placeholder-hero.mp4",
    videoPoster: "/placeholder-hero.jpeg",
    ctaText: "Book Your Session",
    ctaLink: "/#contact",
  },

  // About Section
  about: {
    title: "About Us",
    description: "We are passionate photographers dedicated to capturing your most precious moments. With years of experience and an eye for detail, we create timeless memories that you'll cherish forever.",
    imageUrl: "/images/about.jpeg",
    videoPoster: "/placeholder-about.jpg",
    features: [
      "Professional Photography",
      "Cinematic Videography",
      "Same-Day Edits",
      "Drone Coverage",
    ],
  },

  // Services Section
  services: [
    {
      title: "Wedding Photography",
      description: "Complete coverage of your special day from preparation to reception.",
      icon: "camera",
    },
    {
      title: "Engagement Shoots",
      description: "Beautiful pre-wedding photography sessions at your favorite locations.",
      icon: "heart",
    },
    {
      title: "Videography",
      description: "Cinematic wedding films that tell your unique love story.",
      icon: "video",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Maran & Madhi",
      text: "The photos exceeded our expectations! Every moment was captured beautifully.",
      rating: 5,
    },
    {
      name: "Martin & Annie",
      text: "Professional, creative, and so easy to work with. Highly recommend!",
      rating: 5,
    },
    {
      name: "Jessica & David",
      text: "Our wedding video still makes us cry happy tears. Thank you!",
      rating: 5,
    },
  ],

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Kanna Photography Photography. All rights reserved.`,
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },

  // Images Configuration
  // Replace these placeholder paths with your actual images
  images: {
    heroBg: "/images/hero-background.jpg",
    aboutImage: "/images/about-image.jpg",
  },

  // Portfolio Items - Each item links to a specific category page
  portfolioItems: [
      {
      title: "Pre Wedding",
      image: "/images/wedding/pre-wedding/IMG_0207-min.jpeg",
      link: "/wedding/pre-wedding",
      category: "Wedding",
    },
    {
      title: "Hindu Wedding",
      image: "/images/wedding/hindu/hindu-main.jpeg",
      link: "/wedding/hindu",
      category: "Wedding",
    },
    // {
    //   title: "Christian Wedding",
    //   image: "/images/wedding/christian/gallery-1.jpg",
    //   link: "/wedding/christian",
    //   category: "Wedding",
    // },
    // {
    //   title: "Muslim Wedding",
    //   image: "/images/wedding/muslim/gallery-1.jpg",
    //   link: "/wedding/muslim",
    //   category: "Wedding",
    // },
    {
      title: "Maternity",
      image: "/images/baby/maternity/IMG_1021-min.jpeg",
      link: "/baby/maternity",
      category: "Baby",
    },
    {
      title: "Indoor Baby Photography",
      image: "/images/baby/indoor/IMG_0748-min.jpeg",
      link: "/baby/indoor-shoot",
      category: "Baby",
    },
  ],
};

export default siteConfig;
