/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      rotate: {
        '22': '22deg',
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'poetsen': ['Poetsen One', 'sans-serif'],
      },
      backgroundImage: theme => ({
        'fondo-principal': "url('https://i.pinimg.com/originals/ae/1f/41/ae1f41480e0e86ff2056edc6b707d960.jpg')",
      }),
      colors: {
        'verde-oscuro': '#67be9b',
        'verde-claro': '#95d0b8',
        'amarillo-claro': '#fcfcd7',
        'amarillo-fuerte': '#f1db42',
        'rojo': '#f04158',
        'negro-transparente': '#ffffff33',
      },
    },
  },
  plugins: [],
}