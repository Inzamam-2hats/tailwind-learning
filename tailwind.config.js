/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['graphik', 'sans-serif'],
      serif: ['merriweather', 'serif']
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      colors: {
        myColor: "#d0d0d0"
      },
    },
  },
  plugins: [],
}