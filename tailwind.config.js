module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
  },
  plugins: [],
};
