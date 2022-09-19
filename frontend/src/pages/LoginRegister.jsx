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
  })
);

export const LoginRegister = () => {
  const [page, setPage] = useState("login");
  const [hearAboutUs, setHearAboutUs] = useState("");

  const classes = useStyles();

  const handleChangeHearAboutUs = (event) => {
    setHearAboutUs(event.target.value);
  };

  return (
    <Box marginTop={12}>
      <Container className={classes.heroContainer} marginTop={9} maxWidth="lg">
        <Box className={classes.mainBox}>
          <Box item xs={7} className={classes.information}>
            <Typography variant="h2" color="primary.dark3" marginBottom={4}>
              Create Account
            </Typography>
            <Box className={classes.inputs}></Box>
            <Typography variant="h4" marginBottom={7}>
              Already have an account? Login
            </Typography>
            <Box class={classes.form}>
              <TextField></TextField>
              <TextField></TextField>
              <TextField></TextField>
              <TextField></TextField>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Where did you hear about us?
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hearAboutUs}
                    label="Where did you hear about us?"
                    onChange={handleChangeHearAboutUs}
                  >
                    <MenuItem value={"friendsFajmiy"}>
                      Friends and Family
                    </MenuItem>
                    <MenuItem value={"youtube"}>YouTube video</MenuItem>
                    <MenuItem value={"facebook"}>Facebook Ad</MenuItem>
                    <MenuItem value={"podcast"}>Podcast</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
};
