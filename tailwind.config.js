/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#046bd2',
          dark: '#045cb4',
        },
        secondary: '#1f1f1f',
        accent: {
          pink: '#e93a9d',
          green: '#61ce70',
        },
        text: {
          DEFAULT: '#334155',
          dark: '#3d3d3d',
        },
        border: {
          DEFAULT: '#d1d5db',
          light: 'rgba(82,82,82,.1)',
        },
        background: {
          light: '#f8fafc',
        },
      },
      fontFamily: {
        butler: ['Butler', 'serif'],
        metropolis: ['Metropolis', 'sans-serif'],
        roboto: ['Roboto Slab', 'serif'],
      },
      fontSize: {
        'h1': ['36px', { lineHeight: '1.4em' }],
        'h2': ['30px', { lineHeight: '1.3em' }],
        'h3': ['24px', { lineHeight: '1.3em' }],
      },
      maxWidth: {
        'container': '1200px',
        'container-tablet': '1024px',
        'container-mobile': '767px',
      },
      borderRadius: {
        'btn': '9px',
      },
      boxShadow: {
        'dropdown': '0px 0px 10px rgba(0,0,0,.11)',
      },
    },
  },
  plugins: [],
}
