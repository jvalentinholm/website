import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cx: {
          white: "#FFFFFF",
          black: "#231F20",
          petroleum: "#326875",
          offwhite: "#EFE3CE",
          orange: "#E59515",
          freshgreen: "#5FB130",
          coregreen: "#265D37"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(35,31,32,0.08)"
      },
      borderRadius: {
        cx: "28px"
      }
    }
  },
  plugins: []
};
export default config;
