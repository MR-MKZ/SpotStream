/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          100: '#C8ACD6',
          200: '#433D8B',
          300: '#2E236C',
          400: '#17153B'
        }
      }
    },
    // colors: {
    //   "purple-custom-400": "#17153B",
    //   "purple-custom-300": "#2E236C",
    //   "purple-custom-200": "#433D8B",
    //   "purple-custom-100": "#C8ACD6"
    // }
  },
  plugins: [],
}

