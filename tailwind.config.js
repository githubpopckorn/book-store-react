/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      cascadia: ['Cascadia Code', 'monospace'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'purple-light': '#F8F8FB',
      },
    },
  },
  plugins: [],
}

