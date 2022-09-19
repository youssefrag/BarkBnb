import React, { useState } from "react";

import { Button, Typography, Box, Container, Grid } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

// import picture from "../assets/images/login-singup.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainBox: {
      backgroundColor: theme.palette.primary.light1,
      borderRadius: "11px",
      boxShadow: "0 2.4rem 4.8rem rgba( 0,0,0,0.15)",
      height: "50rem",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
    },
    information: {
      padding: "4rem",
    },
    switchPage: {
      "&:hover": {
        color: "#14538a",
        border: "none",
        cursor: "pointer",
      },
    },
    imageContainer: {
      backgroundImage: "url('/images/login-signup.png')",
      backgroundSize: "cover",
      width: "auto",
      backgroundPosition: "-12rem",
    },
  })
);

export const LoginRegister = () => {
  const [page, setPage] = useState("login");

  const classes = useStyles();

  return (
    <Box marginTop={12}>
      <Container className={classes.heroContainer} marginTop={9} maxWidth="lg">
        <Box className={classes.mainBox}>
          <Box item xs={7} className={classes.information}>
            <Typography variant="h2" color="primary.dark3" marginBottom={4}>
              Create Account
            </Typography>
            <Typography variant="h5" className={classes.switchPage}>
              Already have an account? Login
            </Typography>
          </Box>
          <Box class={classes.imageContainer}></Box>
        </Box>
      </Container>
    </Box>
  );
};
