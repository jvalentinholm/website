import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        coreGreen: "#265D37",
        freshGreen: "#5FB130",
        orange: "#E59515",
        offWhite: "#EFE3CE",
        petroleum: "#326875",
        black: "#231F20",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(35,31,32,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
