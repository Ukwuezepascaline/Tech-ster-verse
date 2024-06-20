/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#935AF3",
        error: "#F04438",
        // success: "#27A713",
        black: "#24292E",
        "black-100": "#080010",
        "black-200": "#444",
        white: "#ffffff",
        "white-50": "#FDFDFD",
        "red-50": "#F8F7F7",
        "purple-light": "#EDE6F6",
        "purple-brand": "#E4D9F1",
        "purple-200": "#C7B1E2",
        "purple-300": "#0F001E",
        green: "#154449",
        "purple-dark": "#220248",
        grey: "#EBEDF0",
        navbarBackground: "rgba(255, 255, 255, 0.03)",
        navbarHover: "#C7B1E2",
        navbarLiHover: "#4B04A0",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      ptSans: ["PT Sans", "sans-serif"],
      lexend: ["Lexend", "sans-serif"],
      "dm-sans": ["DM Sans", "sans-serif"],
    },
    backgroundImage: {
      "hero-img": "url('/src/assets/hero-img.png')",
    },
  },
  plugins: [],
};
