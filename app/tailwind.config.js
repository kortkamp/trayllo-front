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
      'primary':'#490177',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
  
      },
      cyan :{
        500: '#81D8F7',
        300: '#98E1FB',
      }
      
    
    },
    // borderRadius: {
    
    //   // DEFAULT: '0.25rem',
    //   DEFAULT: '5px',
     
    // },
    
    fontSize: {
      xs: 13,
      sm: 18,
      md: 20,
      lg: 20,
      xl: 24,
      '2xl': 60,
    },
    extend: {
      fontFamily: {
        sans: 'Open Sans, sans-serif'
      }
    },
  },
  plugins: [],
}
