/** @type {import('tailwindcss').Config} */
export default {
  $schema: 'https://shadcn.com/schema.json', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['"Ubuntu"', "sans-serif"],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        },
        moveX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(50px)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        moveX: 'moveX 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

