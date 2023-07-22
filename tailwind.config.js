/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "black-light": "#232323",
        "lilac": "#DDDBF1",
        "lilac-800": "rgba(221, 219, 241, 0.8)",
        "light-green": "#48E5C2",
        "dark-green": "#08AF93",
        "grey": "#6B7F82",
        "light-grey": "#2C2C2C",
      },
      fontFamily: {
        "mysans": "sans-serif"
      }
    },
  },
  plugins: [],
}
