/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#020409',
          900: '#060d1a',
          800: '#0a1628',
          700: '#0f2035',
          600: '#152840',
        },
        hud: {
          cyan: '#00e5ff',
          blue: '#0d7fff',
          teal: '#1de9b6',
          dim: '#0a2540',
          grid: '#0e2a3a',
        },
        ship: {
          text: '#d4e5f4',
          muted: '#7ba4c0',
          faint: '#3d5f74',
          alert: '#ff6b35',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        display: ['"Barlow Condensed"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        hud: '0.1em',
        mission: '0.2em',
      },
      backgroundImage: {
        'grid-hud': [
          'linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)',
        ].join(','),
      },
      backgroundSize: {
        'grid-40': '40px 40px',
      },
      animation: {
        'pulse-hud': 'pulse-hud 2.5s ease-in-out infinite',
        flicker: 'flicker 5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-hud': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        flicker: {
          '0%, 89%, 91%, 95%, 100%': { opacity: '1' },
          '90%': { opacity: '0.7' },
          '92%': { opacity: '0.9' },
          '94%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

