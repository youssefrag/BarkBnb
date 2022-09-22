import { useState } from "react";

import { makeStyles, createStyles } from "@mui/styles";
import { Typography, TextField, Button, Container, Box } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainBox: {
      backgroundColor: theme.palette.primary.light1,
      borderRadius: "11px",
      boxShadow: "0 2.4rem 4.8rem rgba( 0,0,0,0.15)",
      height: "50rem",
      width: "100%",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
    },
    information: {
      padding: "4rem",
    },
    textfields: {
      display: "flex",
      gap: "10rem",
    },
    imageContainer: {
      backgroundImage: "url('/images/dalmatian.png')",

      backgroundSize: "cover",
      width: "auto",
      backgroundPosition: "-12rem",
    },
  })
);

const styling = {
  resize: {
    fontSize: "2rem",
  },
};

export const CreateSitting = () => {
  const { dogName } = useParams();

  const classes = useStyles();

  let [sitting, setSitting] = useState({
    dog: dogName,
    city: "",
    startDate: null,
    endDate: null,
  });

  return (
    <Box marginTop={12}>
      <Container className={classes.heroContainer} marginTop={9} maxWidth="lg">
        <Box className={classes.mainBox}>
          <Box className={classes.information}>
            <Typography
              Typography
              variant="h2"
              color="primary.dark3"
              marginBottom={8}
            >
              {dogName} needs a sitter 🐾
            </Typography>
            <form
              id="edit-account"
              noValidate
              autoComplete="off"
              enctype="multipart/form-data"
            >
              <Box marginBottom={8} className={classes.textfields}>
                <TextField
                  focused
                  fullwidth
                  type="text"
                  label="Name"
                  name="name"
                  color="primary"
                  class={classes.field}
                  InputProps={{
                    style: styling.resize,
                  }}
                  InputLabelProps={{
                    style: { color: "#000" },
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "9px",
                  }}
                  required
                  // value={profile.name}
                  // onChange={handleChange}
                />
                <TextField
                  type="text"
                  label="Bio"
                  name="bio"
                  color="primary"
                  InputProps={{
                    style: styling.resize,
                  }}
                  InputLabelProps={{
                    style: { color: "#000", fontSize: "2rem" },
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "9px",
                  }}
                  required
                  // value={profile.bio}
                  // onChange={handleChange}
                  className={classes.field}
                />
              </Box>
              <Box>
                <label style={{ fontSize: "2rem" }}>
                  Profile Image
                  <input
                    type="file"
                    name="profile_image"
                    // onChange={handlePictureUpload}
                  />
                </label>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    color: "#fff",
                    backgroundColor: "#04111c",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#04111c",
                    },
                  }}
                  // onClick={handleSubmit}
                >
                  Post Sitting!
                </Button>
              </Box>
            </form>
          </Box>
          <Box className={classes.imageContainer}></Box>
        </Box>
      </Container>
    </Box>
  );
};
