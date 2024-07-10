/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#7c5dfa',
        },
        secondary: {
          DEFAULT: '#9277ff',
        },
        'red': {
          DEFAULT: '#ec5757',
        },
        'light-red': {
          DEFAULT: '#ec5757',
        },
        'light': {
          DEFAULT: '#f8f8fb',
        }
      },
    },
  },
  plugins: [],
}

