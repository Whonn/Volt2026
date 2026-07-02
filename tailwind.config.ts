import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        charcoal: "#141414",
        card: "#191919",
        line: "#2A2A2A",
        bone: "#F4F4EF",
        mute: "#8C8C86",
        volt: "#D4FF3D",
        surge: "#FF4620",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;
