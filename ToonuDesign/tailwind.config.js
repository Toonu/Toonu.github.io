/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "iconian": "#0065bd",
      "icogreen": "#83b716",
      "icogold": "#f1c232",
      "ggray": "#1c1e22",
      "ggraytrans": "#00000080",
    }
  },
  plugins: [],
}

