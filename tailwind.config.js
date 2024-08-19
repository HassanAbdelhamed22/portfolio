/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#fafafa",
        darkBg: "#252529",
        lightText: "#27272a",
        darkText: "#f4f4f5",
        secondaryLightText: "#52525b",
        secondaryDarkText: "#A1A1AA",
        borderLight: "#e4e4e7",
        borderDark: "#4b4b52",
        accent: "#5DBCFC",
        // accent: "#6EC8FF",
        hoverBg: "#1f1f22",
        hoverText: "#ffffff",
        subtitle: "rgb(131, 131, 140)",
      },
      keyframes: {
        customScale: {
          "0%": { transform: "scale(0)" },
          "60%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        customScale: "customScale 0.5s ease-in-out", // Duration and timing function can be adjusted
      },
      scale: {
        scaleCard: "scale(1)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
