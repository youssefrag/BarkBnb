import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";

import { UserContext } from "../context/userContext";

import PetsIcon from "@mui/icons-material/Pets";

import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    tool: {
      backgroundColor: theme.palette.primary.light,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingY: 2,
    },
    logoContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    btnContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "2rem",
    },
    loginBtn: {
      padding: "1.2rem 2,4rem",
      color: "#fff",
      height: "4.2rem",
    },
    navBtn: {
      "&:hover": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
      },
    },
  })
);

const styles = {
  logoIcon: {
    height: "5rem",
    width: "5rem",
  },
  btnStyle: {
    paddingY: 3,
    paddingX: 5,
    borderRadius: "15px",
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
        <Toolbar className={classes.tool} sx={{ paddingY: 2 }}>
          <Box className={classes.logoContainer}>
            <Typography variant="h1">Bark</Typography>
            <PetsIcon color="primary" sx={styles.logoIcon} />
            <Typography variant="h1">Bnb</Typography>
          </Box>
          <Box className={classes.btnContainer}>
            <Button>
              <Typography
                className={classes.navBtn}
                variant="btn"
                color="black"
              >
                How it works
              </Typography>
            </Button>
            <Button>
              <Typography
                className={classes.navBtn}
                variant="btn"
                color="black"
              >
                Sittings
              </Typography>
            </Button>
            <Button
              className={classes.loginBtn}
              variant="contained"
              onClick={() => navigate("/login")}
              sx={styles.btnStyle}
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
