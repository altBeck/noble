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
    },
  },
  plugins: [],
}

