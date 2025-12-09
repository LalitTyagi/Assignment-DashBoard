// tailwind.config.cjs
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        bgDeep: '#050017',
        bgCard: '#08042b',
        neonBlue: '#32e4ff',
        neonPink: '#ff3bff',
        neonPurple: '#7a3cff',
        neonGreen: '#3cff95',
        textMuted: '#a5b4fc',
      },
      boxShadow: {
        neonBlue: '0 0 25px rgba(50, 228, 255, 0.7)',
        neonPink: '0 0 25px rgba(255, 59, 255, 0.7)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
