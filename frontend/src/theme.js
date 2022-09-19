import { createTheme } from "@mui/material";

// - Font sizes(px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

export const theme = createTheme({
  palette: {
    primary: {
      main: "#14538a",
      light1: "#a1bad0",
      light2: "#d0dde8",
      dark1: "#0e3a61",
      dark2: "#082137",
      dark3: "#04111c",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { size: "medium" },
          style: {
            padding: "1.2rem 2.4rem",
            fontSize: "1.6rem",
          },
        },
        {
          props: { size: "large" },
          style: {
            padding: "1.6rem 3.2rem",
            fontSize: "1.8rem",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            border: "none",
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: "9px",
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
    h3: {
      fontSize: "2rem",
      lineHeight: 1.6,
    },
    h4: {
      fontSize: "1.6rem",
      lineHeight: 1.6,
    },
    h5: {
      fontSize: "1.4rem",
      lineHeight: 1.6,
    },
    stepNum: {
      fontFamily: "Rubik, sans-serif",
      fontSize: "9rem",
      fontWeight: 700,
      color: "#adb5bd",
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
    "14.2rem",
  ],
  shadows: ["none"],
});
