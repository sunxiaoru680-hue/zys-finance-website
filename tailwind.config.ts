import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17211f",
        graphite: "#3f4743",
        line: "#d9dfdc",
        paper: "#f7f8f6",
        evergreen: "#0f5b4a",
        harbor: "#195d73",
        gold: "#b99145"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 36, 31, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
