/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#F5F5F5',
        'light-gray': '#F8F8F8',
        'dark-gray': '#666666',
      }
    },
  },
  plugins: [],
}

