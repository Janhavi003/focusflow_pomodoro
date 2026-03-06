/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#22c55e"
      },
      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [],
}