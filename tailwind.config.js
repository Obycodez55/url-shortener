/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ejs}",
    "./views/**/*.{html,js,ejs}",
    "./public/**/*.{html,js,ejs}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f5def6",
          200: "#ebbded",
          300: "#e09be4",
          400: "#d67adb",
          500: "#cc59d2",
          600: "#a347a8",
          700: "#7a357e",
          800: "#522454",
          900: "#29122a"
        },
        secondary: {
          100: "#e5fcf2",
          200: "#ccf9e5",
          300: "#b2f5d7",
          400: "#99f2ca",
          500: "#7fefbd",
          600: "#66bf97",
          700: "#4c8f71",
          800: "#33604c",
          900: "#193026"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
