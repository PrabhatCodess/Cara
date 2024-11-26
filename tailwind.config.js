/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
      'mobile': '320px',
      // => @media (min-width: 320px) { ... }

      'tablets': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
    fontFamily:{
      'spartan':['League Spartan', 'sans-serif']
    }
  },
  plugins: [],
}

