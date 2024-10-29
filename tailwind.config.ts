import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#A72F3B",
        success: {
          DEFAULT: "#00966D",
          light: "#00BA88",
          bg: "#F3FDFA",
        },
        error: {
          DEFAULT: "#C30000",
          light: "#ED2E2E",
          bg: "#FFF2F2",
        },
        warning: {
          DEFAULT: "#A9791C",
          light: "#F4B740",
          bg: "#FFF8E1",
        },
        tint: {
          100: "#FFFFFF",
          200: "#F6EAEB",
          300: "#EDD5D8",
          400: "#E5C1C4",
          500: "#DCACB1",
          600: "#CA8289",
          700: "#B95962",
        },
        shade: {
          100: "#000000",
          200: "#110506",
          300: "#21090C",
          400: "#320E12",
          500: "#431318",
          600: "#641C23",
          700: "#86262F",
        },
        neutral: {
          100: "#F8F8F8",
          200: "#F0F0F0",
          300: "#EDEDED",
          400: "#D6D6D6",
          500: "#CBCBCB",
          600: "#AFAFAF",
          700: "#898989",
          800: "#656565",
          900: "#434343",
          1000: "#242424",
        },
      },
      fontFamily: {
        "iran-sans": "var(--font-iran-sans)",
      },
      fontSize: {
        h1: "44px",
        h2: "40px",
        h3: "32px",
        h4: "24px",
        h5: "20px",
        h6: "18px",
        body1: "20px",
        body2: "18px",
        body3: "16px",
        body4: "14px",
        body5: "12px",
        cp1: "14px",
        cp2: "12px",
        cp3: "10px",
        btn1: "16px",
        btn2: "14px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
export default config;
