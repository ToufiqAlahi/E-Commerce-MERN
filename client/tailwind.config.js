/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#68b8e2",

          secondary: "#9ab7ed",

          accent: "#b5f73b",

          neutral: "#191E24",

          "base-100": "#F4F0F4",

          info: "#296ADB",

          success: "#2BE378",

          warning: "#EDCB45",

          error: "#E34564",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
