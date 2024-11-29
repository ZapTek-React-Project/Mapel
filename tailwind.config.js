/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screen: {
      sm: "200px",
      md: "576px",
      "2md": "720px",
      lg: "1080px",
    },
    extend: {
      fontSize:{
      "customsize": '16px',
    },
      colors: {
        "--background": "#f0eadd",
        '--body': '#333',
        customcolour: '#a6a56f',
        custompink: '#fad7d4',
      },
    },
  },
  plugins: [],
};
