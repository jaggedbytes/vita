module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounding-box': 'bounding-box 2.1s linear 0s 1 forwards',
        'lid': 'lid 0.9s linear 2.1s 1 forwards',
        'tracer': 'tracer 1s linear 0.9s 1 forwards',
        'sprout': 'sprout 0.9s linear 1.9s 1 forwards',
        'floret-pink': 'floret-pink 1s linear 2.8s 1 forwards',
        'floret-blue': 'floret-blue 0.1s linear 2.8s 1 forwards',
        'bounce': 'bounce 1s cubic-bezier(0.8, 0, 1, 1) infinite',
        'reanimate': 'reanimate 0.1s linear 2.61s 1 forwards',
        'boomerang': 'boomerang 2s linear 5s 1 forwards',
      },
      keyframes: ({ theme }) => ({
        'bounding-box': {
          '0%': { strokeDashoffset: -450 },
          '100%': { strokeDashoffset: 0 },
        },
        'lid': {
          '0%': { strokeDashoffset: -30, transformOrigin: '0%', transform: 'rotate(0)' },
          '10%': { strokeDashoffset: 0, transformOrigin: '0%', transform: 'rotate(0)' },
          '75%': { strokeDashoffset: 0, transformOrigin: '0%', transform: 'rotate(0)' },
          '80%': { strokeDashoffset: 0, transformOrigin: '0%', transform: 'rotate(-130deg)' },
          '85%': { strokeDashoffset: 0, transformOrigin: 'calc(50% - 40px) calc(50% - 35px)', transform: 'rotate(-150deg) translate(-40px, -35px)' },
          '100%': { strokeDashoffset: 0, transformOrigin: 'calc(50% - 80px) calc(50% - 40px)', transform: 'rotate(-540deg) translate(-80px, -40px)' },
        },
        'tracer': {
          '0%': { strokeDashoffset: 220 },
          '100%': { strokeDashoffset: 0 },
        },
        'sprout': {
          '0%': { opacity: 1, stroke: theme('colors.science-blue'), transform: 'translateX(0)' },
          '10%': { opacity: 1, stroke: theme('colors.science-blue'), transform: 'translateX(-9px)' },
          '20%': { opacity: 1, stroke: theme('colors.science-blue'), transform: 'translate(-10px, 0px)' },
          '30%': { opacity: 1, stroke: theme('colors.science-blue'), transform: 'translate(-17px, 4px)' },
          '35%': { opacity: 1, stroke: theme('colors.science-blue'), transform: 'translate(-28px, 24px)' },
          '45%': { opacity: 1, stroke: theme('colors.deep-pink'), transform: 'translate(-39px, 62px)' },
          '55%': { opacity: 1, stroke: theme('colors.deep-pink'), transform: 'translate(-39px, 30px)' },
          '60%': { opacity: 1, stroke: theme('colors.deep-pink'), transform: 'translate(-39px, 24px)' },
          '65%': { opacity: 1, stroke: theme('colors.deep-pink'), transform: 'translate(-39px, 30px)' },
          '75%': { opacity: 1, stroke: theme('colors.deep-pink'), transform: 'translate(-42px, 62px) scale(2)' },
          '99%': { opacity: 1, stroke: theme('colors.deep-pink'), transform: 'translate(-42px, -15px) scale(2)' },
          '100%': { opacity: 0, stroke: theme('colors.deep-pink'), transform: 'translate(-42px, -15px) scale(2)' },
        },
        'floret-pink': {
          '0%': { opacity: 1, transform: 'scale(2)' },
          '100%': { opacity: 1, transform: 'scale(2)' },
        },
        'floret-blue': {
          '0%': { opacity: 1, stroke: theme('colors.deep-pink'), transform: 'scale(2) translate(0px, 0px)' },
          '100%': { opacity: 1, stroke: theme('colors.science-blue'), transform: 'scale(2) translate(5px, -5px)' },
        },
        'bounce': {
          '0%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-8px)' },
        },
        'reanimate': {
          '0%': { transform: 'scaleY(0) translateY(8px)' },
          '100%': { transform: 'scaleY(1) translateY(0)' },
        },
        'boomerang': {
          '0%': { opacity: 1, stroke: 'black', transformOrigin: 'calc(50% - 200px) calc(50% + 20px)', transform: 'rotate(0) scale(1) translate(-200px, 20px)' },
          '30%': { opacity: 1, stroke: 'black', transformOrigin: 'calc(50% + 150px) calc(50% - 0px)', transform: 'rotate(-1080deg) scale(1) translate(150px, 0px)' },
          '60%': { opacity: 1, stroke: 'black', transformOrigin: 'calc(50% + 400px) calc(50% - 60px)', transform: 'rotate(-2160deg) scale(1) translate(400px, -60px)' },
          '85%': { opacity: 1, stroke: 'black', transformOrigin: 'calc(50% + 655px) calc(50% - 312px)', transform: 'rotate(-4000deg) scale(1) translate(655px, -312px)' },
          '100%': { opacity: 0.5, stroke: theme('colors.space-rock'), transformOrigin: 'calc(50% + 655px) calc(50% - 312px)', transform: 'rotate(-4000deg) scale(50) translate(655px, -312px)' },
        },
      }),
      translate: {
        base: '5px',
      },
      strokeWidth: {
        base: '5px',
      },
      colors: {
        'science-blue': '#0055d4ff',
        'deep-pink': '#ff0066ff',
        'space-rock': '#e5e7eb',
      },
      fontFamily: {
        'mono': ['IBM Plex Mono', 'monospace', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
}
