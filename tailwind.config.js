/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'mainbg' : '#000000',
        'secondbg' : '#C3FF00',
        'thirdbg' : '#4638FF',
      },
      textColor: {
        'whitetxt': '#FFFFFF',
        'maintxt': '#C3FF00',
        'sectxt': '#4638FF'
      },
      fontFamily: {
        rowdies: "rowdies",
        ubuntu: 'ubuntu',
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
