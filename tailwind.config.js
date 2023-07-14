/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2184b2",

          secondary: "#4a0a72",

          accent: "#f4967f",

          neutral: "#1e1d2f",

          "base-100": "#eeeff1",

          info: "#4672d8",

          success: "#5aedd2",

          warning: "#b37b14",

          error: "#f42a6d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

