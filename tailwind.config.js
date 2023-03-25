/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": '#0a0a0a',
        'secondaryDark': '#161616'
      },
      fontFamily: {
        'primary': ['roboto']
      }
    },
  },
  plugins: [require("daisyui")
  ],
}
