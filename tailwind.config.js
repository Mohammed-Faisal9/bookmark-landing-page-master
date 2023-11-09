/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/*.js'],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(229, 31%, 21%)',
      }
    },
  },
  plugins: [],
}

