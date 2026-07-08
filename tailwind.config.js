/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0e14',
        panel: '#12161c',
        'panel-raised': '#161b23',
        slate: {
          DEFAULT: '#232938',
          soft: '#1a1f2a',
        },
        'ink-text': '#e7eaf0',
        muted: '#8b94a7',
        dim: '#5a6274',
        green: {
          DEFAULT: '#4ade80',
          dim: '#1f3d2c',
        },
        amber: {
          DEFAULT: '#f5a623',
          dim: '#3d2f14',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        page: '1120px',
      },
      keyframes: {
        'scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        blink: {
          '50%': { opacity: 0 },
        },
      },
      animation: {
        'scroll-left': 'scroll-left 34s linear infinite',
        blink: 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
}
