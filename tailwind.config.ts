import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#2b0070",
          800: "#102952",
          700: "#420f4f",
          600: "#9785ea",
        },
        gray: {
          600: "#283003",
          700: "#c0c0c0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
