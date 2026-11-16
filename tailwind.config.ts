import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#06080F', // luxury deep obsidian canvas
        surface: {
          DEFAULT: '#0B0F19', // sleek cards
          raised: '#121826', // hover / elevated
        },
        line: {
          DEFAULT: '#1B2436', // refined hairline borders
          soft: '#131A28',
        },
        fg: {
          DEFAULT: '#F8FAFC', // brilliant crisp headings
          muted: '#94A3B8', // balanced slate body
          faint: '#64748B', // meta & technical labels
        },
        accent: {
          DEFAULT: '#00D2EE', // Electric Cyan — high-tech AI authority
          dim: '#00B4D8',
          wash: 'rgba(0, 210, 238, 0.08)',
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
        glow: '0 0 0 1px rgba(0, 210, 238, 0.25), 0 14px 40px -14px rgba(0, 210, 238, 0.38)',
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
