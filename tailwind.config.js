/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f5ff',
        'neon-green': '#39ff14',
        'cyber-dark': '#0a0a0a',
        'cyber-gray': '#1a1a1a',
        'cyber-light': '#2a2a2a',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
        'cyber': ['Orbitron', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'matrix': 'matrix 20s linear infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff' },
          '100%': { boxShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff' }
        },
        'pulse-neon': {
          '0%, 100%': { opacity: 1, textShadow: '0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14' },
          '50%': { opacity: 0.8, textShadow: '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14' }
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        'blink-caret': {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#39ff14' }
        },
        blink: {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 }
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
