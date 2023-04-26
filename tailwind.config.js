/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/images/hero.jpg')",
        "about": "url('/images/about.jpg')",
      },
      colors: {
        "primary": "#060a35",
      }
    },
  },
  plugins: [],
}
