import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        surface: "#1A1A1A",
        olive: "#3F4F2C",
        accent: "#C3F22F",
        light: "#F1F1F1",
      },
      fontFamily: {
        heading: ["var(--font-barlow)", "Barlow Condensed", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(195, 242, 47, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(195, 242, 47, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
