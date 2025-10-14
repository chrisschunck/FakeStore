/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#000000',
          700: '#111111',
          500: '#f6c11f' // yellow
        }
      }
    }
  },
  plugins: [],
}