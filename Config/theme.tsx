import { createTheme } from "@mui/material/styles";
// Create a theme instance.
// set primary color as per given document
const primary = {
  main: "#2BD17E",
  contrastText: "white",
}; // set secondary color as per given document
const secondary = {
  main: "#FFFFFF",
  contrastText: "white",
};

const theme = createTheme({
  // set typography color,fontSize,lineHeight as per given document
  typography: {
    fontFamily: "Montserrat",

    h1: {
      fontSize: "64px",
      lineHeight: "80px",
      color: "white",
    },
    h2: {
      fontSize: "48px",
      color: "white",
      lineHeight: "56px",
      fontWeight: 600,
    },
    h3: {
      color: "white",
      fontSize: "32px",
      lineHeight: "40px",
    },
    h4: {
      color: "white",
      fontSize: "24px",
      lineHeight: "32px",
    },
    h5: {
      color: "white",
      fontSize: "20px",
      lineHeight: "24px",
    },
    h6: {
      color: "white",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  palette: {
    primary: primary,
    secondary: secondary,
  },
});
export default theme;
