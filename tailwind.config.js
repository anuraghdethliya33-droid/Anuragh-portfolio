/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          50: '#fff5f7',
          100: '#ffe3eb',
          200: '#fcc2d2',
          300: '#f799b4',
          400: '#f06595',
          500: '#e64980',
          600: '#d6336c',
          700: '#c2255c',
          800: '#9c1c49',
          900: '#4a1525',
          950: '#2b0914',
        },
        bloom: {
          light: '#fff9fa',
          mist: '#fae8ee',
          blush: '#f9d2de',
          stem: '#4a5568',
          night: '#130d17',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'sakura-sm': '0 2px 10px rgba(240, 101, 149, 0.1)',
        'sakura-md': '0 8px 30px rgba(240, 101, 149, 0.15)',
        'sakura-lg': '0 14px 40px rgba(240, 101, 149, 0.22)',
        'glass': '0 8px 32px 0 rgba(220, 140, 170, 0.15)',
        'glass-hover': '0 12px 40px 0 rgba(220, 140, 170, 0.28)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
        'sway': 'sway 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
