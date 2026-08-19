/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f2f63',
          dark: '#0a1d3d',
          deep: '#07152b',
          light: '#184282',
        },
        royal: '#2563c9',
        lightblue: '#5790e6',
        teal: '#0b6e97',
        offwhite: '#f4f4f4',
        ink: '#0a0a0a',
        muted: '#717784',
        ghost: '#d7dae1',
        hairline: '#e6e8ec',
      },
      borderRadius: {
        island: '2rem',
      },
      fontFamily: {
        sans: ['Onest', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};