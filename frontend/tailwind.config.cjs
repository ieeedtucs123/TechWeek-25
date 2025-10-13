/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Vite entry
    "./src/**/*.{js,ts,jsx,tsx}", // all React source files
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
