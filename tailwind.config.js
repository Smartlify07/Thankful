/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        warmorange: '#ff4405',
        teal: '#008080',
        offwhite: '#F9F9F9',
      },
      fontFamily: {
        inter: 'Inter, serif',
        poppins: 'Poppins, sans-serif',
        playfair: 'Playfair, serif',
        raleway: 'Raleway, sans-serif',
      },
    },
  },
  plugins: [],
};
