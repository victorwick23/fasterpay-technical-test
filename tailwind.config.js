/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0E0D52",
        "secondary-blue": "#CAD5F9",
        "third-blue": "#2A2E94",
        "light-blue": "#EDF6FF",
        "primary-cyan": "#2AF5D6",
        "border": "#234AFB",
      },
      fontFamily: {
        base: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
