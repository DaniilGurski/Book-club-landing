/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    screens: {
      desktop: "79.625em",
      tablet: "48em",
      mobile: "36.563em",
    },

    extend: {
      fontFamily: {
        inter: ["Inter", "sans"],
        martian: ["Martian Mono", "mono"],
      },

      fontSize: {
        "50px": "3.125rem",
        "34px": "2.125rem",
      },

      width: {
        "almost-full": "90%",
      },

      colors: {
        neutral: {
          900: "hsl(194, 78%, 11%)",
          700: "hsl(195, 23%, 28%)",
          200: "hsl(17, 12%, 89%)",
          100: "hsl(17, 41%, 97%)",
        },

        "light-salmon": {
          500: "hsl(22, 99%, 72%)",
          100: "hsl(22, 100%, 91%)",
          50: "hsl(22, 100%, 97%)",
        },
      },

      backgroundImage: {
        "text-gradient":
          "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)",
        "custom-gradient": "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
        "pattern-light": "url('/src/assets/images/pattern-light-bg.svg')",
        "pattern-dark": "url('/src/assets/images/pattern-dark-bg.svg')",
        "pattern-glow": "url('/src/assets/images/pattern-glow.svg')",
      },

      boxShadow: {
        "button-active":
          "0px 0px 0px 4px white, 0px 0px 0px 8px hsl(195, 23%, 28%)",
        "ft-button-active":
          "0px 0px 0px 4px hsl(194, 78%, 11%), 0px 0px 0px 8px white",
      },
    },
  },
  plugins: [],
};
