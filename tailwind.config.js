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
      },
    },
  },
  plugins: [],
}