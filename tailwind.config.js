module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      one:    '#0E2C7A',
      two:    '#5D5C8E',
      three:  '#F0EDFF',
      four:   '#00C893',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
