const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      screens: {
        "7xl": "1575px",
        "6xl": "1475px",
        "5xl": "1460px",
        "4xl": "1375px",
        "3xl": "1330px",
        "2xlMiddle3xl": "1315px",
        "2xl": "1300px",
        "7lg": "1275px",
        "6lg": "1250px",
        "5lg": "1225px",
        "4lg": "1200px",
        "3lg": "1075px",
        "2lg": "1030px",
        "6md": "960px",
        "5md": "900px",
        "4md": "850px",
        "3md": "831px",
        "2md": "800px",
        xs: "575px",
        "2xs": "500px",
        "3xs": "475px",
        "4xs": "435px",
        "5xs": "425px",
        "6xs": "400px",
        "7xs": "375px",
      },
    },
  },
  plugins: [flowbite.plugin()],
  darkMode: "class",
};
