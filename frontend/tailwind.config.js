/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      animation: {
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glowing: "glowing 1.5s infinite alternate",
        "gradient-sweep": "gradient-sweep 2s ease-in-out infinite",
      },
      fontFamily: {
        display: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        h1: "2.5rem", // 40px for a more impactful heading
        h2: "2rem", // 32px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
      },
      lineHeight: {
        h1: "3rem", // 48px
        h2: "2.5rem", // 40px
      },
      colors: {
        lutapiPurpleDark: "hsl(265, 60%, 32%)",
        lutapiPurple: "hsl(265, 70%, 42%)",
        lutapiPurpleLight: "hsl(265, 70%, 52%)",
        lutapiPurpleVeryLight: "hsl(265, 90%, 95%)",
        lutapiAccentPurple: "hsl(265, 100%, 62%)",
        brightRed: "hsl(12, 88%, 59%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        lightGray: "hsl(208, 11%, 53%)",
      },
      backgroundSize: {
        "200%": "200%",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        "gradient-sweep": {
          "0%": { backgroundPosition: "200% 0%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        glowing: {
          "0%": {
            boxShadow:
              "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.5)",
          },
          "50%": {
            boxShadow:
              "0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.9), 0 0 40px rgba(255, 255, 255, 0.8)",
          },
          "100%": {
            boxShadow:
              "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.5)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
