import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#EA6700',
        secondary: '#374A99',
        flexbiege: '#FDDA8D',
      },
      fontFamily: {
        kulture: ['var(--font-kulture)'],
        lato: ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
}
export default config
