import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#e67e22",
      light: "#fae5d3",
      lighter: "#fdf2e9",
      dark: "#cf711f",
      darker: "#45260a",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Rubik, sans-serif",
    },
    h1: {
      fontSize: "5rem",
    },
    btn: {
      fontSize: "1.4rem",
      fontWeight: 600,
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
