/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        limegreen: "hsl(163, 72%, 41%)",
        brightred: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youTube: "hsl(348, 97%, 39%)",
        verydarkbluebg: "hsl(230, 17%, 14%)",
        verydarkbluetop: "hsl(232, 19%, 15%)",
        darkdesaturatedbluecard: "hsl(228, 28%, 20%)",
        desaturatedbluetext: "hsl(228, 34%, 66%)",
        lighttheme: "hsl(230, 22%, 74%)",
        VeryPaleBlueTop: "hsl(225, 100%, 98%)",
        LightGrayishBlue: "hsl(227, 47%, 96%)",
        DarkGrayishBlue: "hsl(228, 12%, 44%)",
        VeryDarkBlue: "hsl(230, 17%, 14%)",
        hoverdarkmode: "hsl(228deg 25.55% 26.86%)",
      },
      backgroundImage: {
        instagram: "linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        darktheme: "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
