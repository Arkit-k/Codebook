import type { Config } from "tailwindcss";
// const colors = require("./Colors2.tsx");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // colors: colors,
        mainColor: "#3399ff",
        // mainColor: "#00ff00",
        // mainColor: "#8338EC",
      },
    },
  },
  plugins: [],
};
export default config;
