import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

import { Button, Typography, Box, Container, TextField } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

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
      overflow: "hidden",
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
  let navigate = useNavigate();

  const {
    userContextName,
    setName,
    userContextEmail,
    setUserEmail,
    isUserLoggedIn,
    setUserLoggedIn,
  } = useContext(UserContext);

  // Handle Login data

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLogin((prev) => ({ ...userLogin, [name]: value }));
  };

  const handleLoginSubmit = async () => {
    const { email, password } = userLogin;
    if (!email || !password) {
      alert("Empty Values!");
      return;
    }
    let response = await fetch("http://127.0.0.1:8000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    });
    let result = await response.json();
    if (result.id) {
      setName(result.first_name);
      setUserEmail(result.email);
      setUserLoggedIn(true);
      navigate("/");
    }
  };

  // Handle Register Data

  const [userRegister, setUserRegister] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegisterChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegister((prev) => ({ ...userRegister, [name]: value }));
  };

  const handleRegisterSubmit = async () => {
    const { name, email, password, confirmPassword } = userRegister;
    if (!name || !email || !password || !confirmPassword) {
      alert("Empty Values");
      return;
    } else if (password !== confirmPassword) {
      alert("Passwords are not matching");
      return;
    }
    let response = await fetch("http://127.0.0.1:8000/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userRegister),
    });
    let result = await response.json();
    console.log(result.id);
    if (result.id) {
      setName(name);
      setUserEmail(email);
      setUserLoggedIn(true);
      navigate("/edit-account");
    }
  };

  const [page, setPage] = useState("login");

  const handlePageSwitch = () => {
    if (page === "login") {
      setPage("register");
    } else if (page === "register") {
      setPage("login");
    }
  };

  const classes = useStyles();

  if (page === "register") {
    return (
      <Box marginTop={12}>
        <Container
          className={classes.heroContainer}
          marginTop={9}
          maxWidth="lg"
        >
          <Box className={classes.mainBox}>
            <Box item className={classes.information}>
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
                  name="name"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                  value={userRegister.name}
                  onChange={handleRegisterChange}
                ></TextField>
                <TextField
                  fullWidth
                  placeholder="Enter username"
                  name="username"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                  value={userRegister.username}
                  onChange={handleRegisterChange}
                ></TextField>
                <TextField
                  fullWidth
                  placeholder="Enter Email"
                  name="email"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                  value={userRegister.email}
                  onChange={handleRegisterChange}
                ></TextField>
                <TextField
                  fullWidth
                  placeholder="Enter Password"
                  name="password"
                  type="password"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                  value={userRegister.password}
                  onChange={handleRegisterChange}
                ></TextField>
                <TextField
                  fullWidth
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                  value={userRegister.confirmPassword}
                  onChange={handleRegisterChange}
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
                  onClick={handleRegisterSubmit}
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
                  name="email"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                  value={userLogin.email}
                  onChange={handleLoginChange}
                ></TextField>
                <TextField
                  fullWidth
                  placeholder="Enter Password"
                  name="password"
                  type="password"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                  value={userLogin.password}
                  onChange={handleLoginChange}
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
                  onClick={handleLoginSubmit}
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
