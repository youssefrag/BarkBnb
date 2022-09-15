import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3bc9db",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Rubik, sans-serif",
      // fontFamily: "Times New Roman",
    },
  },
  spacing: [0, "1rem", 3, 5, 8],
});
