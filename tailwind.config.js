
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1a3a5c',
          light: '#2a5282',
          dark: '#0f2439',
        },
        accent: {
          DEFAULT: '#f59e0b', // Amber 500
          hover: '#d97706', // Amber 600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
