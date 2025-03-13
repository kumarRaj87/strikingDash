/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      textShadow: {
        sm: '0 1px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}