import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#14538a",
      light2: "#a1bad0",
      light3: "#d0dde8",
    },
    primaryLight1: {
      main: "#5b87ad",
    },
    primaryLight2: {
      main: "#a1bad0",
    },
    primaryDark1: {
      main: "#0e3a61",
    },
    primaryDark2: {
      main: "#082137",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "9px",
          padding: "1.2rem 2.4rem",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
          maxWidth: "130rem",
        },
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Rubik, sans-serif",
      color: "#343a40",
    },
    h1: {
      fontSize: "5.2rem",
      lineHeight: 1.05,
      fontWeight: 700,
    },
    h2: {
      fontSize: "3.4rem",
      fontWeight: 500,
    },
    btn: {
      fontSize: "1.4rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "2rem",
      lineHeight: 1.6,
    },
  },
  spacing: [
    "0.2rem",
    "0.4rem",
    "0.8rem",
    "1.2rem",
    "1.6rem",
    "2.4rem",
    "3.2rem",
    "4.8rem",
    "6.4rem",
    "8rem",
    "9.6rem",
    "12.8rem",
  ],
  shadows: ["none"],
});
