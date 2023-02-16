/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.{js,jsx}", "./src/components/*.{js,jsx}"],
  theme: {
    fontFamily: {
      fraunces: ["Fraunces", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  extend: {},

  plugins: [
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/forms"),
    require("@headlessui/react"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
