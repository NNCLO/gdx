module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      animation: {
        'title-pulse': 'titlePulse 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        titlePulse: {
          '0%, 100%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' },
          '50%': { transform: 'scale(1.02)', filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.6))' },
        },
      },
    },
  },
  plugins: [],
};