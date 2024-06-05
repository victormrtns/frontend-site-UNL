/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainPink: '#F086CC',
        white: 'white',
        black: 'black',
        transparent: 'transparent',
        carteiraHeader: '#BC2689',
        carteiraVacinaName: '#D062AB',
        carteiraVacinaDesc: '#F388CE',
        cateiraVacinaLotes: '#EDC1DE'
      }
    },
  },
  plugins: [],
}

