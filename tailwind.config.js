/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'apple-green': '#8fb339',
        'yellow-green': '#b7ce63',
        lime: '#C8EF3A',
        'charcoal-gray': '#333',
        'cal-poly-green': '#295135',
        'outer-space': '#252525',
        black: '#080708',
      },
      fontFamily: {
        inter: 'Inter, serif',
        poppins: 'Poppins, sans-serif',
        playfair: 'Playfair, serif',
        'playfair-display': 'Playfair Display, serif',
        raleway: 'Raleway, sans-serif',
        rubikk: 'Rubik, sans-serif',
        playwrite: 'Playwrite HR Lijeva, serif',
        openSans: 'Open Sans, sans-serif',
      },

      height: {
        hero: 'calc(95vh - 80px)',
        'hero-sm': 'calc(95vh - 120px)',
      },

      screens: {
        'h-lg': {
          raw: 'min-height(700px)',
        },
      },
    },
  },
  plugins: [],
};
