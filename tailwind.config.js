/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
            playfair: ["Playfair Display", "serif"], // 'sans-serif' mat likho
          },
        maxWidth: {
          "6.5xl": "90rem", // max-w-6xl se thoda zyada width
        },
      },
    },
    plugins: [],
  };
  