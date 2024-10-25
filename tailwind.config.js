/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#19191a',
        'secondary': '#5081a1',
      },
    },
  },
  plugins: [],
}