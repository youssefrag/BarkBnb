import React, { useState, useContext } from "react";
import {
  Button,
  Typography,
  Box,
  Container,
  TextField,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

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
    imageContainer: {
      backgroundImage: "url('/images/new-dog-page.png')",

      backgroundSize: "cover",
      width: "auto",
      backgroundPosition: "-20rem",
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

  let navigate = useNavigate();

  const { userContextEmail } = useContext(UserContext);

  const [dog, setDog] = useState({
    name: "",
    size: "",
    dog_image: null,
  });

  const handleNameChange = (e) => {
    setDog((prev) => ({ ...dog, name: e.target.value }));
  };

  const handleSizeChange = (e) => {
    setDog((prev) => ({ ...dog, size: e.target.value }));
  };

  const handlePictureUpload = (e) => {
    setDog((prev) => ({ ...dog, dog_image: e.target.files[0] }));
  };

  const handleSubmit = () => {
    const dogProfileData = new FormData();
    dogProfileData.append("name", dog.name);
    dogProfileData.append("size", dog.size);
    if (dog.dog_image) {
      dogProfileData.append("dog_image", dog.dog_image, dog.dog_image.name);
    }

    fetch(`http://127.0.0.1:8000/api/new-dog/${userContextEmail}`, {
      method: "POST",
      body: dogProfileData,
    }).then(() => {
      navigate("/dogs");
    });
  };

  return (
    <Box marginTop={12}>
      <Container marginTop={9} maxWidth="lg">
        <Box className={classes.mainBox}>
          <Box className={classes.information}>
            <Typography variant="h2" color="primary.dark3" marginBottom={11}>
              Create new dog profile
            </Typography>

            <Box class={classes.form}>
              <TextField
                fullWidth
                placeholder="Enter dog's Name"
                name="name"
                className={classes.field}
                InputProps={{
                  style: styling.resize,
                }}
                value={dog.name}
                onChange={handleNameChange}
              ></TextField>

              <TextField
                select
                fullWidth
                label="Select dog size"
                className={classes.field}
                InputProps={{
                  style: styling.resize,
                }}
                InputLabelProps={{ style: { fontSize: "2rem" } }}
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
              <label
                style={{
                  fontSize: "2rem",
                  fontFamily: "Rubik, sans-serif",
                }}
              >
                Dog Image
                <input
                  type="file"
                  name="dog_image"
                  onChange={handlePictureUpload}
                />
              </label>
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
                onClick={handleSubmit}
              >
                Submit!
              </Button>
            </Box>
          </Box>
          <Box class={classes.imageContainer}></Box>
        </Box>
      </Container>
    </Box>
  );
};
