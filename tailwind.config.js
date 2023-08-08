/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#000",
        "secundary" : "#eee",
        "terciary" : "#2D4356"
      }},
      boxShadow: {
        'custom-shadow': '35px 23px 18px 0px rgba(0,0,0,0.75)',
      }
  },
  plugins: [],
}