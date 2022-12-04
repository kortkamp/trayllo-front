/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000',
      'white': '#fff',
      'transparent': '#00000000',
      'primary': {
        light: '#E0AFFF',
        DEFAULT: '#490177',
      },
      blue:{
        500: '#0077C2'
      },
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },
    },
    borderRadius: {
      DEFAULT: '5px',
      md: '12px',
      full: '9999px'
    },
    
    fontSize: {
      '2xs': 13,
      xs: 15,
      sm: 18,
      md: 20,
      // lg: 20,
      xl: 24,
      '2xl': 60,
    },
    extend: {
      fontFamily: {
        sans: 'Open Sans, sans-serif'
      },
      keyframes: {
        slideIn1: {
          '0%': { transform: 'translateX(-50vw)' },
          '100%': { transform: 'translateX(0vw)' },
        },
        slideIn2: {
          '0%': { transform: 'translateX(-100vw)' },
          '50%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(0vw)' },
        },
        slideIn3: {
          '0%': { transform: 'translateX(200vw)' },
          '70%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
    extend: {},
  },
  plugins: [],
}
