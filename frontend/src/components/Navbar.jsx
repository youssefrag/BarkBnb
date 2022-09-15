import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";

import { UserContext } from "../context/userContext";

import PetsIcon from "@mui/icons-material/Pets";

import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.light,
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

const logoStyle = {
  height: "5rem",
  width: "5rem",
};

export const Navbar = () => {
  const classes = useStyles();

  let navigate = useNavigate();

  const {
    userContextName,
    setName,
    userContextEmail,
    setUserEmail,
    isUserLoggedIn,
    setUserLoggedIn,
  } = useContext(UserContext);

  const handleLogout = () => {
    fetch("http://127.0.0.1:8000/api/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      setName();
      setUserEmail();
      setUserLoggedIn(false);
    });
  };

  if (isUserLoggedIn === true) {
    return (
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography variant="h4">Welcome {userContextName}</Typography>
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar elevation={0} display="flex">
        <Toolbar className={classes.root}>
          <Box>
            <Typography variant="h1" display="inline">
              Bark
            </Typography>
            <PetsIcon
              color="primary"
              sx={logoStyle}
              // className={classes.logoIcon}
            />
            <Typography variant="h1" display="inline">
              Bnb
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{ marginLeft: 4 }}
              color="secondary"
              variant="contained"
              size="large"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
};
