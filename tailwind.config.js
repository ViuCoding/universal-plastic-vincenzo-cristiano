/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "header-text": "#14143f",
      "light-text": "#595977",
      "input-bg": "#ECF9FD",
      "input-text": "#246B83",
      "input-divider": "#C4ECFA",
      slider: "#42C3EE",
      "error-text": "#dc143c",
      "error-bg": "#FFC0CB",
      "icon-border": "#F0F0F2",
    },
    fontSize: {
      sm: "10.88px",
      base: "17px",
      xl: "21.25px",
    },
  },
  plugins: [],
};