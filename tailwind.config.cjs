/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        rowdies: ['Rowdies', 'cursive'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#DCF2E6',
        secondary: '#F4A1B2',
        tertiary: '#D95448'
      }
    }
  },
  plugins: []
};
