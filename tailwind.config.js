module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      colors: {
        'overlay': 'rgba(0, 0, 0, 0.4)',
        'gray': '#2F3439',
        'green': '#71B543',
        'midGray':'#A1A1AA',
        'lightGray': '#F5F5F5',
        'lightBlue':'#E2E8F0',
        'text': '#090914',
        'white': '#FFF'
      },
    },
  },
  plugins: [],
}