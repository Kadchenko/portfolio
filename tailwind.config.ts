import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        'btn-primary': '-4px -4px 4px 0px rgba(255, 254, 254, 0.25) inset',
        'btn-primary-active': '0 0 0 0 rgba(255, 254, 254, 0.25) inset',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': `linear-gradient(118deg, #9747FF, 23.58%, #3178C6 79.17%)`,
      },
      gridTemplateRows: {
        'main-layout': 'auto minmax(max-content, 1fr) auto',
      },
      colors: {
        white: '#F3F3F3',
        black: '#040404',
        green: '#55E232',
        accent: '#9747FF',
        primary: '#3178C6',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
