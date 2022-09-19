import React, { useState } from "react";

import {
  Button,
  Typography,
  Box,
  Container,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
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
    form: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "3.2rem",
      rowGap: "2.4rem",
    },
    btn: {
      backgroundColor: "#04111c",
    },
    field: {
      backgroundColor: "#fff",
      width: "100%",
      borderRadius: "9px",
    },
  })
);

const styling = {
  resize: {
    fontSize: "2rem",
  },
};

export const LoginRegister = () => {
  const [page, setPage] = useState("login");
  const handlePageSwitch = () => {
    if (page === "login") {
      setPage("register");
    } else if (page === "register") {
      setPage("login");
    }
  };

  const classes = useStyles();

  console.log(page);

  if (page === "register") {
    return (
      <Box marginTop={12}>
        <Container
          className={classes.heroContainer}
          marginTop={9}
          maxWidth="lg"
        >
          <Box className={classes.mainBox}>
            <Box item xs={7} className={classes.information}>
              <Typography variant="h2" color="primary.dark3" marginBottom={4}>
                Create Account
              </Typography>
              <Box className={classes.inputs}></Box>
              <Typography
                variant="h4"
                marginBottom={7}
                className={classes.switchPage}
                onClick={handlePageSwitch}
              >
                Already have an account? Login
              </Typography>
              <Box class={classes.form}>
                <TextField
                  fullWidth
                  placeholder="Enter Full Name"
                  id="name"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                ></TextField>
                <TextField
                  fullWidth
                  placeholder="Enter Email"
                  id="email"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                ></TextField>
                <TextField
                  fullWidth
                  placeholder="Enter Password"
                  id="password"
                  type="password"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                ></TextField>
                <TextField
                  fullWidth
                  placeholder="Confirm Password"
                  id="confirm-password"
                  type="password"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                ></TextField>

                <Button
                  className={classes.btn}
                  sx={{
                    backgroundColor: "#04111c",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#04111c",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
            <Box class={classes.imageContainer}></Box>
          </Box>
        </Container>
      </Box>
    );
  } else if (page === "login") {
    return (
      <Box marginTop={12}>
        <Container
          className={classes.heroContainer}
          marginTop={9}
          maxWidth="lg"
        >
          <Box className={classes.mainBox}>
            <Box item xs={7} className={classes.information}>
              <Typography variant="h2" color="primary.dark3" marginBottom={4}>
                Login to your Account
              </Typography>
              <Box className={classes.inputs}></Box>
              <Typography
                variant="h4"
                marginBottom={9}
                className={classes.switchPage}
                onClick={handlePageSwitch}
              >
                Do not have an account yet? Sign up
              </Typography>
              <Box class={classes.form}>
                <TextField
                  fullWidth
                  placeholder="Enter Email"
                  id="email"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                ></TextField>
                <TextField
                  fullWidth
                  placeholder="Enter Password"
                  id="password"
                  type="password"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                ></TextField>

                <Button
                  className={classes.btn}
                  sx={{
                    marginTop: "6rem",
                    backgroundColor: "#04111c",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#04111c",
                    },
                  }}
                >
                  Login
                </Button>
              </Box>
            </Box>
            <Box class={classes.imageContainer}></Box>
          </Box>
        </Container>
      </Box>
    );
  }
};
