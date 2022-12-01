/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
  presets: [require("tw-utils/font/inter/index")],
}
