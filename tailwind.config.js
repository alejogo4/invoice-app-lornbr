/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C5DFA',
        },
        secondary: {
          DEFAULT: '#9277ff',
        },
        red: {
          100: '#ec5757',
          200: '#9277ff',
        },
        'light-red': {
          DEFAULT: '#ec5757',
        },
        'dark-purple': {
          100: '#252945',
          200: '#1e2139',
        },
        dark: {
          100: '#0c0e16',
          200: '#141625',
        },
        light: {
          100: '#f8f8fb',
          200: '#dfe3fa',
          300: '#888ebo',
          400: '#7e88c3',
          500: '#36384a',
        },
      },
    },
  },
  plugins: [],
};
