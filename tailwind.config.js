/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        primary: '#3c3c3c',
        'primary-dark': '#1B1B1B',
        'primary-light': '#cfcfcf',
        muted: '#7c7c7c',
        'accent-on-light': '#737373',
      },
      fontWeight: {
        700: '700',
        800: '800',
        900: '900',
      },
    },
  },
  plugins: [],
}
