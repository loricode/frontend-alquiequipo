/** @type {import('tailwindcss').Config} */
module.exports = {
 // content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding:{ "5px": "5px" }
    },
  },
  plugins: [],
}

