/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0E0D52",
      },
      fontFamily: {
        base: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
