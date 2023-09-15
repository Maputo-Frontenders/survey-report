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
        hero: "url('/images/hero.jpg')",
        about: "url('/images/about.jpg')",
        home: "linear-gradient(to bottom, #07090a, #07090a)",
      },
      colors: {
        primary: "#07090a",
        secondary: "#28318a",
        red: {
          500: "#e2363c",
        },
      },
    },
  },
  plugins: [],
};
