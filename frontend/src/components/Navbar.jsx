import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import { NavDropdown } from "./NavDropdown";

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
      paddingLeft: "1.8rem",
    },
    logoIcon: {
      height: "30px",
      width: "30px",
    },
    btnContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "2.4rem",
      paddingRight: "1.8rem",
    },
  })
);

const overrideTheme = {
  logoIcon: {
    height: "3rem",
    width: "3rem",
  },
  navBtn: {
    color: "#343a40",
    "&:hover": {
      color: "#14538a",
      border: "none",
    },
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

  const goToEditAccount = () => {
    navigate("/edit-account");
  };

  if (isUserLoggedIn === true) {
    return (
      <AppBar elevation={0}>
        <Toolbar className={classes.tool}>
          <Box className={classes.logoContainer} onClick={() => navigate("/")}>
            <Typography variant="h2">Bark</Typography>
            <PetsIcon color="primary" sx={overrideTheme.logoIcon} />
            <Typography variant="h2">Bnb</Typography>
          </Box>
          <Box className={classes.btnContainer}>
            <Button size="medium" variant="outlined" sx={overrideTheme.navBtn}>
              Browse Sittings
            </Button>
            <NavDropdown
              letter={userContextName[0].toUpperCase()}
              handleLogout={handleLogout}
              goToEditAccount={goToEditAccount}
            />
          </Box>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar elevation={0}>
        <Toolbar className={classes.tool}>
          <Box className={classes.logoContainer} onClick={() => navigate("/")}>
            <Typography variant="h2">Bark</Typography>
            <PetsIcon color="primary" sx={overrideTheme.logoIcon} />
            <Typography variant="h2">Bnb</Typography>
          </Box>
          <Box className={classes.btnContainer}>
            <Button size="medium" variant="outlined" sx={overrideTheme.navBtn}>
              How it works
            </Button>
            <Button size="medium" variant="outlined" sx={overrideTheme.navBtn}>
              Sittings
            </Button>
            <Button
              size="medium"
              variant="contained"
              onClick={() => navigate("/login-register")}
              sx={{
                backgroundColor: "#04111c",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#04111c",
                },
              }}
            >
              Login/Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
};
