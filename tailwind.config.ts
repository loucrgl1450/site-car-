import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E89BA',
          dark: '#0C74A0',
          deep: '#0A5F86',
          light: '#3FB4E6',
          glow: '#7CD0F0',
        },
        ink: {
          DEFAULT: '#0B0B0B',
          soft: '#3A3F46',
          mute: '#6B7076',
        },
        silver: {
          DEFAULT: '#B8B7B6',
          dim: '#8A8A8E',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -18px rgba(11,11,11,.18)',
        'card-hover': '0 24px 50px -20px rgba(14,137,186,.3)',
        cta: '0 8px 30px -8px rgba(14,137,186,.55)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(.16,.84,.44,1)',
      },
    },
  },
  plugins: [],
};

export default config;
