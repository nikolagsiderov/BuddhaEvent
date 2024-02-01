module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/designsystem/**/*.{js,ts,jsx,tsx}",
    "./src/utilities/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnightBlack: "#0D0D0D",
        dusty: "#181818",
        brand: "#524fe3",
        moon: "#ff6130",
      },
    },
  },
  plugins: [],
};
