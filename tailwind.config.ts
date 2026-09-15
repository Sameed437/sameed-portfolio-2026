import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#08090B', // page
        surface: {
          DEFAULT: '#0E1014', // cards
          raised: '#15181E', // hover / elevated
        },
        line: {
          DEFAULT: '#22262E', // borders
          soft: '#171A20',
        },
        fg: {
          DEFAULT: '#F2F3F5', // headings
          muted: '#A2A9B4', // body
          faint: '#6E7683', // meta
        },
        accent: {
          DEFAULT: '#E8A33D', // the single accent — warm, not violet
          dim: '#B97F26',
          wash: 'rgba(232,163,61,0.10)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        display: [
          'clamp(2.6rem, 6.5vw, 5rem)',
          { lineHeight: '1.04', letterSpacing: '-0.035em' },
        ],
        title: [
          'clamp(1.9rem, 3.6vw, 3rem)',
          { lineHeight: '1.1', letterSpacing: '-0.028em' },
        ],
        lead: [
          'clamp(1.05rem, 1.4vw, 1.3rem)',
          { lineHeight: '1.65', letterSpacing: '-0.008em' },
        ],
      },
      letterSpacing: { label: '0.16em' },
      maxWidth: { shell: '80rem', prose: '40rem' },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.4), 0 8px 24px -12px rgba(0,0,0,0.7)',
        lift: '0 2px 4px rgba(0,0,0,0.4), 0 24px 48px -20px rgba(0,0,0,0.85)',
        glow: '0 0 0 1px rgba(232,163,61,0.25), 0 12px 40px -16px rgba(232,163,61,0.35)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.85)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
