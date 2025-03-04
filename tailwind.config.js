// tailwind.config.ts
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondo principal pastel (inspirado en el contorno teal de la oveja)
        'space': '#E6F8F8',
        // Teal principal (contorno de la oveja)
        'star': '#68A3A8',
        // Teal más claro (para hover, acentos suaves, etc.)
        'nebula': '#9CD1D4',
        // Negro para contrastes fuertes o textos destacados (cuerpo de la oveja)
        'cosmos': '#000000',
      },
      fontFamily: {
        'space': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
