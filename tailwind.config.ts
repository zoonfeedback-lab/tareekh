import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        night: "#0b0b0a",
        panel: "#141311",
        panelSoft: "#1b1916",
        panelStrong: "#211d19",
        line: "#3b3328",
        lineBright: "#7d6b4f",
        gold: "#d7c29a",
        goldSoft: "#bda780",
        parchment: "#efe0bf",
        mist: "#d7cfbf",
        muted: "#8b7d66",
        ember: "#9a7d42"
      },
      fontFamily: {
        display: ["var(--font-cinzel)"],
        body: ["var(--font-garamond)"]
      },
      boxShadow: {
        lantern: "0 0 90px rgba(215, 194, 154, 0.08)"
      },
      backgroundImage: {
        "manuscript-grid":
          "linear-gradient(rgba(215,194,154,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(215,194,154,0.04) 1px, transparent 1px)",
        "ornament-fade":
          "linear-gradient(90deg, transparent, rgba(215,194,154,0.5), transparent)"
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        glow: "glow 3.8s ease-in-out infinite",
        reveal: "reveal 700ms ease-out both"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" }
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
