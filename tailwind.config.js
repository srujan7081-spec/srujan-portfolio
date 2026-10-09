/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#15181C',
          50: '#F3F4F4',
          100: '#E4E6E7',
          200: '#C4C8CA',
          300: '#9EA3A7',
          400: '#6D7378',
          500: '#4A4F54',
          600: '#33373B',
          700: '#24272A',
          800: '#1B1E21',
          900: '#15181C',
        },
        paper: {
          DEFAULT: '#F6F4EF',
          dim: '#EDEAE2',
        },
        brass: {
          DEFAULT: '#A9782E',
          light: '#C79A4E',
          dark: '#8A611F',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(21,24,28,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,24,28,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [],
}
