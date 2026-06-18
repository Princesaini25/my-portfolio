import { extendedConfig } from "./src/utils/extendedConfig";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',   // Laptop default
        xl: '1280px',   // PC/Desktop
        '2xl': '1440px', // Extra Large PC
      },
    },
    extend: {
      ...extendedConfig
    },
  },
  plugins: [],
};
export default config;