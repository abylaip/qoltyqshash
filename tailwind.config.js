module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: "5rem",
    },
    extend: {
      colors: {
        accent: "#005A9B",
        "low-contrast": "#7D92A1",
        "high-contrast": "#324552",
      },
      screens: {
        monic: "1800px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
