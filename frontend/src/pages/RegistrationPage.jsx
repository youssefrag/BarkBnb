import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { UserContext } from "../context/userContext";

const useStyles = makeStyles({
  root: {
    marginTop: "100px",
  },
});

export const RegistrationPage = () => {
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

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => ({ ...user, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, email, password } = user;
    if (!name || !email || !password) {
      alert("Empty Values!");
      return;
    }
    fetch("http://127.0.0.1:8000/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(() => {
      setName(user.name);
      setUserEmail(user.email);
      setUserLoggedIn(true);
      navigate("/edit-account");
    });
  };

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h3">Registration Page</Typography>
        <form id="registration-form" noValidate autoComplete="off">
          <TextField
            type="text"
            label="Name"
            name="name"
            color="secondary"
            required
            value={user.name}
            onChange={handleChange}
            className={classes.field}
          />
          <TextField
            type="text"
            label="Username"
            name="username"
            color="secondary"
            required
            value={user.username}
            onChange={handleChange}
            className={classes.field}
          />
          <TextField
            className={classes.input}
            type="text"
            label="Email"
            name="email"
            color="secondary"
            required
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            color="secondary"
            required
            value={user.password}
            onChange={handleChange}
          />
          <div>
            <Button variant="contained" size="large" onClick={handleSubmit}>
              Register!
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
