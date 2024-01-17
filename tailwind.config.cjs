/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "#9137A8",
        secondary: "#CB384A",
        accent: "#C95C85",
        background: "#040713",
        "background-gray": "#323239",
        text: "#D1CFEC",
      },
    },
  },
};