import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { UserContext } from "../context/userContext";
import { useTheme } from "@mui/material";

export const Navbar = () => {
  const theme = useTheme();

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
      <AppBar color="primary">
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
      <AppBar>
        <Toolbar>
          <Typography variant="h4">BarkBnb</Typography>
          <Button
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
        </Toolbar>
      </AppBar>
    );
  }
};
