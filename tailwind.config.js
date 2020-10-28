module.exports = {
  future: {
    //removeDeprecatedGapUtilities: true,
    //purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        normal: "0px 20px 50px 0px rgba(206, 150, 150)",
        active: "0px 10px 10px 0px rgba(250, 210, 210)",
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
      screens: {
        xs: "375px",
        "2xl": "1440px",
      },
      spacing: {
        wrapper: "35rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
