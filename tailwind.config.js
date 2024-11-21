/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-background": "#f4f4f4",
        "light-background-90": "rgba(244, 244, 244, 0.9)",
        "gray-text": "#585858",
        "gray-text-800": "#252525",
        "gray-title": "#454545",
        "light-text": "#EEEDED",
        "light-border": "rgba(217, 217, 217)",
        "light-border-50": "rgba(217, 217, 217, 0.5)",
        red: "rgba(255, 41, 41, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3xl": "0px 4px 49px rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [],
};
