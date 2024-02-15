/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ejs}",
    "./views/**/*.{html,js,ejs}",
    "./public/**/*.{html,js,ejs}"
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          500: "#CC59D2",
        },
        secondary:{
          500:"#7FEFBD",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

