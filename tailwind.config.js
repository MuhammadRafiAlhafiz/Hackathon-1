/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
      },
      colors: {},
    },
  },
  plugins: [require("flowbite/plugin")],
};
