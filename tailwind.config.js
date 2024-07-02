/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "hsl(0, 0%, 8%)",
        "dark-gray": "hsl(0, 0, 14%)",
        accent: "hsl(153, 71%, 59%)",
        "light-gray": "hsl(0, 0%, 100%)",
        gray: "hsl(0, 0%, 85%)",
        red: "hsl(7, 100%, 68%)",
      },
      fontFamily: {
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        html: {
          boxSizing: "border-box",
          fontSize: "100%",
        },
        "*": {
          boxSizing: "inherit",
        },
        "*::before": {
          boxSizing: "inherit",
        },
        "*::after": {
          boxSizing: "inherit",
        },
        body: {
          fontFamily: theme("fontFamily.space-grotesk"),
          fontOpticalSizing: "auto",
          fontWeight: "normal",
          fontStyle: "normal",
          fontSize: "1.125rem",
          lineHeight: "1.56",
        },
        h1: { fontSize: "5.5rem", lineHeight: "" } /*4.5rem T,2.5rem M */,
        h2: { fontSize: "3rem", lineHeight: "" } /*2rem M*/,
        h3: { fontSize: "5.5rem", lineHeight: "" },
        ".container-wrapper": {
          width: "calc(100% - 2rem)",
          maxWidth: "69.375rem",
          marginInline: "auto",
        },
      });
      addComponents({
        "@media (min-width: 37.5em)": {
          ".container-wrapper": {
            width: "calc(100% - 3.75rem)",
          },
        },
      });
      addUtilities(
        {
          a: {
            transitionProperty: theme("transitionProperty.colors"),
            transitionDuration: theme("transitionDuration.300"),
            transitionTimingFunction: theme(
              "transitionTimingFunction.ease-in-out"
            ),
          },
          "a:hover": {
            color: theme("colors.accent"),
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
