module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'science-blue': '#0055d4ff',
        'deep-pink': '#ff0066ff',
      },
      fontFamily: {
        'mono': ['IBM Plex Mono', 'monospace', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
}
