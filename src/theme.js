import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const red = {
  100: "#CD5C5C",
  200: "#F08080",
  300: "#FA8072",
  400: "#E9967A",
  500: "#FFA07A",
  600: "#DC143C",
  700: "#FF0000",
  800: "#B22222",
  900: "#8B0000",
};

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: red[600],
        main: red[800],
        dark: red[900],
        contrastText: red[600],
      },
      secondary: {
        light: red[500],
        main: red[400],
        dark: red[300],
        contrastText: red[200],
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    typography: {
      fontFamily: "Lato, sans-serif",
      h1: {
          fontWeight : 600
      },
      h2: {
        fontWeight : 600
      },
      h3: {
          fontWeight : 600
      },
      h4: {
          fontWeight : 600
      },
      h5: {
          fontWeight : 600
      },
      h6: {
          fontWeight:600
      },
      subtitle1: {},
      subtitle2: {},
      body1: {},
      body2: {},
      button: {},
      caption: {},
      overline: {},
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    spacing: [0, 4, 8, 16, 32, 64],
  })
);
