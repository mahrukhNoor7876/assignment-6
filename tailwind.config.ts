import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        'bg-gradient':'linear-gradient(to bottom, rgba(0,6,12,1) 20%, rgba(0, 12, 25, 1) 80% )',
      }
    },
  },
  plugins: [],
};
export default config;
