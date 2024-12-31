/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
        'responsive': '320px',
        'iphoneSE': '375px',
        'iphoneXR': '428px',
        'iphone12': '480px',
        'iphone12Pro': '540px',
        'iphone12ProMax': '672px',
        'iphone13': '684px',
        'iphone13Pro': '750px',
        'iphone13ProMax': '812px',

      'mobile': '320px',
      // => @media (min-width: 320px) { ... }

      'tablets': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'move': 'move 20s linear infinite',
        'move-mobile': 'move 10s linear infinite',
      }
    },
    fontFamily:{
      'spartan':['League Spartan', 'sans-serif'],
      'Aeonik-Bold':['Aeonik TRIAL',],
    }
  },
  plugins: [],
}

