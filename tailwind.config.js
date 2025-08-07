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
        lightgray: {
          50: "#f6f7f8",
          100: "#eeeff1",
          200: "#dbdde2",
          300: "#c3c7cd",
          400: "#a5aab5",
          500: "#8f94a2",
          600: "#7e8292",
          700: "#717484",
          800: "#5f626e",
          900: "#4e505a",
          950: "#323339",
        },
      },
    },
  },
  plugins: [],
};
