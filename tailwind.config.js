module.exports = {
  future: {
    //removeDeprecatedGapUtilities: true,
    //purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        normal: "0px 0px 20px -5px rgba(17, 21, 23, 0.5)",
        active: "0px 0px 30px -10px rgba(17, 21, 23, 0.75)",
      },
      colors: {
        blue: {
          dark_blue: "#2B3845",
          semi_dark_blue: "#202C36",
          very_dark_blue: "#111517",
        },
        gray: {
          dark_gray: "#848484",
          very_light_gray: "#F9F9F9",
        },
      },
      fontFamily: {
        sans: ["Nunito Sans"],
      },
      height: {
        "h-72": "18rem",
        "h-80": "20rem",
        "h-88": "22rem",
      },
      rotate: {
        145: "145deg",
      },
      screens: {
        xs: "375px",
        "2xl": "1440px",
      },
      spacing: {
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        wrapper: "35rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
