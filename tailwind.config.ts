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
        bg: "#0b0b0f",
        surface: "#111118",
        surface2: "#1a1a24",
        accent: "#c8f05c",
        accent2: "#7c6bff",
        muted: "#6e6e80",
        card: "#13131c",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
