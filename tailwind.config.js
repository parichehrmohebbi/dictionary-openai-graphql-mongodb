/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./pages/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./components/*.{ts,tsx,js,jsx}",
    "./src/stories/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      grey: "#F4F4F4",
      white: "white",
      black: "black",
      green: "green",
      purple: "#FEFCFF",
    },

    extend: {
      colors: {
        grey: {
          200: "#F4F4F4",
          300: "#929292",
          400: "#838383",
          800: "#2C2C2C",
        },
        secondary: {
          200: "#F5F5F5",
          300: "#d6d3d1",
          400: "gray",
          900: "#27272a",
        },
        blue: {
          950: "#17275c",
        },
        purple: {
          200: "#bc96d9",
          400: "#a441f1",
        },
      },
    },
  },
  plugins: [],
};
