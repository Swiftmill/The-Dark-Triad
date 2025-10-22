/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#e6c45b",
          dark: "#9e6b10"
        }
      },
      fontFamily: {
        display: ["'Space Grotesk'", "'Inter'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "triad-gradient": "linear-gradient(120deg, #e6c45b 0%, #9e6b10 100%)"
      }
    }
  },
  plugins: []
};
