import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg1":"./banner.webp",
        "bg2":"./banner2.webp",
      },
      screens: {
        "xs": '431px',
        "xs2": '530px',
        "leawidth":"320px",
        "lastwidth":'350px',
        'largewidth':'1050px',
        'largelast':'1100px',
      },
      colors:{
        primary:"#FF9315",
      }
    },
  },
  plugins: [],
};
export default config;
