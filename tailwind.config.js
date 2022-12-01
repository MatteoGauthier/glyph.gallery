const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
      fontFamily: {
        neuemontreal: ["Neue Montreal", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  presets: [require("tw-utils/font/inter/index")],
}
