/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FAF8F5',
          100: '#F2EFE9',
          200: '#E6E0D6',
          300: '#D4C5B5',
          400: '#C4B2A0',
        },
        brown: {
          100: '#BCAAA4',
          400: '#8D6E63',
          600: '#6D4C41',
          800: '#3E2723',
          900: '#2D1B18',
          950: '#1A1614',
        },
        terracotta: {
          DEFAULT: '#B85C38',
          light: '#D4754F',
          dark: '#8F4426',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};