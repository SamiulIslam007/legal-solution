/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern":
          "linear-gradient(180deg, #111 0%, rgba(17, 17, 17, 0.00) 100%), url('./images/header-banner.png')",
      }),
    },
  },
  plugins: [],
};
