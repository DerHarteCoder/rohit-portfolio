/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#000000', /* Changed to dark black */
        'dark-secondary': '#242424',
        'dark-tertiary': '#333333',
        'dark-text-primary': '#ffffff',
        'dark-text-secondary': '#d1d5db',
        'accent-color': '#64ffda',
      },
      fontFamily: {
        'sans': ['"Fira Sans"', 'sans-serif'],
        'mono': ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}
