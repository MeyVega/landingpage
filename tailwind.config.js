export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space': '#0B1026',
        'star': '#64CCC5',
        'nebula': '#7E30E1',
        'cosmos': '#1A1B4B',
      },
      fontFamily: {
        'space': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}