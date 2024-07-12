/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        cyanLight: "hsl(180, 66%, 69%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%) ",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-out-up": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
        },
        "fly-in-right": {
          "0%": {
            opacity: "0",
            transform: "translate3d(-1500px, 0, 0)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": {
            opacity: "1",
            transform: "translate3d(25px, 0, 0)",
          },
          "75%": {
            transform: "translate3d(-10px, 0, 0)",
          },
          "90%": {
            transform: "translate3d(5px, 0, 0)",
          },
          "100%": {
            transform: "none",
          },
        },
        "fly-in-left": {
          "0%": {
            opacity: "0",
            transform: "translate3d(1500px, 0, 0)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": {
            opacity: "1",
            transform: "translate3d(-25px, 0, 0)",
          },
          "75%": {
            transform: "translate3d(10px, 0, 0)",
          },
          "90%": {
            transform: "translate3d(-5px, 0, 0)",
          },
          "100%": {
            transform: "none",
          },
        },
      },
      animation: {
        fadeindown: "fade-in-down 0.2s ease-in 0s 1",
        fadeoutup: "fade-out-up 0.2s ease-in-out 0s 1",
        flyinright: "fly-in-right 0.6s ease-in-out 0s 1",
        flyinleft: "fly-in-left 0.6s ease-in-out 0s 1",
      },
    },
  },
  plugins: [],
};
