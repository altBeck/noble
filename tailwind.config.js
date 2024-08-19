/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Inter"', 'system-ui'],
        'display': ['"Bebas Neue"', 'system-ui'],
        'nav': ['"Figtree"', 'system-ui'],
      },
      colors: {
        regal: {
          '100': "rgba(5, 39, 52, 0.8) 45.79%",
          '200': "rgba(255, 255, 255, 0.10)",
          '300': "rgba(255, 255, 255, 0.20)",
          '400': "rgba(24, 24, 24, 0.70)",
        },
        sliteWhite: {
          '100': "rgba(255, 255, 255, 0.20)",
        },
      },
      height: {
        '100dvh': '100dvh',
      },
      screens: {
        'bigPhone': "385px",
        'max-sm': {'max': '640px'},  // max-width for sm
        'max-md': {'max': '768px'},  // max-width for md
        'max-lg': {'max': '1024px'}, // max-width for lg
        'max-xl': {'max': '1280px'}, // max-width for xl
        'max-2xl': {'max': '1536px'},// max-width for 2xl
      },
      transitionDuration: {
        '300': '300ms',
        '200': '200ms',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
    },
  },
  plugins: [],
}

