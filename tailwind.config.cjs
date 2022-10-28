/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        bgDark: '#1E1E1E',
        dark: '#1D2123',
        skyBlue: '#609EAF',
        secondary: '#FACD66',
        primary: '#A4C7C6',
        darkAlt: '#1A1E1F',
        VeryLightGray: '#A4C7C6',
        white: ' #EFEEE0',
      },

      fontFamily: {
        QuickSand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
