/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "ico": "#0065bd",
      "icog": "#83b716",
      "icoy": "#f1c232",
      "gray": "#1c1e22",
      "transgray": "#00000080",
      ...colors,
    }
  },
  plugins: [],
}

