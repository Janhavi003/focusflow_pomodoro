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
        secondary: "#22c55e",
        accent: "#8b5cf6"
      },

      borderRadius: {
        xl2: "1.25rem"
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        glow: "0 0 20px rgba(99,102,241,0.4)"
      }

    },
  },
  plugins: [],
}