import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0A0A0A',
          800: '#0F0F12',
          700: '#15151A',
          600: '#1C1C24',
        },
        violet: {
          DEFAULT: '#7C3AED',
          50: '#F5F3FF',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          900: '#4C1D95',
        },
        bone: '#F8F8F8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-playfair)', 'ui-serif', 'Georgia'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px -2px rgba(124, 58, 237, 0.35)',
        glow: '0 0 40px -4px rgba(124, 58, 237, 0.45)',
        'glow-lg': '0 0 80px -8px rgba(124, 58, 237, 0.55)',
        'inner-glow': 'inset 0 0 30px rgba(124, 58, 237, 0.18)',
      },
      backgroundImage: {
        'grid-violet':
          'linear-gradient(to right, rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,58,237,0.08) 1px, transparent 1px)',
        'radial-violet':
          'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.25), transparent 60%)',
        shimmer:
          'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.18) 50%, transparent 75%)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.6)' },
          '50%': { boxShadow: '0 0 0 8px rgba(34,197,94,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 12px rgba(124,58,237,0.35)' },
          '50%': { boxShadow: '0 0 24px rgba(124,58,237,0.7)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-out infinite',
        shimmer: 'shimmer 2.2s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2.4s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
    },
  },
  plugins: [],
};

export default config;
