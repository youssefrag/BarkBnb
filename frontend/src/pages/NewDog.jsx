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

const dogSizes = [
  {
    value: "S",
    label: "Small",
  },
  {
    value: "M",
    label: "Medium",
  },
  {
    value: "L",
    label: "Large",
  },
];

export const NewDog = () => {
  const classes = useStyles();

  const [dog, setDog] = useState({
    name: "",
    size: "",
  });

  const handleNameChange = (e) => {
    const value = e.target.value;
    setDog((prev) => ({ ...dog, name: value }));
  };

  const handleSizeChange = (e) => {
    setDog((prev) => ({ ...dog, size: e.target.value }));
  };

  console.log(dog);
  return (
    <Box marginTop={12}>
      <Container marginTop={9} maxWidth="lg">
        <Box className={classes.mainBox}>
          <Box className={classes.information}>
            <Typography variant="h2" color="primary.dark3" marginBottom={9}>
              Create new dog profile
            </Typography>

            <Box class={classes.form}>
              <TextField
                fullWidth
                placeholder="Enter dog's Name"
                name="name"
                class={classes.field}
                InputProps={{
                  style: styling.resize,
                }}
                value={dog.name}
                onChange={handleNameChange}
              ></TextField>

              <TextField
                select
                placeholder="Select dog size"
                fullWidth
                class={classes.field}
                InputProps={{
                  style: styling.resize,
                }}
                value={dog.size}
                onChange={handleSizeChange}
              >
                {dogSizes.map((size) => (
                  <MenuItem
                    sx={{ fontSize: "1.8rem" }}
                    key={size.value}
                    value={size.value}
                  >
                    {size.label}
                  </MenuItem>
                ))}
              </TextField>
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
                // onClick={handleRegisterSubmit}
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
