/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navColor: "#082f49",
        hoverColor: "#075385",
        buttonColor: "#0e91e9",
        cardColor: "#bae2fd",
        customBg: "#7799b9"  
      },
      screens: {
        'custom-lg': '950px'
      }
    },
  },
  plugins: [],
};
