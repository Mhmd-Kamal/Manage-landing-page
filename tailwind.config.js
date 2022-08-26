/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'Bright-Red': 'hsl(12, 88%, 59%)',
        'Dark-Blue': 'hsl(228, 39%, 23%)',
        'Dark-Grayish-Blue': 'hsl(227, 12%, 61%)',
        'Very-Dark-Blue': 'hsl(233, 12%, 13%)',
        'Very-Pale-Red': 'hsl(13, 100%, 96%)',
        'Vary-Light-Gray': 'hsl(0, 0%, 98%)',
      },
      backgroundImage: {
        'simplify-section-desktop':
          "url('/images/bg-simplify-section-desktop.svg')",
        'simplify-section-mobile':
          "url('/images/bg-simplify-section-mobile.svg')",
        'tablet-pattern':
          "url('/images/bg-tablet-pattern.svg'),url('/images/bg-tablet-pattern.svg')",
      },
      backgroundPosition: {
        'mobile-position': 'right -250px top 500px, right -70px top -70px',
        'tablet-position': '-90% 45%, right -35% top',
        'desktop-position': '-70% 55%, right -10% top -10%',
      },
      backgroundSize: {
        'mobile-size': '110%',
        'tablet-size': '60%',
        'desktop-size': 'auto',
      },
    },
  },
  plugins: [],
}
