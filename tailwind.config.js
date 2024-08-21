/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#f4f4f4",
        darkBg: "#2c2c2c",
        lightText: "#27272a",
        darkText: "#f4f4f5",
        secondaryLightText: "#6e6e76",
        secondaryDarkText: "#8e8e95",
        borderLight: "#d1d1d6",
        borderDark: "#3a3a42",
        accent: "#4A90E2",
        hoverBg: "#1f1f22",
        hoverText: "#ffffff",
        subtitle: "#83838c",
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
