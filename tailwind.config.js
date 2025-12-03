/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f2fcf0',
          100: '#e1f8db',
          200: '#c5efb9',
          300: '#9ce28b',
          400: '#AEE74F', // Accent Lime
          500: '#6dc136',
          600: '#429321', // Primary Brand
          700: '#35761e',
          800: '#2d5e1c',
          900: '#254d1b',
          950: '#1a3813',
        },
        slate: {
          750: '#26344b',
          850: '#151f32',
          900: '#0f172a',
          950: '#020617',
        }
      },
      backgroundImage: {
        'hero-glow': 'conic-gradient(from 90deg at 50% 50%, #f2fcf0 0%, #e1f8db 50%, #f2fcf0 100%)',
      }
    },
  },
  plugins: [],
}