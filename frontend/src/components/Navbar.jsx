import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";

import { UserContext } from "../context/userContext";

import PetsIcon from "@mui/icons-material/Pets";

import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    tool: {
      backgroundColor: theme.palette.primary.light2,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.5rem",
    },
    logoContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
    },
    logoIcon: {
      height: "30px",
      width: "30px",
    },
    btnContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "3.2rem",
    },
    loginBtn: {
      paddingTop: 1,
      color: "#fff",
      height: "4.2rem",
      borderRadius: "50%",
    },
    navBtn: {
      "&:hover": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary,
      },
    },
  })
);

const overrideTheme = {
  logoIcon: {
    height: "5rem",
    width: "5rem",
  },
  navBtn: {
    color: "#0e3a61",
  },
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
      <AppBar elevation={0}>
        <Toolbar className={classes.tool}>
          <Box className={classes.logoContainer} onClick={() => navigate("/")}>
            <Typography variant="h1">Bark</Typography>
            <PetsIcon color="primaryDark2" sx={overrideTheme.logoIcon} />
            <Typography variant="h1">Bnb</Typography>
          </Box>
          <Box className={classes.btnContainer}>
            <Button>
              <Typography
                className={classes.navBtn}
                variant="btn"
                sx={overrideTheme.navBtn}
              >
                How it works
              </Typography>
            </Button>
            <Button>
              <Typography
                className={classes.navBtn}
                variant="btn"
                sx={overrideTheme.navBtn}
              >
                Sittings
              </Typography>
            </Button>
            <Button
              elevation={0}
              color="primaryDark2"
              className={classes.loginBtn}
              variant="contained"
              onClick={() => navigate("/login")}
            >
              <Typography color="#fff" variant="btn">
                Login/Register
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
};
