/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedding-pink': '#f391cc',
        'wedding-cyan': '#70cedd',
      },
    },
  },
  plugins: [],
}
