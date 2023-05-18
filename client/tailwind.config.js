/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-background": "#0f0f0f",
        "green": "#29dc5e",
        "half-black": "rgba(255,255,255,0.5)",
        "half-black1": "#282828",
        "half-black2": "#3e3e3e",
        "songUpload": "#282828",
        "black1": "#1f1f1f",
        "black2": "#2d2f31",
      },
      fontFamily: {
        "poppins": ["Poppins, sans-serif;"],
        "roboto": ["Roboto, sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar")],
};
