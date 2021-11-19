module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'deep-purple': '#572ce8',
        'light-gray': '#f6f7fb',
        'deep-gray': '#898ca6',
        'deep-orange': '#ff8500'
      },
      fontFamily: {
        'roboto': 'Roboto,Helvetica,Arial,sans-serif'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
