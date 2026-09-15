import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FBFAF7', // page
          alt: '#F4F2EC',     // alternating band
          card: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#14130F', // headings / primary
          muted: '#44423B',   // body copy
          faint: '#79766C',   // meta, labels
        },
        rule: '#E3E0D6',      // hairlines
        accent: {
          DEFAULT: '#B2451F', // the single accent — used sparingly
          hover: '#8C3415',
          soft: '#F6EBE4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // fluid display sizes — no JS, no layout thrash
        display: ['clamp(2.75rem, 7vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        title: ['clamp(1.9rem, 4vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        lead: ['clamp(1.0625rem, 1.5vw, 1.375rem)', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        label: '0.16em',
      },
      maxWidth: {
        shell: '78rem',
        prose: '38rem',
      },
    },
  },
  plugins: [],
};

export default config;
