/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      
      screens: {
        xsm: "200px",
        msm: "367px"
        // => @media (min-width: 340px) { ... }

        
      },
      spacing: {
        15: "15px",
        55: "55px",
      },
      width: {
        640: "640px",
        547: "547px",
      },
      height: {
        640: "640px",
        547: "547px",
      },
      colors: {
        "page-bg-white": "#F5F5F5",
        white: "#FFFFFF",
        "heading-color": "#034B5E",
        "label-text-color": "#919499",
        "input-text-color": "#C4C4C4",
        tcolor: "#C4C4C4",
        "input-bg-color": "#F5F7FB",
        yellow: "#F8AD15",
        "bordar-color-gray": "#C4C4C4",
        "yellow-light": "#FCBA2D",
        "icon-bg-color": "#298097",
        "icon-active-color": "#919499",
        "table-header-color": "#298097",
        "dropdown-bg-color": "#F8F8F8",
        "dropdown-text-color": "#474747",
        "pg-bg-color": "#EFF2F2",
      },
    },
  },
  plugins: [],
};
