/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lemon': ['Lemon', 'serif']
      },
      colors: {
        'angy-yellow': '#F3FEB8',
        'angy-orange-light': '#FFDE4D',
        'angy-orange-medium': '#FFB22C',
        'angy-orange-bold': '#FF4C4C',
        'angy-texto-pri': '#8A0000',
        'angy-texto-sec': '#210000'
      }
    },
  },
  plugins: [],
}

