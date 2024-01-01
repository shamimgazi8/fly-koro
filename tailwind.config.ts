import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    
      screens: {
        xsm: "490px",
        smd: "620px",
      },
      colors: {
        primary: "#00006D",
        white: "#fff",
        secondary: "#FF9100",
        tertiary: "#EA0519",
        grey: "#FAFAFF",
        black: "#000",
        hover: "#be1622",
        heading: "#170103",
        body: "#5D586C",
        danger: "#EA5455",
      },
      fontSize: {
        headerLg: "56px",
      },
    },
  },
  plugins: [],
};
export default config;
