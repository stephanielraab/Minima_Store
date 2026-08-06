import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      colors: {
        cream: "#FAFAF8",
        charcoal: "#1C1C1C",
        "warm-gray": "#6B6866",
        stone: {
          50: "#FAFAF8",
          100: "#F5F3F0",
          200: "#EBE8E3",
          300: "#D6D2CB",
          400: "#A8A29A",
          500: "#79746C",
          600: "#57524B",
          700: "#3D3935",
          800: "#292623",
          900: "#1C1A17",
        },
        accent: "#C2A67A",
        "accent-hover": "#A8906A",
      },
      letterSpacing: {
        widest: "0.3em",
      },
    },
  },
  plugins: [],
};

export default config;
