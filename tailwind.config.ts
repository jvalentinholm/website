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
        white: "#FFFFFF",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(35, 31, 32, 0.08)",
        card: "0 18px 50px rgba(38, 93, 55, 0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
