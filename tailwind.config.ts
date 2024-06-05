import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      keyframes: {
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(-15%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(15%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      colors: {
        "light-blue-1": "#EEDCFF",
        "purple-1": "#9B51E0",
        "white-1": "#FFFFFF",
        "white-2": "#F2F2F2",
        "black-1": "#333333",
        "black-2": "#4F4F4F",
        secondary: "#FCEED3",
        "gray-1": "#E0E0E0",
        "gray-2": "#828282",
        "gray-3": "#BDBDBD",
        primary: "#2F80ED",
        warning: "#E5A443",
        danger: "#EB5757",
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "slide-in-bottom": "slide-in-bottom 300ms ease-out",
        "slide-in-left": "slide-in-left 300ms ease-out",
      },
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};
export default config;
