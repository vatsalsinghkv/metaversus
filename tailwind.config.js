/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,ts,tsx}',
    './components/**/*.{html,ts,tsx}',
    './containers/**/*.{html,ts,tsx}',
    './styles/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      maxWidth: {
        maxWidth: '1280px',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
