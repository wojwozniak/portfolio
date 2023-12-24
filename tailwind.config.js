/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background' : '#000D15',
        'bright-blue' : '#01A1FF'
      }
    },
  },
  plugins: [],
}

