module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '0.5': '0.5 1 0%',
        '1.5': '1.5 1 0%',
      },
      screens: {
        'xs': '360px'
      },
      colors: {
        'present': '#B59F3B',
        'correct': '#538D4E',
        'absent': '#3A3A3C',
        'gray-250': '#D7DADC'
      },
      fontFamily: {
        'sans': ['Clear Sans', 'Helvetica Neue', 'Roboto', 'sans-serif']
      },
      height: {
        '13': '50px',
        '50': '200px',
        '105': '420px'
      },
      width: {
        '87': '350px'
      }
    },
  },
  plugins: [],
}
