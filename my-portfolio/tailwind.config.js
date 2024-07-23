module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00ADB5',
        secondary: '#393E46',
        accent: '#FFD369',
        dark: '#222831',
      },
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'background-move': 'backgroundMove 10s infinite linear',
      },
      keyframes: {
        backgroundMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
