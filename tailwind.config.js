/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazirmatn"],
      },
      colors: {
        primary: "#4A6DFF",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
