/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray': {
        100: '#f5f5f5',
        200: '#e0e0e0',
        300: '#bdbdbd',
        400: '#9e9e9e',
        500: '#757575',
        600: '#616161',
        700: '#424242',
        800: '#212121',
        900: '#1a1a1a',
      },
      'primary': {
        100: '#fff8ed',
        200: '#FFBA54',
        300: '#FFA520',
        400: '#E58900',
        500: '#FFA520',
        600: '#E98B00',
        700: '#CC7600',
        800: '#B26000',
        900: '#944B00',
      },
      
      'secondary': {
        100: '#94A6CB',
        200: '#365593',
        300: '#1A366A',
        400: '#152B54',
      },
    },
    extend: {},
  },
  plugins: [],
}

