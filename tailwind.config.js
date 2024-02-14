/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ejs}",
    "./views/**/*.{html,js,ejs}",
    "./public/**/*.{html,js,ejs}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

