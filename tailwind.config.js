/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        signature: ["Brittany Signature", "cursive", "sans-serif"],
      },
    },
  },
  plugins: [],
};
