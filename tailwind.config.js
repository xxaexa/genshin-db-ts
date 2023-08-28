/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        font: 'Lexend Mega',
      },
      colors: {
        'card-color': '#41474e',
        'bg-color': '#25282c',
        'font-color': '#797d82',
      },
    },
  },
  plugins: [],
}
