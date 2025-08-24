/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'display': ['Bebas Neue', 'system-ui', 'sans-serif'],
        'heading': ['Montserrat Alternates', 'system-ui', 'sans-serif'],
        'accent': ['Orbitron', 'system-ui', 'sans-serif'],
        'raintop': ['Raintop', 'cursive'],
      },
      colors: {
        gray: {
          50: '#EAEAF0',
          100: '#EAEAF0',
          200: '#D1D5DB',
          300: '#A6A6B3',
          400: '#A6A6B3',
          500: '#6B7280',
          600: '#4B5563',
          700: '#1E2230',
          800: '#13151B',
          900: '#0F1115',
          950: '#0B0B0D',
        },
        cyan: {
          400: '#6EE7F5',
          500: '#6EE7F5',
        },
        violet: {
          500: '#9B87F5',
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};