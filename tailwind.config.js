module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ProjectPurple" :"#5267DF",
        "ProjectRed" :"#FA5959",
        "ProjectBlue" :"#242a45",
        "ProjectGrey" :"#9194A2",
        "ProjectWhite" :"#F7F7F7",
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screen : {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
