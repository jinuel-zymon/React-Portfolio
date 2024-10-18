/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor:{
        primary: "#fbf8cc",
        accent: "#03045e",
        pale: "#f5ee84"
      },
      backgroundColor:{
        primary: "#fbf8cc",
        accent: "#03045e",
        pale: "#f5ee84"
      },
      borderColor:{
        primary: "#fbf8cc",
        accent: "#03045e",
        pale: "#f5ee84"
      },
    },
  },
  plugins: [],
};
