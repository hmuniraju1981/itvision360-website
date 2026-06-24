import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        accent: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
        },
        dark: {
          50: "#1e293b",
          100: "#1a2234",
          200: "#141c2b",
          300: "#0f172a",
          400: "#0c1220",
          500: "#0a0f1a",
          600: "#080d15",
          700: "#060a10",
          800: "#04070b",
          900: "#020305",
          950: "#0a0a0f",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(6, 182, 212, 0.1)" },
          "100%": { boxShadow: "0 0 40px rgba(6, 182, 212, 0.3)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
