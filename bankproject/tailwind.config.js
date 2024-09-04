/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    width: {
      fit: "fit-content",
    },
    colors: {
      customBlue: "#003380", // customBlue is the name of the custom color
    },
  },
  plugins: [],
};
