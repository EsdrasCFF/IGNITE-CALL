import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        black: '#000',
        gray_100: '#E1E1E6',
        gray_200: '#A9A9B2',
        gray_400: '#7C7C8A',
        gray_500: '#505059',
        gray_600: '#323238',
        gray_700: '#29292E',
        gray_800: '#202024',
        gray_900: '#121214',
        green_300: '#00B37E',
        green_500: '#00875F',
        green_700: '#00875F',
        green_900: '#00291D'
      },
    },
  },
  plugins: [],
}
export default config
