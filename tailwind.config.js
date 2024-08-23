/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
        mono: ["Courier New", "Courier", "monospace"],
        cinzel: ["Cinzel", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        italiana: ["Italiana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
