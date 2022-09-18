/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D2001A",
        secondary: "#FFDE00",
        accent: "#FFFAE7",
        base: "#EFEFEF",
      },
    },
  },
  plugins: [],
});
