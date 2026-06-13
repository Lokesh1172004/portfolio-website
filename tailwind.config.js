/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF2A2A',
          black: '#111111',
          lightGray: '#F4F4F4',
          darkGray: '#1C1C1C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      letterSpacing: {
        premium: '-0.04em',
      }
    },
  },
  plugins: [],
}
