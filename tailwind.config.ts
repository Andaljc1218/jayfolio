import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{mdx,md}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          '"SF Mono"',
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      maxWidth: {
        prose: "768px",
        project: "680px",
        content: "1200px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
      animation: {
        bounce: "bounce 1s ease-in-out infinite",
        "bounce-y": "bounce-y 2s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-4px)", opacity: "0.6" },
          "50%": { transform: "translateY(0)", opacity: "1" },
        },
        "bounce-y": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(-8px)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      transitionTimingFunction: {
        "ease-out": "ease-out",
        "ease-in-out": "ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
